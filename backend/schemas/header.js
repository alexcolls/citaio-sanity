export default {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
        {
            name: 'welcome',
            title: 'Welcome',
            type: 'string'
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