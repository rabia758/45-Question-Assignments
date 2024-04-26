 let guestlist : string [] = ['rida','uzma','hira'];



//Think of three more guests to invite to dinner.

guestlist.unshift("fahad");
//Add one new guest to the beginning of your array.

guestlist.splice(guestlist.length/2, 2,"jawad");
// Add one new guest to the middle of your array.

guestlist.push("merab");
//Use append() to add one new guest to the end of your list


for (let i=0; i<guestlist.length; i++){
    console.log(`dear ${guestlist[i]}, \n\n"Please have a dinner with us tommorrow.\n\n`);
}
console.log("we have found a bigger dinner table,so we invite more guests.")