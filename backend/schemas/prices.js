export default {
    name: 'prices',
    title: 'Prices',
    type: 'document',
    fields: [
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'string'
        },
        {
            name: 'feature',
            title: 'Feature',
            type: 'array',
            of: [{ type: 'string' }]
        },
    ]
}