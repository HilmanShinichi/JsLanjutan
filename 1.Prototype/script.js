// Cara untuk membuat Object pada javascript
//1. Object Literal
//TIDAK EFEKTIF untuk object yang banyak
// let mahasiswa = {
//     nama: 'Hilman',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// let mahasiswa2 = {
//     nama: 'Gita',
//     energi: 20,
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

//2. Object Created

// const methodeMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain!`);
//   },
//   tidur: function(jam){
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat Tidur!`)
//   }
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodeMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let hilman = Mahasiswa("hilman", 10);

// let hilman = Mahasiswa('Hilman', 20);
// let gita = Mahasiswa('Gita', 15);
//3. Constructor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }

// }

// let hilman = new Mahasiswa('hilman', 10);

//3. Object prototype
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//   }

//   Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
//   }

//   Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat Bermain!`;
//   }

//   Mahasiswa.prototype.tidur = function(jam){
//     this.energi *= jam * 2
//     return `Halo ${this.nama}, selamat tidur!`;
//   }

//   let hilman = Mahasiswa("hilman", 10);

//4. Object prototype versi class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }

  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat Bermain!`;
  }

  tidur(jam) {
    this.energi *= jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
  }
}

let hilman = Mahasiswa("hilman", 10);
