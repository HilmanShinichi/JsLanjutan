//menggunakan library dari Jquery
// $.ajax({
//     url:'https://dummyjson.com/carts',
//     success: response => console.log(response),
// })

//Pake Vanilla JS
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200){
//         if (xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('get', 'https://dummyjson.com/carts')
// xhr.send();

//Menggunakan Fetch JS
// fetch('https://dummyjson.com/carts')
// .then(response => response.json())
// .then(response => console.log(response))

// Promise
// Object yang merepesentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// Promise 1 sederhana
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if( ditepati ){
//         resolve('Janji telah ditepati');
//     } else {
//         reject('Ingkar Janji')
//     }
// });

// janji1
// .then(response => console.log(`OK! : ${response}`))
// .catch(response => console.log(`NOT OK! : ${response}`))

//Promise 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu!');
//         }, 2000)
//     }
// })

// console.log('mulai');
//console.log(janji2.then(() => console.log(janji2)));
// janji2
// .finally(() => console.log('selesai menunggu!'))
// .then(response => console.log(`OK! : ${response}`))
// .catch(response => console.log(`OK! : ${response}`))
// console.log('selesai');

let janji = true

const motor = new Promise((resolve, reject) =>{
    if(janji){
        setTimeout(() => {
            resolve([{
                merk: 'Honda',
                model: 'Scoopy',
                tahun: '2023'
            }])
        }, 1000)
    }else {
        reject('data error')
    }
    
   
})

const mobil = new Promise((resolve, reject) => {
    if(janji){
        setTimeout(() =>{
            resolve([{
                merk:'Daihatsu',
                model:'Xenia',
                tahun:'2020'
            }])
        }, 500)
    }else{
        reject('Data Error')
    }
    
   
})

Promise.all([motor, mobil])
.then(response => console.log(response)) // menangani jika kondisi true
.catch(error => console.log(error)); // Menangani error jika terjadi
// motor
// .then(response => console.log(response))
// .catch(response => console.log(response))
// mobil
// .then(response => console.log(response))
// .catch(response => console.log(response))





// .then(response => {
//     const [motor, mobil] = response.text();
    
// })
// .then(respontext => console.log(motor);
// console.log(mobil))