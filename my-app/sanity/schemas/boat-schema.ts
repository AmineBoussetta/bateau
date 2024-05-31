
const boat ={
    name: 'boat',
    title: 'Boats',
    type: 'document',
    fields: [
        {
            name: 'name', 
            Tite: 'Name',
            type: 'string'
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string'
        },
        {
            name: 'diameter',
            title: 'Diameter',
            type: 'string'
        },
        {
            name:'rooms',
            title: 'Rooms',
            type: 'number'
        },
        {
            name: 'capacity',
            title: 'Capacity',
            type: 'number'
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                layout: 'grid',
                hotspot: true
            }
        },
        {
            name: 'description',
            Title: 'Description',
            type: 'array',
            of: [{type: "block"}]
        }
    ]
}

export default boat;