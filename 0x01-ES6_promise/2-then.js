function getResponseFromAPI(success = true) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject(new Error());
    }
  })
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => (('')))
    .finally(() => {
      console.log('Got a response from the API');
    });
}

module.exports = getResponseFromAPI;
