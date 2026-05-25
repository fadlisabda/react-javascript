const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// TODO: filter
// const newAngka = angka.filter((a) => a >= 3);

// console.log(newAngka);

// TODO: map
// *kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// TODO: reduce
// *jumlahkan seluruh elemen pada array
// *5 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// console.log(newAngka);

// Method Chaining
// Cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka
  .filter((a) => a > 5) // 8,9,9
  .map((a) => a * 3) // 24,27,27
  .reduce((acc, cur) => acc + cur); // 78
console.log(hasil);
