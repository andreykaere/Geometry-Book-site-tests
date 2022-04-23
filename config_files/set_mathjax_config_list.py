#!/usr/bin/env python3

import os

def get_lines(script):
    lines = script.split("\n")
    return [i + "\n" for i in lines if i]

CONFIG_SCRIPT = r"""
<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
        extensions: ["tex2jax.js"],
        jax: ["input/TeX", "output/HTML-CSS"],
        tex2jax: {
          inlineMath: [ ['$','$'], ["\\(", "\\)"] ],
          displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
          processEscapes: true
        },
        "HTML-CSS": { fonts: ["TeX"] }
    });
</script>"""

MATH_JAX_LOAD = """<script async type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>"""

SCRIPT_LINES = get_lines(CONFIG_SCRIPT)


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


def get_file_lines(filename):
    with open(filename) as file:
        return [line for line in file]


def get_mathjax_load_line(html):
    for line_number, line in enumerate(html):
        if line.strip() == MATH_JAX_LOAD:
            return line_number


def update_file(filename, html):
    new_file = open(filename, "w")
    for line in html:
        new_file.write(line)

    new_file.close()


def insert_script(filename, html, place):
    for line in SCRIPT_LINES[::-1]:
        html.insert(place, line)

    update_file(filename, html)


def add_config(filename):
    html = get_file_lines(filename)
    script_place = get_mathjax_load_line(html)

    if script_place: insert_script(filename, html, script_place)



def main():
    path = "./book"
    html_files = get_all_html_files(path)
    
    for filename in html_files:
        add_config(filename)
    

main()


