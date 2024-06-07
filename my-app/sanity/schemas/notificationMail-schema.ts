import { Rule } from '@sanity/types';
const mail ={
    name:'mails',
    title: 'Notification mails',
    type: 'document',
    fields:[
        {
            name:'user',
            title:'UserName',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule: Rule) => Rule.email(),
        },
    ]
}

export default mail;