// Callback
// Synchronous Callback

// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan Nama :');
//     callback(nama);
// }

//tampilkanPesan(halo) //cara 1
// tampilkanPesan(nama => alert(`Halo, ${nama}`)); //cara 2

// const mhs = [
//     {
//         "nama":"hilman",
//         "nik":"0012345",
//         "email":"hilman@gmail.com",
//         "jurusan":"teknik informatika",
//         "idDosenwali": 1
//     },
//     {
//         "nama":"gita",
//         "nik":"0012225",
//         "email":"gita@gmail.com",
//         "jurusan":"teknik informatika",
//         "idDosenwali": 2
//     }
// ]

// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i<10000000; i++) {
//       let date = new Date();
//     }
//     console.log(m.nama);
// });

// console.log('selesai');

// Asynchronous Callback
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

console.log('mulai');

getDataMahasiswa('data/mhs.json', success => {
    const mhs = JSON.parse(success);
    mhs.forEach(m => console.log(m.nama));
}, () => {

});

// JQuery
// console.log('mulai');
// $.ajax({
//     url:'data/mhs.json',
//     success: (mhs) => {
//         mhs.forEach(m => console.log(m.nama));
//     },
//     error: (e) => {
//         console.log(e.responseText);
//     }
// })

// console.log('selesai');