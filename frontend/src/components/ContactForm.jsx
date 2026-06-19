import { useState } from "react";
import Button from "./Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Form:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-[500px] mx-auto p-6 border border-[var(--color-border)] rounded-[8px] bg-white/20">
      <div className="flex flex-col gap-1 text-left">
        <label htmlFor="name" className="font-heading text-[12px] font-bold text-primary tracking-wide">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="px-3 py-2 border border-[var(--color-border)] rounded-[6px] bg-white/40 font-body text-[14px] text-primary focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1 text-left">
        <label htmlFor="email" className="font-heading text-[12px] font-bold text-primary tracking-wide">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="px-3 py-2 border border-[var(--color-border)] rounded-[6px] bg-white/40 font-body text-[14px] text-primary focus:outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1 text-left">
        <label htmlFor="message" className="font-heading text-[12px] font-bold text-primary tracking-wide">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="px-3 py-2 border border-[var(--color-border)] rounded-[6px] bg-white/40 font-body text-[14px] text-primary focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      <Button type="submit" variant="primary" className="w-full mt-2">
        Submit
      </Button>
    </form>
  );
}
