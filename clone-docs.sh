#!/bin/bash
add_sidebar() {
  cd "$1"/ || exit
  for FILE in *.md; do
    echo -e "\n\n---\n" >> "$FILE"
    cat _Sidebar.md >> "$FILE"
  done
  cd .. || exit
}

cd docs || exit

mv UVKBuildTool UVKBuildToolN

# Please don't touch this there are a lot of problems with this specific file
sed -i '1 i\{{ raw' UntitledTemplatingEngine/Templating-guide.md
echo "}}" >> UntitledTemplatingEngine/Templating-guide.md

# Add back soon
#sed -i '1 i\{% raw %}' UntitledPackageSchemeGenerator/Creating-your-package.md
#echo "{% endraw %}" >> UntitledPackageSchemeGenerator/Creating-your-package.md

add_sidebar UntitledImGuiFramework
add_sidebar UntitledVulkanGameEngine
add_sidebar UntitledTemplatingEngine
add_sidebar UntitledPackageGenerator
add_sidebar UntitledExec
add_sidebar UntitledRuntimeLibraryLoader
add_sidebar YouyinWeb
add_sidebar UVKBuildTool
add_sidebar UntitledCLIParser
add_sidebar UntitledGameSystemManager
add_sidebar UntitledXDGBasedir
add_sidebar UntitledImGuiTextUtils

find ./ -type f -exec sed -i 's/https:\/\/github.com\/MadLadSquad\//https:\/\/madladsquad.com\/docs\//g' {} \;
find ./ -type f -exec sed -i 's/\/wiki\//\//g' {} \;

