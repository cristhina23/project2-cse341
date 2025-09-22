const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Store API',
    description: 'Store API'
  },
  host: 'localhost:5000',
  schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ["./server.js"]; 

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });