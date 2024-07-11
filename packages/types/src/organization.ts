import { User } from "./user";

export interface Organization {
  name: string;

  image: string;

  participants?: User[];
}
