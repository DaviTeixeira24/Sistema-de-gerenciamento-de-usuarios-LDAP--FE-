import { Permissions } from "./permissions";

export type User = {
  userId: string;
  fullName: string;
  email: string;
  permissionLevel: Permissions;
  location: string;
  joined: string;
};
