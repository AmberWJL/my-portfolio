#!/bin/bash
npm run build
cd build
git init
git remote add origin https://github.com/amberwjl/amberwjl.github.io.git
git checkout -b main
git add .
git commit -m "Deploy update"
git push -f origin main
cd ..
