#!/usr/bin/env python3

import os
import re

CLASS_EXP = re.compile('class="(.*?)"')
ID_EXP = re.compile('id="(.*?)"')

HIDDEN_SECTIONS_NAMES = {"Рисунок", 
                         "Доказательство", 
                         "Решение", 
                         "Подсказка", }

DIVS = set()
OPEN_DIV_COUNT = 0

def is_html(filename):
    return ".html" in filename


def get_only_filename(filename):
    return re.findall("^(.*)\.", filename)[0]

def make_file_path(dirpath, filename):
    return dirpath + "/" + filename


def get_html_from_dir(dirpath, filenames):
    dir_html = []

    for filename in filenames:
        if is_html(filename):
            dir_html += [(make_file_path(dirpath, filename), filename)]
    return dir_html


def get_all_html_files(path):
    files = []
    for dirpath, dirname, filenames in os.walk(path):
        files += get_html_from_dir(dirpath, filenames)
    return files


def get_lines(file):
    with open(file) as lines:
        return [line for line in lines]


def update_file(file, html):
    new_file = open(file, "w")
    for line in html:
        new_file.write(line)

    new_file.close()


def is_header(line):
    try:
        class_name = CLASS_EXP.search(line).groups()[0]
        return class_name == "header"
    
    except AttributeError:
        return False

def get_section_id(line):
    return ID_EXP.search(line).groups()[0]


def generate_onclick_arg(line, filename):
    section_id = get_section_id(line)
    return section_id + "_" + filename + "_div-hidden"


def add_event_listener(line, filename):
    arr = line.split(">")
    arr[0] += " onclick='sectionToggle(\"{}\", window.localStorage);'" \
            .format(generate_onclick_arg(line, filename))
    
    return ">".join(arr)


def generate_div_id(line, filename):
    section_id = get_section_id(line)
    return section_id + "_" + filename + "_div-visible"


def generate_div(line, filename):
    global DIVS
    
    div_id = generate_div_id(line, filename)
    DIVS.add(div_id)
    
    return "<div id={}>\n".format(div_id)


def open_div(html, line_number, div):
    global OPEN_DIV_COUNT
    OPEN_DIV_COUNT += 1
    
    html.insert(line_number+1, div)


def close_div(html, line_number):
    global OPEN_DIV_COUNT
    OPEN_DIV_COUNT -= 1
   
    html.insert(line_number, "</div>\n")
    return line_number+1 #because we add </div> in a line_number line

def change_section(html, line, line_number, filename, is_first):
    # we have to close a previous <div> block, if it's not thte first one
    if not is_first: 
        line_number = close_div(html, line_number)
    
    html[line_number] = add_event_listener(line, filename)
    div               = generate_div(line, filename)
    
    open_div(html, line_number, div)

    return line_number


def is_end(line):
    return line.strip() == "</main>"


def need_to_close():
    if OPEN_DIV_COUNT < 0: raise "OPEN_DIV_COUNT < 0"

    return OPEN_DIV_COUNT


def add_div(html, line, line_number, filename, is_first):
    global OPEN_DIV_COUNT
    
    if is_end(line):
        if need_to_close():
            # save changes from function
            line_number = close_div(html, line_number)
            
            #reset count before open new file
            OPEN_DIV_COUNT = 0

        return line_number
    
    line_number = change_section(html, 
                                 line, 
                                 line_number, 
                                 filename, 
                                 is_first) # save changes from function
        
    
    return line_number


def is_hidden_section(line):
    return is_header(line) and get_section_id(line) in HIDDEN_SECTIONS_NAMES
    

def wrap_sections(file, filename):
    #print(file, filename)
    html = get_lines(file)
    is_first = True
    line_number = 0
    
    while line_number < len(html):
        line = html[line_number]
        
        if is_end(line) or is_hidden_section(line):
            line_number = add_div(html, 
                                  line, 
                                  line_number, 
                                  filename, 
                                  is_first)
            
            is_first = False

        line_number += 1

    update_file(file, html)


def write_to_script():
    filename  = "js/allow_hidden.js"
    script    = get_lines(filename)
    statement = "\tlet elementsNames = "
    array = str(list(DIVS)) + ";\n"

    for line_number, line in enumerate(script):
        if statement in line:
            script[line_number] = statement + array

    update_file(filename, script)




def main():
    path = "../book"
    html_files = get_all_html_files(path)

    for path_to_file, filename in html_files:
        wrap_sections(path_to_file, get_only_filename(filename))

    write_to_script()
    
    #print(DIVS)

main()

