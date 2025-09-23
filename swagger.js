const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Store API',
    description: 'Store API'
  },
  host: 'cse341-stnx.onrender.com',
  schemes: [ 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ["./server.js"]; 

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });