import { Rule } from '@sanity/types';




const reservation = {
    name: 'reservation',
    title: 'Reservations',
    type: 'document',
    fields:[
        {
            name:"boatName",
            title:"Boat",
            type: 'string',
            readOnly: true
        },
        {
            name:'name',
            title: 'Name',
            type: 'string',
            readOnly: true
        },
        {
            name: 'phone',
            title:'Phone number',
            type:'number',
            readOnly: true
        },
        {
            name: 'date',
            title: 'Reservation Date',
            type: 'date',
            readOnly: true
        },
        {
            name: "time",
            title: "Start Time",
            type: "string",
            readOnly: true
        },
        {
            name: 'guests',
            title: 'Guests',
            type: 'number',
            readOnly: true
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule: Rule) => Rule.email(),
            readOnly: true
        },
        {
            name: 'isValidEmail',
            title: "Email Verification",
            type: "boolean",
            readOnly: true,
            initialValue: false
        },
        {
            name: 'message',
            Title: 'Message',
            type: 'text',
            readOnly: true
        },
        {
            name: 'isAccepted',
            title: 'Accept The Reservation',
            type: "boolean", 
            initialValue: false
        }
    ],
    permissions: [
        // Permissions for roles
        {
          role: 'editor',
          // Editor role can create, read, update, and delete reservation documents
          permissions: ['create', 'read', 'update', 'delete']
        },
        // Define more roles and permissions as needed
      ],
      preview: {
        select: {
          name: 'name',
          date: 'date'
        },
        prepare(selection:{name: string; date :string;}) {
          const {name, date} = selection
          return {
            title: name,
            subtitle: date,
          }
        }
    }
}

export default reservation;