//Rest Parameter
//argument pada function yang hasilnya array

// function myFunc(a, b, ...myArgs) {
//   return `a = ${a}, b = ${b}, myArgs = ${myArgs}`;
// return myArgs;
// return Array.from(arguments);
// return [...arguments];
// }
// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
// return total;
// return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// TODO : array destructuring
// const kelompok1 = ["fadli", "sabda", "dinov", "tes", "tes", "tes"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// TODO : object destructuring
// const team = {
//   pm: "fadli",
//   frontEnd1: "sabda",
//   frontEnd2: "dinov",
//   backEnd: "bill",
//   ux: "gates",
//   devOps: "mark",
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);

// TODO : filtering
// function filterBy(type, ...values) {
//   return values.filter((v) => typeof v === type);
// }

// console.log(filterBy("boolean", 1, 2, "Fadli", false, 10, true, "Sabda"));
