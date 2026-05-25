//eror jika akses i karna pakai let,const kalau var tidak eror
// console.log(i);
// const i = 10;

//function scope=i tidak bisa diakses diluar function
// function tes() {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
// }
// tes();
// console.log(i);

// iife=siaf
// (function () {
//   for (var i = 0; i < 10; i++) {
//     console.log(i);
//   }
// })();
// console.log(i);

//i tidak bisa diakses karna let block scope
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

//i tidak bisa diubah
// const i = 10;
// i = 15;
// const mhs = {
//     nama : 'fadli',
//     umur : 21
// }
// mhs.nama='sabda'; masih bisa
//eror
// mhs = {
//     jurusan : 'teknik informatika'
// }

// const arrTes=[1,2,3];
// arrTes.push(5); masih bisa
// arrTes=[1,2,3,4];//error
// console.log(mhs);
