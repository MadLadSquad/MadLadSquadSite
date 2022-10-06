#!/bin/bash
cd docs

# Please don't touch this there are a lot of problems with this specific file
sed -i '1 i\{% raw %}' UntitledTextGenerator/Templating-guide.md
echo "{% endraw %}" >> UntitledTextGenerator/Templating-guide.md

find ./ -type f -exec sed -i 's/https:\/\/github.com\/MadLadSquad\//https:\/\/madladsquad.com\/docs\//g' {} \;
find ./ -type f -exec sed -i 's/\/wiki\//\//g' {} \;
