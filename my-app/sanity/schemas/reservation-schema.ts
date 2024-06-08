import { Rule, ValidationContext } from '@sanity/types';
import { Reservation } from '../../types/reservation';
import { sendAcceptMail } from '@/app/api/contact';
import { getReservationById, verifySendingMail } from '../sanity-utils';




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
            initialValue: false,
            validation: (Rule: Rule) => Rule.custom(async (value: boolean, context: ValidationContext) => {
                if (value) {
                  try {
                    
                    const id = context.document?._id.split('.')[1] as string;
                    
                    await getReservationById(id).then((data: Reservation)=>{
                        if (!data.sended){
                            sendAcceptMail(data); // Pass the entire document to the sendEmail function
                            verifySendingMail(id);
                        }
                    });
                  } catch (error) {
                    return 'Failed to send email';
                  }
                }
                return true;
              })
        },{
            name: 'sended',
            title: 'sended',
            type: "boolean",
            initialValue: false,
            hidden: true 
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
          title: 'name',
          subtitle: 'date'
        }
    }
}

export default reservation;