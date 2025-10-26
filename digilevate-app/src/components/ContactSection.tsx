import React, { useState } from "react";
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from 'react-i18next';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
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
      alert(t('contact_section.error_message'));
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
              {t('contact_section.thank_you_title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('contact_section.thank_you_message')}
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-[#2d9bf0] hover:bg-[#4db8ff] text-white px-6 py-3 rounded-lg font-semibold"
            >
              {t('contact_section.send_another_message')}
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
            {t('contact_section.title_part1')} <span className="gradient-text">{t('contact_section.title_part2')}</span>{t('contact_section.title_part3')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact_section.description')}
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
                  {t('contact_section.honeypot_label')}
                  <input name="bot-field" />
                </label>
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <InputField
                  id="name"
                  name="name"
                  label={t('contact_section.full_name_label')}
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('contact_section.full_name_placeholder')}
                  required
                />
                <InputField
                  id="email"
                  name="email"
                  label={t('contact_section.email_label')}
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact_section.email_placeholder')}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <InputField
                  id="company"
                  name="company"
                  label={t('contact_section.company_label')}
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder={t('contact_section.company_placeholder')}
                />
                <InputField
                  id="phone"
                  name="phone"
                  label={t('contact_section.phone_label')}
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={t('contact_section.phone_placeholder')}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <SelectField
                  id="project_type"
                  name="project_type"
                  label={t('contact_section.project_type_label')}
                  value={formData.project_type}
                  onChange={handleInputChange}
                  options={[
                    t('contact_section.project_type_new_website'),
                    t('contact_section.project_type_website_redesign'),
                    t('contact_section.project_type_ecommerce_store'),
                    t('contact_section.project_type_website_maintenance'),
                    t('contact_section.project_type_other'),
                  ]}
                  t={t}
                />
                <SelectField
                  id="budget"
                  name="budget"
                  label={t('contact_section.budget_range_label')}
                  value={formData.budget}
                  onChange={handleInputChange}
                  options={[
                  t('contact_section.budget_range_under_2000'),
                  t('contact_section.budget_range_2000_4000'),
                  t('contact_section.budget_range_4000_6000'),
                  t('contact_section.budget_range_6000_plus'),
                  t('contact_section.budget_range_not_sure'),
                  ]}
                  t={t}
                />
              </div>

              <div className="mb-6">
                <InputField
                  id="timeline"
                  name="timeline"
                  label={t('contact_section.desired_timeline_label')}
                  type="text"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  placeholder={t('contact_section.desired_timeline_placeholder')}
                />
              </div>

              <div className="mb-8">
                <TextareaField
                  id="message"
                  name="message"
                  label={t('contact_section.project_details_label')}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact_section.project_details_placeholder')}
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
                    {t('contact_section.sending')}
                  </>
                ) : (
                  <>
                    {t('contact_section.send_inquiry')}
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {/* No-JS notice (optional) */}
              <noscript>
                <p className="mt-4 text-gray-400">
                  {t('contact_section.js_disabled_message')}
                </p>
              </noscript>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-8">
      <div className="glass-effect rounded-2xl p-8 hover-glow transition-all duration-500">
        <h3 className="text-2xl font-bold text-white mb-6">{t('contact_section.get_in_touch')}</h3>
        <div className="space-y-6">
          <InfoItem
            icon={<Mail className="w-6 h-6 text-white" />}
            title={t('contact_section.email_us')}
            lines={[
              "info@digilevate.com",
            ]}
          />
          <InfoItem
            icon={<Phone className="w-6 h-6 text-white" />}
            title={t('contact_section.call_us')}
            lines={[t('contact_section.available_for_consultation')]}
          />
          <InfoItem
            icon={<MapPin className="w-6 h-6 text-white" />}
            title={t('contact_section.location')}
            lines={[t('contact_section.remote_first_team')]}
          />
        </div>
      </div>
      <div className="glass-effect rounded-2xl p-8">
        <h4 className="text-white font-semibold mb-4">{t('contact_section.why_choose_digilevate')}</h4>
        <ul className="space-y-3 text-sm">
          <WhyItem text={t('contact_section.free_consultation')} />
          <WhyItem text={t('contact_section.fast_response_time')} />
          <WhyItem text={t('contact_section.transparent_pricing')} />
        </ul>
      </div>
    </div>
  );
};

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
  React.SelectHTMLAttributes<HTMLSelectElement> & { label: string; options: string[]; t: any }
> = ({ label, id, options, t, ...props }) => (
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
        {t('contact_section.select_an_option')}
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
