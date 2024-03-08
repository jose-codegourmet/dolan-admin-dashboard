import { ImageModel } from "@/types/models/image";
import { UserModel } from "@/types/models/user";
import { faker } from "@faker-js/faker";

const gender = faker.person.gender();
const first_name = faker.person.firstName(gender as any);
const last_name = faker.person.lastName();

const fake_avatar: ImageModel = {
  src: faker.image.avatar(),
  uploaded_date: faker.date.recent({ days: 5 }).toISOString(),
  alt: `${first_name} ${last_name} avatar`,
};

export const ACTIVE_USER_SESSION: UserModel = {
  id: faker.string.uuid(),
  gender,
  first_name,
  last_name,
  email: faker.internet.email({ firstName: first_name }),
  organization: faker.company.name(),
  role: "Owner",
  status: "active",
  avatar: fake_avatar,
  created_date: faker.date.past(),
  updated_date: faker.date.recent({ days: 5 }),
  last_login_date: faker.date.recent({ days: 1 }),
};
