export default {
    name: "tarotMessage",
    title: "Tarot Message",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: Rule => Rule.required()
      },
      {
        name: "message",
        title: "Message",
        type: "text",
        validation: Rule => Rule.required()
      }
    ]
  }
  