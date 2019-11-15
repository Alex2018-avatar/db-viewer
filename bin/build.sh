#!/bin/bash
pwd
URL_PATH_UP=$1
echo "url llegando: $URL_PATH_UP"
#cd ..
cd $URL_PATH_UP
pwd
npm install
#npm install
node index.js