interface Person {
  name: string;
  age: number;
}

type PersonKey = keyof Person;
let key: PersonKey = "name";
key = "age";
// key = "Age"; => doesn't work

type User = {
  _id: number;
  name: string;
  email: string;
  createdAdt: Date;
};

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAdt'>; // => name, email
type UserKyesNoMeta2 = Pick<User, 'name' | 'email'> // => name, email

let use: UserKeysNoMeta1 = 'name';
// use = 'data'; => doesn't work
