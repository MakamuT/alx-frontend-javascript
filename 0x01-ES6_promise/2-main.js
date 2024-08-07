import getResponseFromAPI from "./0-promise.js";
import handleResponseFromAPI from "./handle-response.js";

const promise = getResponseFromAPI(true);
handleResponseFromAPI(promise).then(result => console.log(result));

