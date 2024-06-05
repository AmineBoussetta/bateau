"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SendMessage } from "@/actions/actions";
import { toast } from "react-toastify";

export default function ContactSection() {
  return (
    <section
      className="bg-white py-20 px-6 md:px-12 dark:bg-gray-900 dark:text-gray-100"
      id="contact"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
      <div className="max-w-md mx-auto">
        <form
          action={async (formData: FormData) => {
            const result = await SendMessage(formData);
            if (result?.error) {
              toast.error(result.error);
            } else {
              toast.success("Message sent successfully!");
            }
          }}
        >
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
