export type TeletubbySummary = {
  name: string;
  image_url: string;
  description: string;
};

export const getAllSummaries = async (): Promise<TeletubbySummary[]> => {
  return [
    {
      name: "Tinky Winky",
      image_url: "/images/profile/tinky-winky.webp",
      description:
        "Tinky Winky, (played by Dave Thompson (from 1997), and Simon Shelton (1997-2001, 2007, 2009), and voiced by Mark Heenehan (from 1997-2001), and in the original series and Jeremiah Krage (2015-present) in the new series) is the first Teletubby. He is the largest and oldest of the Teletubbies, being 10 feet tall.",
    },
    {
      name: "Dipsy",
      image_url: "/images/profile/dipsy.webp",
      description:
        "Dipsy is the second Teletubby with an antenna that refers to a dipstick because of his name. Dipsy's skin tone is slightly darker than the other Teletubbies, implying that he is black. He is jolly and likes talking to himself. He wears a white hat with black cow spots.",
    },
  ];
};
