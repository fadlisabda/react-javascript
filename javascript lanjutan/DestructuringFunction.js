// TODO : Destructuring function return
// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }
//urutan berpengaruh
// const [tambah, kurang, kali, bagi = "tidak ada"] = kalkulasi(2, 3);
// console.log(bagi);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }
// //urutan tidak berpengaruh
// const { bagi, kali, kurang, tambah } = kalkulasi(2, 3);
// console.log(kurang);

// TODO : Destructuring function arguments

const mhs1 = {
  nama: "fhadly sabda dinov",
  umur: 21,
  email: "fhadlysabdadinov@student.uir.ac.id",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

function cetakMhs(mhs) {
  return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
}

console.log(cetakMhs(mhs1));

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));
