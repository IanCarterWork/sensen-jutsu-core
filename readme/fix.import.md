

RegExp : import\s(.*)\sfrom\s"\.\/(.*)"
Replace : import $1 from "./$2.js"
Include : *.js
Exclude : ./sanbox, ./sanbox-build
