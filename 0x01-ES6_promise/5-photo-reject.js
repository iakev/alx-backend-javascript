export default function uploadPhoto(fileName) {
  const err = new Error(`${fileName} cannot be processed`);
  return Promise.reject(err);
}
