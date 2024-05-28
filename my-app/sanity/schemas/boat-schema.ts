
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
            name: 'image',
            title:'Image',
            type: 'image',
            options: {
                hotspot: true 
            },
            fields:[
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
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