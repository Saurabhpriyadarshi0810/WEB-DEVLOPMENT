console.log("hello");

let age = 1;
let grace = 2;

// console.log(age  + grace);
// console.log(age  - grace);
// console.log(age  * grace);
// console.log(age  / grace);
// console.log(age  ** grace);
// console.log(age  % grace);


/*
I am a 
multiline 
comment
*/

if((age+grace)>= 18) {
    console.log("you can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}


else {
    console.log("you can't drive");
}


a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/