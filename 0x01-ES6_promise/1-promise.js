export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const ret = {
        status: 200,
        body: 'Success',
      };
      resolve(ret);
    } else {
      const err = new Error('The fake API is not working currently');
      reject(err);
    }
  });
}
