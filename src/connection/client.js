
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  token: process.env.REACT_APP_SANITY_TOKEN,
  apiVersion: "2022-02-20",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (src) => {
   return builder.image(src);
};
