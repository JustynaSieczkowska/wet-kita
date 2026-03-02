import { defineType, defineField } from "sanity";

export default defineType({
  name: "about",
  title: "O nas",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Tytuł",
      type: "string",
      validation: (Rule) => Rule.required().min(2),
    }),
    defineField({
      name: "paragraphs",
      title: "Akapity",
      type: "array",
      of: [{ type: "text" }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
