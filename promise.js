const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  theaderIXX = await promiseTheaterIXX();
  theaderVGC = await promiseTheaterVGC();
  let count = 0;
  for (let i = 0; i < theaderIXX.length; i++) {
    if (theaderIXX[i].hasil === emosi)
      count++;
  }
  for (let i = 0; i < theaderVGC.length; i++) {
    if (theaderVGC[i].hasil === emosi)
      count++;
  }
  return count;
};

module.exports = {
  promiseOutput,
};
