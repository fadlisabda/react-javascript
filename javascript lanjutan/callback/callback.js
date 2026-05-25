//Asynschronous Callback
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      }
    } else if (xhr.status === 404) {
      error();
    }
  };

  xhr.open("get", url);
  xhr.send();
}

console.log("mulai");
getDataMahasiswa(
  "materi/callback/mahasiswa.json",
  (results) => {
    const mhs = JSON.parse(results); //*ubah jadi object
    mhs.forEach((m) => console.log(m.nama));
  },
  () => {}
);
console.log("selesai");

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };

// xhr.open("get", "http://www.omdbapi.com/?apikey=fd8ee878&s=avengers");
// xhr.send();
