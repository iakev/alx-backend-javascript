import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  return promise1
    .then((res) => res.body)
    .then((body) => promise2
      .then((user) => {
        console.log(`${body} ${user.firstName} ${user.lastName}`);
      }))
    .catch(() => {
      console.log('Signup system offline');
    });
}
