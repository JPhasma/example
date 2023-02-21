import data from "./teletubbies.json";

export const getAllTeletubbies = async (): Promise<any> => {
  return data;
};
