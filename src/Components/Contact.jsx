import React, { useState } from "react";
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_hiefqka', 'template_e3cegaa', formData, '4_ZXrDkB0V6fY4sP9')
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        alert('Failed to send message.');
        console.log(error.text);
      });
  };

  return (
    <div className="mt-4 px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center" id="contact">
      <div>
        <div className="text-gray-300 my-3 p-2">
          <h3 className="text-4xl font-semibold mb-5">
            Let's <span className="primary-color">connect</span>
          </h3>
          <p className="text-justify leading-7">
            Interested in collaborating or have any questions? Feel free to reach out to me
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="max-w-6xl p-5 md:p-12" id="form">
        <input
          type="text"
          id="name"
          placeholder="Your name ..."
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <input
          type="email"
          id="email"
          placeholder="Your email ..."
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <textarea
          type="textarea"
          id="textarea"
          placeholder="Your message ..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          cols="30"
          rows="4"
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
        />
        <button type="submit" className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
