//TODO : for..of array
const mhs = ["fadli", "sabda", "dinov"];
// for (const m of mhs) {
//   console.log(m);
// }

//TODO : for..of string
// const nama = "fadli";
// for (n of nama) {
//   console.log(n);
// }

//TODO : for..of array index
for (const [i, m] of mhs.entries()) {
  console.log(`${m} mahasiswa ke-${i + 1}`);
}

//TODO : for..of nodelist
// const liNama = document.querySelectorAll(".nama");
// liNama.forEach((l) => console.log(l.innerHTML));
// for (const l of liNama) {
//   console.log(l.innerHTML);
// }

//TODO : for..of arguments
// function jumlahkanAngka() {
//   let jumlah = 0;
//   for (const a of arguments) {
//     jumlah += a;
//   }
//   return arguments;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

//TODO : for..in object
// const mhs = {
//   nama: "fhadly sabda dinov",
//   npm: 183510802,
//   email: "fhadlysabdadinov@student.uir.ac.id",
// };

// for (const m in mhs) {
//   console.log(mhs[m]);
// }
