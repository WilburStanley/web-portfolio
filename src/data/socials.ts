export interface Social {
  platform: "linkedin" | "facebook" | "github";
  handle: string;
  url: string;
}

export const socials: Social[] = [
  {
    platform: "linkedin",
    handle: "wilbur-stanley-jimenez-660083383",
    url: "https://www.linkedin.com/in/wilbur-stanley-jimenez-660083383/",
  },
  {
    platform: "github",
    handle: "WilburStanley",
    url: "https://github.com/WilburStanley",
  },
  {
    platform: "facebook",
    handle: "wilbur.stanley",
    url: "https://www.facebook.com/wilbur.stanley/",
  },
];