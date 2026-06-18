import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import TitleHeader from "../components/TitleHeader";
import { socialImgs } from "../constants";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Contact Me" />

        <div className="contact-grid mt-16">
          {/* LEFT — illustration + socials */}
          <div className="contact-left">
            <div className="contact-illustration">
              <img
                src={`${import.meta.env.BASE_URL}images/contact-illustration.png`}
                alt="contact illustration"
              />
            </div>
            <div className="contact-socials">
              {socialImgs.map((s) => (
                <a key={s.name} href={s.imglink} target="_blank" rel="noopener noreferrer" className="contact-social-icon">
                  <img src={s.imgPath} alt={s.name} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="contact-right">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              {/* Name */}
              <div className="contact-field">
                <span className="contact-field-icon">
                  {/* person icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>

              {/* Email */}
              <div className="contact-field mt-3">
                <span className="contact-field-icon">
                  {/* mail icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>

              {/* Message */}
              <div className="contact-field contact-field-textarea my-3">
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="5"
                  required
                />
              </div>

              {/* Submit */}
              <button type="submit" className="contact-submit" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;