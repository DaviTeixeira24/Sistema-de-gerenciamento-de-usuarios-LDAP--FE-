import { User } from "./types/user";

export const headers = {
  userId: "ID",
  fullName: "Nome Completo",
  email: "Email",
  permissionLevel: "Permissões",
  location: "Localização",
  joined: "Data de Entrada",
};

export const users: User[] = [
  {
    userId: "1",
    fullName: "David Silva",
    email: "davi@exemplo.com",
    permissionLevel: "admin",
    location: " São Paulo, Brasil",
    joined: " 01/01/2023",
  },
  {
    userId: "2",
    fullName: "Ana Costa",
    email: " ",
    permissionLevel: "admin",
    location: "",
    joined: "",
  },
];
