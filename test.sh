#!/bin/bash

clear

echo "";
echo "";
echo "---------------------------------------";
echo "This script will build all the examples";
echo "---------------------------------------";
echo "";
echo "";

echo "";
echo "";
echo "---------------------------------------";
echo "custom-twitter-bootstrap";
echo "---------------------------------------";
echo "";
echo "";

cd custom-twitter-bootstrap
npm install
gulp build
cd ..
clear

echo "";
echo "";
echo "---------------------------------------";
echo "dev-server";
echo "---------------------------------------";
echo "";
echo "";

cd dev-server
npm install
gulp build
cd ..
clear

echo "";
echo "";
echo "---------------------------------------";
echo "entry-points-dynamic";
echo "---------------------------------------";
echo "";
echo "";

cd entry-points-dynamic
npm install
gulp build
cd ..
clear

echo "";
echo "";
echo "---------------------------------------";
echo "entry-points-static";
echo "---------------------------------------";
echo "";
echo "";

cd entry-points-static
npm install
gulp build
cd ..
clear

echo "";
echo "";
echo "---------------------------------------";
echo "external-libraries";
echo "---------------------------------------";
echo "";
echo "";

cd external-libraries
npm install
gulp build
cd ..
clear

echo "";
echo "";
echo "---------------------------------------";
echo "unit-testing";
echo "---------------------------------------";
echo "";
echo "";

cd unit-testing
npm install
gulp init-tdd
gulp build
gulp test
cd ..
clear

echo "";
echo "";
echo "---------------------------------------";
echo "ReactJS";
echo "---------------------------------------";
echo "";
echo "";

cd unit-testing
gulp init-tdd
npm install
gulp build
gulp test
cd ..
