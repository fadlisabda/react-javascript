function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 4000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("tes");
      }, waktu);
    } else {
      reject("kelamaan!");
    }
  });
}

const coba = cobaPromise();
coba.then((coba) => console.log(coba)).catch((coba) => console.log(coba));

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (err) {
    console.error(err);
  }
}

cobaAsync();
