// TODO : Destructuring Variable / Assignment

// TODO : Destructuring Array
const perkenalan = ["Halo", "nama", "saya", "Fhadly Sabda Dinov"];
const [salam, satu, dua, nama] = perkenalan;
// const [salam, , , nama] = perkenalan;
console.log(dua);

//TODO : swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

//TODO : return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

//TODO : Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

//TODO : Destructuring Object
// const mhs = {
//   nama: "fhadly sabda dinov",
//   umur: 21,
// };

// const { nama, umur } = mhs;
// console.log(nama);
// console.log(umur);

//TODO : Assignment tanpa deklarasi object
// ({ nama, umur } = { nama: "fhadly sabda dinov", umur: 21 });
// console.log(nama);
// console.log(umur);

//TODO : Assign ke variabel baru
// const mhs = {
//   nama: "fhadly sabda dinov",
//   umur: 21,
// };

// const { nama: n, umur: u } = mhs;
// console.log(n);
// console.log(u);

//TODO : Memberikan Default Value
// const mhs = {
//   nama: "fhadly sabda dinov",
//   umur: 21,
//   email: "fhadlysabdadinov@student.uir.ac.id",
// };

// const { nama, umur, email = "email@default.com" } = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);

//TODO : Memberikan nilai default + assign ke variabel baru
// const mhs = {
//   nama: "fhadly sabda dinov",
//   umur: 21,
//   email: "fhadlysabdadinov@student.uir.ac.id",
// };

// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(n);
// console.log(u);
// console.log(e);

//TODO : Rest Parameter
// const mhs = {
//   nama: "fhadly sabda dinov",
//   umur: 21,
//   email: "fhadlysabdadinov@student.uir.ac.id",
// };

// const { nama, ...value } = mhs;
// console.log(value);

//TODO : mengambil field pada object,setelah dikirim sebagai parameter untuk function
// const mhs = {
//   id: 123,
//   nama: "fhadly sabda dinov",
//   umur: 21,
//   email: "fhadlysabdadinov@student.uir.ac.id",
// };

// function getIdMahasiswa({ id, nama }) {
//   return nama;
// }

// console.log(getIdMahasiswa(mhs));
