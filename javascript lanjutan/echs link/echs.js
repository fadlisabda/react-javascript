//urutan dijalankan program pada Global Context
//hoisting=nama var = undefined,nama function = fn(),consolelog,isi variabel,return function
//window = global object
//this = window
// console.log(nama);
// var nama = "fadli";
//contoh lain
// console.log(sayHello());
// var nama = "fadli";
// var umur = 21;
// function sayHello() {
//   return `Halo,nama saya ${nama},saya ${umur} tahun.`;
// }

//function membuat local execution context
//yang didalamnya terdapat creation dan execution phase
//bisa akses=window,arguments
//ada hoisting
//contoh scope
// var nama = "fadli";
// var username = "@fadlisabda01";
// function cetakURL() {
//   console.log(arguments[0]);
//   var instagramURL = "http://instagram.com/";
//   return instagramURL + username;
// }
// console.log(cetakURL("fadlisabda02"));

//contoh tumpukan eksekusi hilang
// function a(){
//     console.log('ini a');
//     function b(){
//     console.log('ini b');
//         function c(){
//         console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();

//contoh lengkap echs
function satu() {
  var nama = "fadli";
  console.log(nama);
}
function dua() {
  console.log(nama);
}
console.log(nama);
var nama = "sabda";
satu();
dua("dinov");
console.log(nama);
