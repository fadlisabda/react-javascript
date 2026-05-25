//prototype inheritance
// function Mahasiswa(nama,energi){
//     sebenarnya this adalah
//     let this = {};
//     sebenarnya {} adalah let this = Object.create(Mahasiswa.prototype);
//     this.nama=nama;
//     this.energi=energi;
//     return this;
// }

// Mahasiswa.prototype.makan=function(porsi){
//     this.energi+=porsi;
//     return `Halo ${this.nama}, Selamat Makan`;
// }

// Mahasiswa.prototype.main=function(jam){
//     this.energi-=jam;
//     return `Halo ${this.nama}, Selamat main`;
// }

// Mahasiswa.prototype.tidur=function(jam){
//     this.energi+=jam*2;
//     return `Halo ${this.nama}, Selamat Tidur`;
// }

// let fadli = new Mahasiswa('fadli',10);

//versi class
// class Mahasiswa{
//     constructor(nama,energi){
//         this.nama=nama;
//         this.energi=energi;
//     }
//     makan(porsi){
//         this.energi+=porsi;
//         return `Halo ${this.nama}, Selamat Makan`;
//     }

//     main(jam){
//         this.energi-=jam;
//         return `Halo ${this.nama}, Selamat main`;
//     }

//     tidur(jam){
//         this.energi+=jam*2;
//         return `Halo ${this.nama}, Selamat Tidur`;
//     }
// }

// let fadli = new Mahasiswa('fadli',10);

// let angka=[];
// let angka = new Array();
// function Array() {
//   let this = Object.create(Array.prototype);
// }
let angka = [3, 2, 1];
console.log(angka.reverse());
