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
gulp build
cd ..
