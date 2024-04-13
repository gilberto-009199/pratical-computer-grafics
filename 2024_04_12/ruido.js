// https://www.npmjs.com/package/opencv4nodejs-prebuilt-install
const cv = require('opencv4nodejs-prebuilt-install');

const dir_img = '/workspace/processamento_imagem/img';
const dir_result = '/workspace/processamento_imagem/result';

// Carrega a imagem
const img = cv.imread(`${dir_img}/2_pessoas.jpeg`);

// Adiciona ruído aleatório à imagem
for (let i = 0; i < img.rows; i++) {
    for (let j = 0; j < img.cols; j++) {
        img.set(i, j, [Math.random() * 255, Math.random() * 255, Math.random() * 255]);
    }
}

// Salva as imagens processadas
cv.imwrite(`${dir_result}/2_pessoas_ruido.jpeg`, img);