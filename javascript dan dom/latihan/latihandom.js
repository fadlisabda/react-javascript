let hero = document.getElementById("hero");
let h2 = document.createElement("h2");
let teksH2 = document.createTextNode("Halo, Dunia!");
h2.append(teksH2);
hero.prepend(h2);
h2.classList.add("highlight");
