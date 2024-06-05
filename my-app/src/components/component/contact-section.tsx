import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createMessage } from "../../../sanity/sanity-utils";
import { Contact } from "../../../types/Contact";

export default function ContactSection() {
  async function upForm(formData: FormData) {
    'use server';
    const data: Contact = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };
    createMessage(data);
  }

  return (
    <section
      className="bg-white py-20 px-6 md:px-12 dark:bg-gray-900 dark:text-gray-100"
      id="contact"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
      <div className="max-w-md mx-auto">
        <form action={upForm}>
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Enter your name"
              type="text"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Enter your message"
              rows={5}
            />
          </div>
          <Button className="w-full" type="submit" variant="default">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
