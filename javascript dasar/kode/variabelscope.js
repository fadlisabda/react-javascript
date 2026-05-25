//untuk function scope ada var yang variabel diambil adalah yang diluar jika console log diluar function,jika ingin tanpa var yang diambil tetap di dalam function scope
//"use strict";
// global scope / window scope
//run with html
var a = 1;
function tes() {
  //name conflict
  // a = 2;
  var a = 2;
  console.log(window.a);
}

tes();
