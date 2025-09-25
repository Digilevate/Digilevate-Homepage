import React, { useState } from "react";
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    project_type: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Netlify-friendly submit handler (AJAX)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;

      // Ensure "form-name" is always present & matches the <form name="...">
      const payload = {
        "form-name": form.getAttribute("name") || "contact",
        ...Object.fromEntries(new FormData(form) as any),
      };

      const resp = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString(),
      });

      // Helpful when things go weird: inspect the response text
      const text = await resp.text();
      if (!resp.ok) throw new Error(`Netlify returned ${resp.status}: ${text}`);

      setIsSubmitted(true);
      setFormData({
        name: "", email: "", company: "", phone: "",
        project_type: "", budget: "", timeline: "", message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 px-4 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect rounded-2xl p-12 hover-glow">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Thank You for Your Inquiry!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We've received your message and will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#2d9bf0] hover:bg-[#4db8ff] text-white px-6 py-3 rounded-lg font-semibold"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-4 sm:py-32 relative">
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#2d9bf0] rounded-full opacity-5 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="gradient-text">Elevate</span> Your Brand?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your project and create something amazing together.
            Get your free consultation and detailed proposal today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <ContactInfo />

          <div className="lg:col-span-2">
            <form
              method="POST"
              name="contact"
              // Optional: if JS is off, Netlify will do a full-page POST-redirect here
              action="/success/"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="glass-effect rounded-2xl p-8 hover-glow transition-all duration-500"
            >
              {/* Required hidden inputs for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              {/* Honeypot field (hidden) */}
              <p className="hidden" aria-hidden="true">
                <label>
                  Don’t fill this out:
                  <input name="bot-field" />
                </label>
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <InputField
                  id="name"
                  name="name"
                  label="Full Name *"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                />
                <InputField
                  id="email"
                  name="email"
                  label="Email Address *"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <InputField
                  id="company"
                  name="company"
                  label="Company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your company name"
                />
                <InputField
                  id="phone"
                  name="phone"
                  label="Phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <SelectField
                  id="project_type"
                  name="project_type"
                  label="Project Type"
                  value={formData.project_type}
                  onChange={handleInputChange}
                  options={[
                    "New Website",
                    "Website Redesign",
                    "E-commerce Store",
                    "Website Maintenance",
                    "Other",
                  ]}
                />
                <SelectField
                  id="budget"
                  name="budget"
                  label="Budget Range"
                  value={formData.budget}
                  onChange={handleInputChange}
                  options={[
                    "Under $5,000",
                    "$5,000 - $10,000",
                    "$10,000 - $25,000",
                    "$25,000+",
                    "Not sure yet",
                  ]}
                />
              </div>

              <div className="mb-6">
                <InputField
                  id="timeline"
                  name="timeline"
                  label="Desired Timeline"
                  type="text"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  placeholder="e.g., 2-3 months, ASAP, flexible"
                />
              </div>

              <div className="mb-8">
                <TextareaField
                  id="message"
                  name="message"
                  label="Project Details *"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2d9bf0] hover:bg-[#4db8ff] text-white py-4 rounded-lg text-lg font-semibold hover-glow transition-all duration-300 group flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Your Inquiry
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* No-JS notice (optional) */}
              <noscript>
                <p className="mt-4 text-gray-400">
                  JavaScript is disabled; submitting will redirect to the success page.
                </p>
              </noscript>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = () => (
  <div className="space-y-8">
    <div className="glass-effect rounded-2xl p-8 hover-glow transition-all duration-500">
      <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
      <div className="space-y-6">
        <InfoItem
          icon={<Mail className="w-6 h-6 text-white" />}
          title="Email Us"
          lines={[
            "info@digilevate.com",
          ]}
        />
        <InfoItem
          icon={<Phone className="w-6 h-6 text-white" />}
          title="Call Us"
          lines={["Available for consultation calls"]}
        />
        <InfoItem
          icon={<MapPin className="w-6 h-6 text-white" />}
          title="Location"
          lines={["Remote-first team, serving clients worldwide"]}
        />
      </div>
    </div>
    <div className="glass-effect rounded-2xl p-8">
      <h4 className="text-white font-semibold mb-4">Why Choose Digilevate?</h4>
      <ul className="space-y-3 text-sm">
        <WhyItem text="Free consultation & proposal" />
        <WhyItem text="Fast 24-hour response time" />
        <WhyItem text="Transparent pricing" />
        <WhyItem text="Ongoing support included" />
      </ul>
    </div>
  </div>
);

const InfoItem: React.FC<{ icon: React.ReactNode; title: string; lines: string[] }> = ({
  icon,
  title,
  lines,
}) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-[#2d9bf0] rounded-full flex items-center justify-center flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="text-white font-semibold mb-1">{title}</h4>
      <div className="space-y-1 text-gray-400">
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  </div>
);

const WhyItem: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-center space-x-3">
    <div className="w-2 h-2 bg-[#2d9bf0] rounded-full" />
    <span className="text-gray-400">{text}</span>
  </li>
);

// Form Field Components (unchanged styles)
const InputField: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & { label: string }
> = ({ label, id, ...props }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-white text-sm font-medium">
      {label}
    </label>
    <input
      id={id}
      {...props}
      className="w-full bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#2d9bf0] focus:ring-[#2d9bf0] rounded-lg p-3"
    />
  </div>
);

const TextareaField: React.FC<
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }
> = ({ label, id, ...props }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-white text-sm font-medium">
      {label}
    </label>
    <textarea
      id={id}
      rows={6}
      {...props}
      className="w-full bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-[#2d9bf0] focus:ring-[#2d9bf0] rounded-lg p-3"
    />
  </div>
);

const SelectField: React.FC<
  React.SelectHTMLAttributes<HTMLSelectElement> & { label: string; options: string[] }
> = ({ label, id, options, ...props }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-white text-sm font-medium">
      {label}
    </label>
    <select
      id={id}
      {...props}
      className="w-full bg-white/10 border-gray-600 text-white focus:border-[#2d9bf0] focus:ring-[#2d9bf0] rounded-lg p-3 appearance-none bg-no-repeat bg-right pr-8"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
      }}
    >
      <option value="" disabled>
        Select an option
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt.toLowerCase().replace(/ /g, "_")} className="bg-[#1d4a5f]">
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default ContactSection;
