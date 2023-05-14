//2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// let nama = 'hilman';
// console.log(nama)

// creation phase pada Global Context
// nama let = undefined
// nama function = fn()
// hoisting
// window = global Object
// this.window

// execution phase

// console.log(sayHello());

// var nama = 'hilman';
// var umur = 33;

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat local execution context
// yang di dalamnya terdapat ceation dan execution phase
// window
// arguments
// hoisting

// var nama = "hilman septiana";
// var username = "@hilmanseptiana";

// function cetakURL(username) {
//   var instagramURL = "http://instagram.com";
//   return instagramURL + username;
// }

// console.log(cetakURL(username));

//tumpukan eksekusi
// function a() {
//   console.log("ini a");
//   function b() {
//     console.log("ini b");
//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }

// a();
// a b c

function satu() {
  var nama = "Hilman";
  console.log(nama);
}

function dua(){
    console.log(nama)
}

console.log(nama);
var nama = "Agus";
satu();
dua("Herman");
console.log(nama);
