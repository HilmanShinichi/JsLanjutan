//Lexical Scope

// function init() {
//     let nama = 'Hilman'; //local Variable
//     function tampilNama() { //inner function (closure)
//         console.log(nama); // akses ke parent variable
//     }
//     tampilNama();
// }

// init();

// Anonymous function closure
// function init() {
//     return function (nama) {
//         console.log(nama)
//     }


// }

// let panggilNama = init();
// panggilNama('Hilman');
// panggilNama('Septiana');

//contoh closure 2
// function ucapanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan!`);
//     }
// }

// let SelamatPagi = ucapanSalam('Pagi');
// let SelamatSiang = ucapanSalam('Siang');
// let SelamatMalam = ucapanSalam('Malam');

// SelamatPagi('Hilman');
// SelamatSiang('Reza');
// SelamatMalam('Bahrul');

//contoh closure 3
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})(); // () untuk menjalankan inner function / function ke 2

counter = 100; // di isi ulang counter tidak terpengaruh karena ada di dalam local scope

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());