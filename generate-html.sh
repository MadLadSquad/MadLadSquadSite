#!/bin/bash
if [[ "$1" == "" ]]; then
	mkdir build &> /dev/null || (rm -rf build && mkdir build)
	cp *.md docs/ games/ untitled-desktop/ monthly-newsletter/ build/ -r
	cd build/ || exit
fi
for i in `find ./ -type f -name '*.md' -printf '%p\n'` ; do
	title=$(grep "# " "$i" | head -1 | sed 's/[^ ]* //')
	front_matter=$(echo -e "---\ntitle: ${title}\n---")
	printf '%s\n%s\n' "${front_matter}" "$(cat "$i")" > "$i"
	pandoc --standalone --template ../template.html -s "$i" -o `dirname $i`/`basename $i md`html
	rm $(realpath "$i")
done
mv README.html index.html
cp ../main.css .

find ./ -type f -exec sed -i 's/<table style="width:100%;">/<div class="table"><table style="width:100%;">/g' {} \;
find ./ -type f -exec sed -i 's/<\/table>/<\/table><\/div>/g' {} \;
