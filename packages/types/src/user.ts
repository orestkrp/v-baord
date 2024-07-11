import { Organization } from "./organization";

export interface User {
  username: string;

  email: string;

  password: string;

  image?: string;

  organizations?: Organization[];
}
