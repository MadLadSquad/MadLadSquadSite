#!/bin/bash
rm -rf *.md
rm -rf Components/ UBTCustomFunctions/ UVBuildTool/ .github/
mv build/*.md .
mv build/*/ .
rm -rf build
