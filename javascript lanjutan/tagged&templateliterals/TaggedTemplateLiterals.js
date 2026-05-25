//TODO : Tagged Templates
const nama = "fhadly sabda dinov";
const umur = 21;

function coba(strings, ...values) {
  let result = "";
  //cara1
  // strings.forEach((str, i) => {
  //   result += `${str}${values[i] || ""}`;
  // });
  // return result;
  //cara2
  return strings.reduce((result, str, i) => `${result}${str}${values[i] || ""}`, "");
}

const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
console.log(str);

//TODO : Highlight
// const nama = "fhadly sabda dinov";
// const umur = 21;
// const email = "fhadlysabdadinov@student.uir.ac.id";

// function highlight(strings, ...values) {
//   return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ""}</span>`, "");
// }

// const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun,dan email saya adalah : ${email}.`;
// document.body.innerHTML = str;
