export default function handleResponseFromAPI(promise) {
  const result = promise.then(() => {
    const ret = {
      status: 200,
      body: 'success',
    };
    return ret;
  })
    .catch(() => {
      const err = Error();
      return err;
    })
    .finally(() => console.log('Got a response from the API'));

  return result;
}
