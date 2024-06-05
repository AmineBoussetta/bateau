import { Contact } from "../types/Contact"

export const sendContactForm = async (data:Contact) =>fetch('/api/contact',{
    method: "POST",
    body: JSON.stringify(data),
    headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
    }
})