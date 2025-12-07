import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Phone, Mail, MapPin, Building } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [selectedReason, setSelectedReason] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );
  const formRef = useRef();

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wuousrv",
        "template_od40jbi",
        formRef.current,
        "XQ71SIfmwEDs42rt5"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
          setSelectedReason("");
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  const lightMap =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.113624790987!2d75.58939857496461!3d22.56972143324074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962d83028ed7f23%3A0x4f8bafc1d84b6d44!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1697310498001!5m2!1sen!2sin";
  const darkMap =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.113624790987!2d75.58939857496461!3d22.56972143324074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962d83028ed7f23%3A0x4f8bafc1d84b6d44!2sIndore%2C%20Madhya%20Pradesh!5e1!3m2!1sen!2sin!4v1697310498001!5m2!1sen!2sin";

  return (
    <>
      <section className="bg-white dark:bg-darkbg py-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-5xl font-bold text-[#ff7722] mb-4">
                Get In Touch
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md text-lg">
                Let's talk about your next big move. Contact us today!
              </p>

              <div className="space-y-6 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-4">
                  <Phone className="text-[#ff7722]" size={20} />
                  <span className="text-lg font-medium">+91 - 7879318073 , +91 - 9203533342</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-[#ff7722]" size={20} />
                  <span className="text-lg font-medium">
                    connect@codlinq.com
                  </span>
                </div>
                <div className="flex items-start gap-4">
                                  <Building className="text-[#ff7722] mt-1" size={20} />
                                  <div>
                                    <p className="text-sm text-gray-500 font-semibold">
                                      Headquarters
                                    </p>
                                    <p className="text-lg font-medium leading-relaxed">
                                      Indore, Madhya Pradesh 452001
                                    </p>
                                  </div>
                                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-[#ff7722] mt-1" size={20} />
                  <div>
                                    <p className="text-sm text-gray-500 font-semibold">
                                      Branch
                                    </p>
                                    <p className="text-lg font-medium leading-relaxed">
                                      Gwalior, Madhya Pradesh  474006
                                    </p>
                                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-500">
              <iframe
                title="Codlinq Location"
                src={isDarkMode ? darkMap : lightMap}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-5 w-full bg-gray-50 dark:bg-[#1e1e1e] p-6 rounded-xl shadow-md transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-center">
              Share your vision with us!
            </h3>

            <p className="text-sm text-gray-800 dark:text-gray-100 text-center">
              we'll reach out within 24 hours to explore the possibilities.
            </p>

            <div className="flex gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First"
                className="border rounded-md p-3 w-full bg-white dark:bg-[#2c2c2c] dark:border-gray-600 dark:text-white"
                required
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last"
                className="border rounded-md p-3 w-full bg-white dark:bg-[#2c2c2c] dark:border-gray-600 dark:text-white"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="border rounded-md p-3 w-full bg-white dark:bg-[#2c2c2c] dark:border-gray-600 dark:text-white"
              required
            />

            {/* Phone Input with Country Code Dropdown */}
<div className="flex items-center border rounded-md bg-white dark:bg-[#2c2c2c] dark:border-gray-600">
 <select
    name="country_code"
    defaultValue="+91"
    id="countryCode"
    className="p-3 pr-8 bg-white dark:bg-[#2c2c2c] text-gray-800 dark:text-gray-200 border-r border-gray-300 dark:border-gray-600 focus:outline-none rounded-l-md"
    onChange={(e) => {
      const phoneInput = e.target.parentElement.querySelector('input[name="phone"]');
      const selected = e.target.value;

      const placeholders = {
        "+91": "9876543210",
        "+1": "2025550123",
        "+44": "7123456789",
        "+61": "412345678",
        "+81": "7012345678",
        "+971": "501234567",
        "+49": "15123456789",
        "+33": "612345678",
        "+39": "3123456789",
        "+86": "13123456789",
      };

      phoneInput.placeholder = placeholders[selected] || "1234567890";
    }}
  >
    <option value="+91">🇮🇳 +91</option>
    <option value="+1">🇺🇸 +1</option>
    <option value="+44">🇬🇧 +44</option>
    <option value="+61">🇦🇺 +61</option>
    <option value="+81">🇯🇵 +81</option>
    <option value="+971">🇦🇪 +971</option>
    <option value="+49">🇩🇪 +49</option>
    <option value="+33">🇫🇷 +33</option>
    <option value="+39">🇮🇹 +39</option>
    <option value="+86">🇨🇳 +86</option>
  </select>

  <input
    type="tel"
    name="phone"
    placeholder="1234567890"
    className="p-3 w-full bg-transparent focus:outline-none text-gray-800 dark:text-white rounded-r-md"
    required
    pattern="[0-9]{6,15}"
    title="Please enter a valid phone number"
    onInput={(e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }}
  />
</div>

            {/* Existing dropdown */}
            <div className="flex gap-4">
  <select
    name="reason"
    className={`border rounded-md p-3 w-[60%] bg-white dark:bg-[#2c2c2c] dark:border-gray-600 dark:text-white transition-colors duration-200 ${
      selectedReason ? "text-black dark:text-white" : "text-gray-600"
    }`}
    required
    value={selectedReason}
    onChange={(e) => setSelectedReason(e.target.value)}
  >
    <option value="" disabled>
      Service Required
    </option>
    <option value="Software Development">Software Development</option>
    <option value="Website Development">Website Development</option>
    <option value="AI and ML">AI and ML</option>
    <option value="Application Development">Application Development</option>
    <option value="Software Maintenance">Software Maintenance</option>
    <option value="Shopify Development">Shopify Development</option>
    <option value="UI and UX Design">UI and UX Design</option>
    <option value="Logo and Graphic Design">Logo and Graphic Design</option>
    <option value="SEO and Digital Marketing">SEO and Digital Marketing</option>
    <option value="E-Commerce Account Management">E-Commerce Account Management</option>
    <option value="Video (UGC & Post Production)">Video (UGC & Post Production)</option>
    <option value="Other">Other</option>
  </select>

  {/* <select
    name="project_type"
    className="border rounded-md p-3 w-[35%] bg-white dark:bg-[#2c2c2c] dark:border-gray-600 dark:text-white"
    required
  >
    <option value="">Project Type</option>
    <option value="New Development">New</option>
    <option value="Redesign or Upgrade">Redesign</option>
    <option value="Consultation Only">Consultation</option>
    <option value="Maintenance Support">Maintenance</option>
  </select> */}

<select
              name="project_timeline"
              className="border rounded-md p-3 w-[40%] bg-white dark:bg-[#2c2c2c] dark:border-gray-600 dark:text-white"
              required
            >
              <option value="">Project Timeline</option>
              <option value="1-2 Weeks">1-2 Weeks</option>
              <option value="1 Month">1 Month</option>
              <option value="2-3 Months">2-3 Months</option>
              <option value="Flexible">Flexible</option>
            </select>

</div>

            {/* <select
              name="budget_range"
              className="border rounded-md p-3 w-full bg-white dark:bg-[#2c2c2c] dark:border-gray-600 dark:text-white"
              required
            >
              <option value="">Budget Range</option>
              <option value="Below $1000">Below $1000</option>
              <option value="$1000 - $5000">$1000 - $5000</option>
              <option value="$5000 - $10000">$5000 - $10000</option>
              <option value="Above $10000">Above $10000</option>
            </select>

            <select
              name="project_timeline"
              className="border rounded-md p-3 w-full bg-white dark:bg-[#2c2c2c] dark:border-gray-600 dark:text-white"
              required
            >
              <option value="">Project Timeline</option>
              <option value="1-2 Weeks">1-2 Weeks</option>
              <option value="1 Month">1 Month</option>
              <option value="2-3 Months">2-3 Months</option>
              <option value="Flexible">Flexible</option>
            </select> */}


            {/* File Upload */}
            {/* <div className="border rounded-md p-3 bg-white dark:bg-[#2c2c2c] dark:border-gray-600 dark:text-white">
              <label className="block mb-2 font-medium">
                Upload Project Brief / Reference (optional)
              </label>
              <input
                type="file"
                name="file"
                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                className="block w-full text-sm text-gray-700 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-[#ff7722] file:text-white hover:file:bg-[#e66a1f] cursor-pointer"
              />
            </div> */}

            <div className="border rounded-md p-3 bg-white dark:bg-[#2c2c2c] dark:border-gray-600 dark:text-white">
              <label className="block mb-2 font-medium">Preferred Contact Method</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="contact_method" value="Email" />
                  Email
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="contact_method" value="Call" />
                  Call
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="contact_method" value="WhatsApp" />
                  WhatsApp
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="contact_method" value="Virtual Meeting" />
                  Virtual Meet
                </label>
              </div>
            </div>
            {/* ✅ New Fields End */}

            <textarea
              name="message"
              placeholder="Tell us about your project, goals, requirements, and any specific features you need..."
              rows="5"
              className="border rounded-md p-3 w-full bg-white dark:bg-[#2c2c2c] dark:border-gray-600 dark:text-white"
              required
            ></textarea>

            <button
              type="submit"
              className="mt-6 px-5 py-2 w-full bg-[#ff7722] text-white rounded-lg hover:bg-[#e66a1f] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

