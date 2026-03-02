import { sanityClient } from "./client";

export type AboutContent = {
  title: string;
  paragraphs: string[];
};

const aboutQuery = `*[_type == "about"][0]{ title, paragraphs }`;

export async function getAboutContent(): Promise<AboutContent | null> {
  return await sanityClient.fetch(aboutQuery);
}
