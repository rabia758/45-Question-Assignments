let guestlist : string [] = ['rida','uzma','hira'];

    let absentperson : string = 'uzma';
    let new_guest : string = 'mahira khan';

    guestlist[1]= new_guest
    for (let i=0; i<guestlist.length; i++){
        console.log('Respected mam ' + guestlist[i] +'\nwe invite you on dinner tommorrow.\n\t\nthankyou\n')
    };
    console.log(`mam. ${absentperson} will not coming dinner tommorrow.`)


