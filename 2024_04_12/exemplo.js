// https://www.npmjs.com/package/opencv4nodejs-prebuilt-install
const cv = require('opencv4nodejs-prebuilt-install');

// Função para carregar e processar uma imagem usando OpenCV
function processImage() {
    // Carrega a imagem
    const img = cv.imread('/workspace/processamento_imagem/img/2_pessoas.jpeg');

    // Realiza alguma operação de processamento de imagem, por exemplo, convertendo para escala de cinza
    const grayImg = img.cvtColor(cv.COLOR_BGR2GRAY);

    // Salva a imagem processada
    const outputPath = '/workspace/processamento_imagem/img/2_pessoas_gray.jpeg';
    cv.imwrite(outputPath, grayImg);
    console.log('Imagem processada salva em: ' + outputPath);

    
}

// Chama a função para processar a imagem quando a aplicação NW.js for iniciada
processImage();