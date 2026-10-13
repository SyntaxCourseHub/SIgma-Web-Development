let a=1;

// console.log(a);
// console.log(a+1);
// console.log(a+2);
// console.log(a+3);
// console.log(a+4);
// Same Task can be Done Using Loops
for (let i  = 0; i < 100; i++) {
    console.log(a +i);    
    
}
let obj={
    name: "Apple",
    ID: 55666,
    company: "Apple Inc."
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element);
    
}
for (const c of "APPLE"){
    console.log(c)
    
}
let i=2;
while (i<=10) {
    console.log(i);
    i++;
}
let n=100;
//It run atleast one time
do {
    console.log(n)
    
} while (i<6);