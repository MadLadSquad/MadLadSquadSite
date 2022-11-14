#!/bin/bash
cd docs

# Please don't touch this there are a lot of problems with this specific file
sed -i '1 i\{% raw %}' UntitledTextGenerator/Templating-guide.md
echo "{% endraw %}" >> UntitledTextGenerator/Templating-guide.md

sed -i '1 i\{% raw %}' UntitledPackageSchemeGenerator/Creating-your-package.md
echo "{% endraw %}" >> UntitledPackageSchemeGenerator/Creating-your-package.md

cd UntitledImGuiFramework/
echo -e "\n---\n" >> Home.md
cat _Sidebar.md >> Home.md
cd ../

cd UntitledVulkanGameEngine/
echo -e "\n---\n" >> Home.md
cat _Sidebar.md >> Home.md
cd ../

find ./ -type f -exec sed -i 's/https:\/\/github.com\/MadLadSquad\//https:\/\/madladsquad.com\/docs\//g' {} \;
find ./ -type f -exec sed -i 's/\/wiki\//\//g' {} \;

