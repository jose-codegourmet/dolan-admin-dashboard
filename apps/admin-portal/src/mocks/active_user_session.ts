import { ImageModel } from "@repo/shared-types";
import { UserModel } from "@repo/shared-types";
import { faker } from "@faker-js/faker";

const gender = faker.person.gender();
const first_name = faker.person.firstName(gender as any);
const last_name = faker.person.lastName();
const fake_age = faker.number.int({
  min: 18,
  max: 50,
});

const fake_avatar: ImageModel = {
  src: faker.image.avatar(),
  uploaded_date: faker.date.recent({ days: 5 }).toISOString(),
  alt: `${first_name} ${last_name} avatar`,
};

export const ACTIVE_USER_SESSION: UserModel = {
  id: faker.string.uuid(),
  first_name,
  last_name,
  gender,
  age: fake_age,

  email: faker.internet.email({ firstName: first_name }),
  organization: faker.company.name(),
  role: "Owner",
  status: "active",

  avatar: fake_avatar,

  employed_date: faker.date.past(),
  birth_date: faker.date.past({ years: fake_age }),
  created_date: faker.date.past(),
  updated_date: faker.date.recent({ days: 5 }),
  last_login_date: faker.date.recent({ days: 1 }),
};
