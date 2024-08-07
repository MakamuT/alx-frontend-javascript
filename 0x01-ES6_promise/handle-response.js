function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error(''))
    .finally(() => {
      console.log('Got a response from the API');
    });
}

const promise = Promise.resolve();
handleResponseFromAPI(promise).then(result => console.log(result));

