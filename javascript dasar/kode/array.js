//array
var binatang = ["kucing", "kelinci", "monyet", "panda", "koala", "sapi"];
var myFunc = function () {
  alert("hello world");
};
var myArr = [myFunc, [1, 2, 3]];
// console.log(binatang[4]);
// console.log(binatang[4]);
// console.log(typeof(binatang));
// console.log(binatang.length);
// console.log(myArr[1][1]);

//manipulasi array
//1.menambah isi array
var arr = ["a", 1, true];
arr[0] = "a";
arr[1] = 1;
arr[2] = true;
// console.log(arr[1]);

//2.menghapus isi array
var arr2 = ["fadli", "sabda", "dinov"];
arr2[1] = undefined;
// console.log(arr2);

//3.menampilkan isi array
// var arr3 = ["fadli", "sabda", "dinov"];
// for (var i = 0; i < arr3.length; i++) {
//   console.log("Mahasiswa ke-" + (i + 1) + " : " + arr3[i]);
// }

//4.method pada array
//-join
var arr4 = ["fadli", "sabda", "dinov"];

//-push & pop
// arr4.push("183510802", "7G"); menambah elemen array paling akhir
// arr4.pop(); menghapus elemen array paling akhir

//5.unshift & shift
//arr4.unshift("tes"); menambah elemen array paling awal
//arr4.shift(); menghapus elemen array paling awal

//*splice menambahkan array dan menghapus array
//*splice(indexAwal,mauDihapusBerapa,elemenBaru1,elemenBaru2,...)
//*slice menampilkan array
// arr4.splice(1, 0, 183510802, "7G");

//slice(awal,akhir);
var arr5 = arr4.slice(0, 2);
// console.log(arr5.join(" - "));

//7.foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// angka.forEach(function (e, i) {
//   console.log(e, i);
// });

//8.map
// var angka = [1, 2, 5, 3, 6, 8, 4];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

//9.sort
// var angka = [1, 10, 2, 20, 5, 3, 6, 8, 4];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

//10.filter & find
// var angka = [1, 10, 2, 20, 5, 3, 6, 8, 4];
// var angka2 = angka.filter(function (e) {
//   return e > 5;
// });
// console.log(angka2.join(" - "));

var angka = [1, 10, 2, 20, 5, 3, 6, 8, 4];
var angka2 = angka.find(function (e) {
  return e > 5;
});
console.log(angka2);
