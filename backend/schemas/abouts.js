
export default {
  name: 'abouts',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'langSchema',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

  ]
}