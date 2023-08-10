#!/bin/bash
rm -rf *.md
rm -rf Components/ UBTCustomFunctions/ UVBuildTool/ .github/ docs/ monthly-newsletter/ untitled-desktop/
mv build/*.html .
mv build/*/ .
rm -rf build/ UVKBuildTool/
