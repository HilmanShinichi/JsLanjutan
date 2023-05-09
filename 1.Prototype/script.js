// Cara untuk membuat Object pada javascript
//1. Object Literal
let mahasiswa = {
    nama: 'Hilman',
    energi: 10,
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
}


//2. Function Declaration
//3. Constructor Function
//4. Object.create