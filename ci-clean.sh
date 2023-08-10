#!/bin/bash
rm -rf *.md
rm -rf Components/ UBTCustomFunctions/ UVBuildTool/ .github/ docs/ monthly-newsletter/ untitled-desktop/
mv build/*.html .
mv build/*/ .
rm -rf build/ UVKBuildTool/

for i in `find ./ -type f -name '*.html' -printf '%p\n'` ; do
	sed -i 's/\.\//https:\/\/madladsquad.com\//g' "$i"
	sed -i 's/\/index\.html//g' "$1"
	sed -i 's/\.html//g' "$1"
done
