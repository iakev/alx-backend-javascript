import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const arr = [];
  return signUpUser(firstName, lastName).then((user) => user)
    .then((user) => {
      const userObject = {
        status: 'fulfilled',
        value: user,
      };
      arr.push(userObject);
      return arr;
    })
    .then((arr) => uploadPhoto(fileName)
      .catch((err) => {
        const photoObject = {
          status: 'rejected',
          value: `${err.name}: ${err.message}`,
        };
        arr.push(photoObject);
        return arr;
      }))
    .catch(() => {
      const err = Error();
      return err;
    });
}
