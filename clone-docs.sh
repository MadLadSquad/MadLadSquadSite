#!/bin/bash
add_sidebar() {
  cd "$1"/
  echo -e "\n---\n" >> Home.md
  cat _Sidebar.md >> Home.md
  cd ..
}

cd docs

# Please don't touch this there are a lot of problems with this specific file
sed -i '1 i\{% raw %}' UntitledTextGenerator/Templating-guide.md
echo "{% endraw %}" >> UntitledTextGenerator/Templating-guide.md

# Add back soon
#sed -i '1 i\{% raw %}' UntitledPackageSchemeGenerator/Creating-your-package.md
#echo "{% endraw %}" >> UntitledPackageSchemeGenerator/Creating-your-package.md

add_sidebar UntitledImGuiFramework
add_sidebar UntitledVulkanGameEngine
add_sidebar UntitledTextGenerator
add_sidebar UntitledPackageSchemeGenerator
add_sidebar UntitledExec
add_sidebar UntitledRuntimeLibraryLoader
add_sidebar YouyinWeb
add_sidebar UVKBuildTool

find ./ -type f -exec sed -i 's/https:\/\/github.com\/MadLadSquad\//https:\/\/madladsquad.com\/docs\//g' {} \;
find ./ -type f -exec sed -i 's/\/wiki\//\//g' {} \;

