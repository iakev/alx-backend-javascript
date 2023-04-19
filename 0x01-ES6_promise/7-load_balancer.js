export default function loadBalancer(chinaDownload, USDownload) {
  const promises = [chinaDownload, USDownload];
  const returnPromise = Promise.any(promises);
  const result = returnPromise.then((res) => {
    return res;
  });
  return result;
}
