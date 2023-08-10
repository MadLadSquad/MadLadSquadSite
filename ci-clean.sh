#!/bin/bash
rm -rf *.md
rm -rf Components/ UBTCustomFunctions/ UVBuildTool/ .github/
mv build/*.html .
mv build/*/ .
rm -rf build/ UVKBuildTool/


