export const backgroundUrls = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/bd676d55869191.599660df74975.jpg",
  "https://i.pinimg.com/736x/46/47/8a/46478a024b1fe234a2dfb9689751f259.jpg",
  "https://i.pinimg.com/736x/e9/2b/42/e92b42aca9d7b9337b6530167489846e.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/8b23e547268825.587557f42762b.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/72521b47268955.5875589eb00cb.jpg",
  "https://i.etsystatic.com/11650542/r/il/76fc56/1071453944/il_fullxfull.1071453944_8uai.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/1400/7d1ef147269229.590b662d8de66.jpg",
  "https://static.lyvi.ru/img/kf/HLB17sJsLxTpK1RjSZFKq6y2wXXaf/-.jpg_q50.jpg",
  "https://i.etsystatic.com/13933291/r/il/1d549e/1125104242/il_794xN.1125104242_5vle.jpg",
];

export const getLength = (arr) => {
  return arr.length;
};

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export const getRandomImage = () => {
  return backgroundUrls[getRandomInt(getLength(backgroundUrls))];
};
