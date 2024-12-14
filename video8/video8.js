console.log("Hello world")

// convention: qui tắc
//key : value
let a = {
    name: 'Bruyne',
    address: 'Dong Nai'
}
// let a = () => {
    //     name: 'Bruyne';
    //     address: 'Dong nai'
    // };

console.log('What is your name?' , `My name is:`, a.name)
console.log('Where are you from?' , `I'm from :`, a.address)
// also can use way below
// console.log('What is your name?' , `My name is:`, a['name'])
// console.log('Where are you from?' , `I'm from :`, a['address'])

// use this way a[c] when if and only if(khi và chỉ khi) declare a constant for it 
// and don't know what the value passed in is  
let c = 'name'
a[c] = "Loki"
a.c = "Zoro"
//if know exactly property then call property that
// a.name = "Luffy"
console.log('What is your name?' , `My name is:`, a.name, a)     

let b = "Bruyne"
console.log("Type of a:", typeof(a), "Type of b:", typeof(b))