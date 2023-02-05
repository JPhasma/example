import data from "./teletubbies.json";
import pick from "lodash.pick";

export const getAllSummaries = async (): Promise<any[]> => {
  return data.map((item) =>
    pick(item, ["name", "slug", "image_url", "description"])
  );
};
