#!/bin/bash
mkdir docs
cd docs

git clone https://github.com/MadLadSquad/UntitledVulkanGameEngine.wiki.git UntitledVulkanGameEngine
git clone https://github.com/MadLadSquad/UntitledLog.wiki.git UntitledLog/
git clone https://github.com/MadLadSquad/UntitledLinuxGameManager.wiki.git UntitledLinuxGameManager/
git clone https://github.com/MadLadSquad/UntitledImGuiFramework.wiki.git UntitledImGuiFramework/

git clone https://github.com/MadLadSquad/UntitledTextGenerator.wiki.git UntitledTextGenerator/
sed -i '1 i\{% raw %}' UntitledTextGenerator/Templating-guide.md
echo "{% endraw %}" UntitledTextGenerator/Templating-guide.md

find ./ -type f -exec sed -i 's/https:\/\/github.com\/MadLadSquad\//https:\/\/madladsquad.com\/docs\//g' {} \;
find ./ -type f -exec sed -i 's/\/wiki\//\//g' {} \;
