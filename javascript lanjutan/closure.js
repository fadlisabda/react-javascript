//lexical scope
// function init(){
// let nama = 'Fadli'; local variabel
// return function (nama){ inner function(closure)
//     console.log(nama); akses ke parent variabel
// }
// }
// let panggilNama=init();
// panggilNama('fadli');
// panggilNama('sabda');
// console.dir();

//function factories
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama},Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }
// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");
// selamatPagi("Fadli");
// selamatMalam("Sabda");
// console.dir(selamatMalam);

//private method IIFE
let add = (function () {
  let counter = 0; //private
  return function () {
    return ++counter;
  };
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
