import {faker} from "@faker-js/faker";


export type UserType = {
  name: string,
  surname: string
}

export let users = Array.from({
  length: 100
}, () => {
  return {name: faker.name.firstName(), surname: faker.name.lastName()}
});

