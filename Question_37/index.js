"use strict";
function make_shirt(size = 'large', message = 'i love typescript') {
    console.log(`making a ${size} t-shirt with the message ${message},printed on it`);
}
make_shirt(); //default large and message
make_shirt('medium'); //default message medium size.
make_shirt('small', 'Drive into coding'); //custom message small size
