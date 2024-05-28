import { Rule } from '@sanity/types';


const reservation = {
    name: 'reservation',
    title: 'Reservations',
    type: 'document',
    fields:[
        {
            name:'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'lastName',
            title: 'Last name',
            type: 'string'
        },
        {
            name: 'phoneNumber',
            title:'Phone number',
            type:'number'
        },
        {
            name: 'reservationDate',
            title: 'Reservation Date',
            type: 'date'
        },
        {
            name: 'passangersNumber',
            title: 'Passangers number',
            type: 'number'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule: Rule) => Rule.email()
        }
    ]
}

export default reservation;