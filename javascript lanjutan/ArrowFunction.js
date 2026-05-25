// function expression
// let mahasiswa = function (nama) {
//   return nama;
// };
// console.log(mahasiswa("fadli"));

//cara arrow function
// let dosen = (nama) => { return nama; };
// console.log(dosen("pak panji"));

// let pacar = (nama,waktu) => {
//   return `Selamat ${waktu},${nama}`;
// }
// console.log(pacar("who","siang"));

//* implisit return
// let teman = nama => `halo,${nama}`;
// console.log(teman("sabda"));

// let teman2 = () => 'Hello World';
// console.log(teman2());

//map return object harus pakai (),properti sama dengan value di object bisa jadi satu cth nama
// let namaPemain = ["mane", "salah", "firmino"];
// let tampilanNamaPemain = namaPemain.map(nama => nama.length);
// console.log(tampilanNamaPemain);
// let tampilanNamaPemain = namaPemain.map(nama => ({nama,tampilan:nama.length}));
// console.table(tampilanNamaPemain);

//TODO:this pada constructor function tanpa Arrow Function tidak masalah
// const Mahasiswa = function () {
//   this.nama = "fadli";
//   this.umur = 21;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama},dan saya ${this.umur} tahun.`);
//   };
// };

// const fadli = new Mahasiswa();

//TODO: constructor function tidak bisa pakai arrow function tapi kalau method bisa
// const Mahasiswa = function () {
//   this.nama = "fadli";
//   this.umur = 21;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama},dan saya ${this.umur} tahun.`);
//   };
// };

// const fadli = new Mahasiswa();

//TODO: object literal
// let mahasiswa = {
//   nama: "fadli",
//   umur: 21,
//   sayHello: () => {
//   this = window
//     console.log(`Halo, nama saya ${this.nama},dan saya ${this.umur} tahun.`);
//     console.log(this);
//   },
// };

//TODO: constructor function
// const Mahasiswa = function () {
//   this.nama = "fadli";
//   this.umur = 21;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama},dan saya ${this.umur} tahun.`);
//   };
//   jika tidak dikasi arrow function setinterval di hoisting jadi this=window,tapi kalau di kasi arrow function this = object
//   setInterval(() => {
//     console.log(this.umur++);
//     console.log(this);
//   }, 500);
// };

// const fadli = new Mahasiswa();
