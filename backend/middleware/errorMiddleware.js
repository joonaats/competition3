const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  response.status(500);
  response.json({
    message: error.message,
  });
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

module.exports = {
  errorHandler,
  unknownEndpoint,
  requestLogger
};