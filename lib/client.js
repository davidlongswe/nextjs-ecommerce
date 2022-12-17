import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const apiConfig = {
  projectId: "ztgne1j8",
  dataset: "production",
  apiVersion: "2022-12-17",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};

export const client = sanityClient(apiConfig);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
