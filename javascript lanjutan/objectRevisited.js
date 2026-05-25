//cara membuat object di javascript
//1.object literal
// PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa = {
//     nama : 'fhadly sabda dinov',
//     energi : 10,
//     makan : function (porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }
// }

// let mahasiswa2 = {
//     nama : 'anak baik',
//     energi : 20,
//     makan : function (porsi){
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }
// }

// function declaration
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, Selamat Makan!`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, Selamat Bermain!`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur!`);
  },
};

function Mahasiswa(nama, energi) {
  //Object.create(object parent); method hanya dibuat sekali atau menghubungkan object
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  return mahasiswa;
}

let fadli = Mahasiswa("fadli", 10);
let sabda = Mahasiswa("sabda", 20);

//constructor function
//keyword new
// function Mahasiswa(nama,energi){
//     this.nama=nama;
//     this.energi=energi;
//     this.makan=function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }
//     this.main=function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain`);
//     }
// }

// let fadli = new Mahasiswa('fadli',10);
console.log(38 / 4);
