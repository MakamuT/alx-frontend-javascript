function getResponseFromAPI(success = true) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve();
    } else {
      reject(new Error());
    }
  });
}

export default getResponseFromAPI;
