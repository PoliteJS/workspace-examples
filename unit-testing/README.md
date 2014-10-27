Unit Testing Example
====================

This example produces some modules shipped with a full unit testing support.

    // quick start:
    npm install && gulp
    
    // to run tests
    gulp test
    

This app implements a simple calculator utility which is able
to resolve matematical expression (yes, that's a thing!)

To do that we use 2 **UI modules** which show the input panel and the
expression hystory.  
Those are "application" modules.

The real core of the app is a **"domain" module** which is responsible
of solving the problem and communicate the outcome with a _pub/sub_ mechanism.

Here there are "real stuff" which can contain horrible mistakes... so it is
a **"save my ass" strategy** to secure it's implementation with some unit tests!

> this is also a good example of **module communication** via _pub/sub_