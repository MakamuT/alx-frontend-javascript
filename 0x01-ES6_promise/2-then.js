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
    .then(() => {
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      return new Error('');
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}

module.exports = getResponseFromAPI;
