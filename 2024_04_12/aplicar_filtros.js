// https://www.npmjs.com/package/opencv4nodejs-prebuilt-install
const cv = require('opencv4nodejs-prebuilt-install');

const dir_img = '/workspace/processamento_imagem/img';

// Carrega a imagem
const img = cv.imread(`${dir_img}/2_pessoas.jpeg`);

// Realiza alguma operação de processamento de imagem, por exemplo, convertendo para escala de cinza
//const grayImg = img.cvtColor(cv.COLOR_BGR2GRAY);


// Redução de Ruido filtro de media, mediana e gauss
// Aplica o filtro de média (blur)
const blurredImg = img.blur(new cv.Size(5, 5)); // Ajuste o tamanho do kernel conforme necessário

// Aplica o filtro de mediana
const medianBlurredImg = img.medianBlur(5); // Ajuste o tamanho do kernel conforme necessário

// Aplica o filtro gaussiano
const gaussianBlurredImg = img.gaussianBlur(new cv.Size(5, 5), 0); // Ajuste o tamanho do kernel e o desvio padrão conforme necessário

// Salva as imagens processadas
cv.imwrite(`${dir_img}/2_pessoas_blurred.jpeg`, blurredImg);
cv.imwrite(`${dir_img}/2_pessoas_median_blurred.jpeg`, medianBlurredImg);
cv.imwrite(`${dir_img}/2_pessoas_gaussian_blurred.jpeg`, gaussianBlurredImg);




    

