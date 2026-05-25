const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");

pBaru.appendChild(teksPBaru);
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);
//========================
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Item Baru");
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);
//========================
const link = document.querySelector("section#a a");

sectionA.removeChild(link);
//========================
const sectionB = document.querySelector("section#b");
const p4 = sectionB.querySelector("p");
const judulBaru = document.createElement("h2");
const teksJudulBaru = document.createTextNode("Judul Baru");
judulBaru.appendChild(teksJudulBaru);
sectionB.replaceChild(judulBaru, p4);
