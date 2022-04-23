#!/usr/bin/env python3



import os

MATH_JAX_SCRIPT = """
        <script type="text/x-mathjax-config">
            MathJax.Hub.Config({
                extensions: ["tex2jax.js"],
                jax: ["input/TeX", "output/HTML-CSS"],
                tex2jax: {
                  inlineMath: [ ['$','$'], ["\\\\(", "\\\\)"] ],
                  displayMath: [ ['$$','$$'], ["\\\\[","\\\\]"] ],
                  processEscapes: true
                },
                "HTML-CSS": { fonts: ["TeX"] }
            });
        </script>""" + "\n\n\t\t"

MATH_JAX_LOAD = """<script async type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>"""

SCRIPT_IMPORT_STATEMENT = '\n\t\t<script type="text/javascript" src="{}", charset="utf-8"></script>'

SCRIPT_LABEL = "<!-- Custom JS scripts -->"

SCRIPT_DIR = "config_files/js"


SCRIPT_NAMES = ["allow_hidden.js"]


def is_html(filename):
    return ".html" in filename
    

def make_file_path(dirpath, filename):
    return dirpath + "/" + filename


def get_html_from_dir(dirpath, filenames):
    dir_html = []

    for filename in filenames:
        if is_html(filename):
            dir_html += [make_file_path(dirpath, filename)]
    return dir_html


def get_all_html_files(path):
    files = []
    for dirpath, dirname, filenames in os.walk(path):
        files += get_html_from_dir(dirpath, filenames)
    return files


def read_file(filename):
    with open(filename) as file:
        return file.read()



def get_mathjax_load_line(html):
    return html.find(MATH_JAX_LOAD)


def update_file(filename, html):
    new_file = open(filename, "w")
    for line in html:
        new_file.write(line)

    new_file.close()



def generate_script_path(filename, script_name):
    depth = filename.count(r"/") - 2
    return r"../" * depth + SCRIPT_DIR + "/" + script_name


def generate_script_import(filename, script_name):
    return SCRIPT_IMPORT_STATEMENT.format(generate_script_path(filename, 
                                                               script_name))

def get_import_script_line(html):
    return html.find(SCRIPT_LABEL) + len(SCRIPT_LABEL)

def insert_script(filename, html, place, script):
    new_html = html[:place] + script + html[place:]
    update_file(filename, new_html)



def implement_script(filename, script, get_place):
    html = read_file(filename)
    script_place = get_place(html)

    if script_place: insert_script(filename, 
                                   html, 
                                   script_place, 
                                   script)

def main():
    path = "../book"
    html_files = get_all_html_files(path)

    for filename in html_files:
        print(filename)
        implement_script(filename, 
                         MATH_JAX_SCRIPT, 
                         get_mathjax_load_line)

        for script_name in SCRIPT_NAMES:
            import_statement = generate_script_import(filename, 
                                                      script_name)

            implement_script(filename,
                             import_statement,
                             get_import_script_line)

main()



