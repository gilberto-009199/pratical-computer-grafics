// https://www.npmjs.com/package/opencv4nodejs-prebuilt-install
const cv = require('opencv4nodejs-prebuilt-install');

const dir_img = '/workspace/processamento_imagem/img';
const dir_result = '/workspace/processamento_imagem/result';

// Carrega a imagem
const img = cv.imread(`${dir_img}/2_pessoas.jpeg`);

// Filtros
// Aplica o filtro de média (blur)
const blurredImg = img.blur(
    /* kernelSize */ new cv.Size(5, 5)
);

// Aplica o filtro de mediana
const medianBlurredImg = img.medianBlur(
     /* kernelSize */ 5 // Ajuste o tamanho do kernel conforme necessário
); // Ajuste o tamanho do kernel conforme necessário

// Aplica o filtro gaussiano
const gaussianBlurredImg = img.gaussianBlur(
    /* kernelSize */ new cv.Size(5, 5), // Ajuste o tamanho do kernel conforme necessário
    /* sigmaX */ 0                      // Ajuste o desvio padrão conforme necessário
);

// Aplica o filtro bilateral
// Aplica o filtro bilateral na imagem original
const bilateralFilteredImg = img.bilateralFilter(
    /* d */ 9,            // O diâmetro da região ao redor do pixel central
    /* sigmaColor */ 75,   // O desvio padrão nos valores de cor
    /* sigmaSpace */ 75    // O desvio padrão no espaço de coordenadas
);

// Converte a imagem para escala de cinza
const grayImg = img.cvtColor(cv.COLOR_BGR2GRAY);
// Aplica o filtro de limiar adaptativo
const adaptiveThresholdedImg = grayImg.adaptiveThreshold(
    /* maxValue */ 255,                     // Valor máximo atribuído aos pixels que passam pelo limiar
    /* adaptiveMethod */ cv.ADAPTIVE_THRESH_GAUSSIAN_C, // O método usado para calcular o valor do limiar adaptativo
    /* thresholdType */ cv.THRESH_BINARY,   // O tipo de limiarização a ser aplicado
    /* blockSize */ 11,                     // Tamanho da área vizinha usada para calcular o limiar adaptativo
    /* C */ 2                               // Constante subtraída do resultado do cálculo do limiar adaptativo
);


// Salva as imagens processadas
cv.imwrite(`${dir_result}/2_pessoas_blurred.jpeg`, blurredImg);
cv.imwrite(`${dir_result}/2_pessoas_median_blurred.jpeg`, medianBlurredImg);
cv.imwrite(`${dir_result}/2_pessoas_gaussian_blurred.jpeg`, gaussianBlurredImg);
cv.imwrite(`${dir_result}/2_pessoas_bilateral_filtered.jpeg`, bilateralFilteredImg);
cv.imwrite(`${dir_result}/2_pessoas_adaptive_thresholded.jpeg`, adaptiveThresholdedImg);



    

