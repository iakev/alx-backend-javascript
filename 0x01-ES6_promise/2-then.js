export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    const ret = {
      status: 200,
      body: 'success',
    };
    return ret;
  })
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
}
