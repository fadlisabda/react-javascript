// Spread Operator
// memecah iterables menjadi single element
// const mhs = ["fadli", "sabda", "dinov"];
// console.log(...mhs[0]);

//TODO : menggabungkan 2 array
// const mhs = ["fadli", "sabda", "dinov"];
// const dosen = ["dinov", "sabda", "fadli"];
// const orang = [...mhs, "tes", ...dosen];
// console.log(orang);

//TODO : meng-copy array
// const mhs = ["fadli", "sabda", "dinov"];
// const mhs1 = [...mhs];
// mhs1[0] = "tes";
// console.log(mhs);

// const liMhs = document.querySelectorAll("li");
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

// const nama = document.querySelector(".nama");
// const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
// nama.innerHTML = huruf;
