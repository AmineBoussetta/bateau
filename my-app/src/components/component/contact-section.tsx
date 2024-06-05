import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { compileVerifyTemplate, sendMail } from "../../../lib/mail";


export default function ContactSection() {
  async function send () {
    "use server";
    await sendMail({
      to: "data.email",
      name: "data.name",
      subject: "test mail",
      body: compileVerifyTemplate("dali", "https://bateau.vercel.app"),
    });
  };
  return (
    <section
      className="bg-white py-20 px-6 md:px-12 dark:bg-gray-900 dark:text-gray-100"
      id="contact"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
      <div className="max-w-md mx-auto">
        <form>
          <div className="mb-4">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" type="text" />
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Enter your message" rows={5} />
          </div>
          <Button
            className="w-full"
            type="submit"
            variant="default"
            formAction={send}
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}