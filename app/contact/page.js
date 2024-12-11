"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form submission to send an email via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_yrj3mhl", // Your EmailJS Service ID
        "template_ztkysnn", // Your EmailJS Template ID
        e.target,
        "JhzwSHTeL-tHdRkA3" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);
          setIsSending(false);
          setFormData({ name: "", email: "", message: "" }); // Clear all state fields
          toast.success("Your message has been sent successfully!");
        },
        (error) => {
          setSuccess(false);
          setError(true);
          setIsSending(false);
          console.error("Error sending email:", error);
          toast.error(
            "There was an error sending your message. Please try again."
          );
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <section
        style={{
          backgroundImage: "url(images/hosting-pricing-bg.jpg)",
          height: "1rem",
        }}
      ></section>
      <section>
        <div className="container">
          <div className="row">
            <div
              className="col-12 tab-style-04"
              data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <ul className="nav nav-tabs border-0 justify-content-center mb-6 fs-18 fw-500">
                <li className="nav-item">
                  <a
                    className="nav-link text-dark-gray text-black"
                    data-bs-toggle="tab"
                    href="#tab_five2"
                  >
                    Islamabad
                    <span className="tab-border bg-dark-gray" />
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade in active show" id="tab_five1">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5 col-md-6 sm-mb-30px">
                      <img
                        src="https://www.unitedsol.net/wp-content/uploads/2023/02/ezgif.com-gif-maker.jpg"
                        alt=""
                        className="w-100 border-radius-6px"
                      />
                    </div>
                    <div className="col-lg-4 col-md-5 offset-md-1 text-center text-md-start">
                      <span className="text-dark-gray fs-18 fw-600 ls-minus-05px">
                        Third Floor, Amjad plaza
                      </span>
                      <p className="text-black">
                        Bank Rd, Saddar
                        <br />
                        Rawalpindi, Punjab 46000
                      </p>

                      <span className="d-block mb-30px">
                        <span className="text-dark-gray fw-600">Email:</span>{" "}
                        <a
                          className="text-black"
                          href="mailto:info@yourdomain.com"
                        >
                          Info@innoit.org
                        </a>
                      </span>
                      <a
                        href=" https://g.co/kgs/YjHcn1U "
                        target="_blank"
                        className="btn btn-medium btn-dark-gray btn-rounded btn-switch-text btn-box-shadow"
                      >
                        <span>
                          <span
                            className="btn-double-text"
                            data-text="Get directions"
                          >
                            Get directions
                          </span>
                          <span>
                            <i className="feather icon-feather-arrow-right" />
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-0">
        <div className="container">
          <div className="row justify-content-center">
            <h4 className="text-center text-black">Get in touch with us</h4>
            <div className="row">
              {/* Left Column */}
              <div className="col-md-6 d-flex flex-column align-items-start">
                <div className="mb-3 w-100">
                  <label htmlFor="name" className="form-label text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3 w-100">
                  <label htmlFor="email" className="form-label text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <p className="text-black mt-4">
                  We are committed to protecting your privacy. We will never
                  collect information about you without your explicit consent.
                </p>
              </div>

              {/* Right Column */}
              <div className="col-md-6 d-flex flex-column align-items-end">
                <form
                  onSubmit={handleSubmit}
                  className="w-100"
                  onChange={() => toast.dismiss()}
                >
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-black">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-3 text-end">
                    <button
                      type="submit"
                      className="btn btn-medium btn-dark-gray btn-rounded btn-switch-text btn-box-shadow p-2"
                      disabled={isSending}
                    >
                      {isSending ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
