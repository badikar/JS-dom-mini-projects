const URL = 'https://randomuser.me/api/';

const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  // destructure
  const person = data.results[0];
  const { email, phone } = person;
  const {
    dob: { age },
  } = person;
  const { large: image } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const {
    street: { number, name },
  } = person.location;

  return {
    image,
    phone,
    email,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

export default getUser;
