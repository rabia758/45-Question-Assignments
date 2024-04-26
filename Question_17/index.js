"use strict";
let myfriends = ['arhama', 'jawad', 'salman', 'faryal', 'moni', 'ruba', 'rida'];
console.log('table is not aveliable i can invite only two person\\n');
// remove all three elements
let friends1 = myfriends.pop();
console.log(`sorry Mam. ${friends1} you are not invited`);
let friends2 = myfriends.pop();
console.log(`sorry Mam. ${friends2} you are not invited`);
let friends3 = myfriends.pop();
console.log(`sorry Mam. ${friends3} you are not invited`);
let friends4 = myfriends.pop();
console.log(`sorry Mam. ${friends4} you are not invited`);
let friends5 = myfriends.pop();
console.log(`sorry Mr. ${friends5} you are not invited`);
for (let i = 0; i < myfriends.length; i++) {
    console.log(`\n Mr/mam. ${myfriends[i]} you are still invited`);
}
myfriends.pop();
myfriends.pop();
console.log(myfriends);
