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

    // Prepare the data to send to the EmailJS template
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_i6v9jqy", // Your EmailJS Service ID
        "template_re7dfun", // Your EmailJS Template ID
        templateParams, // Pass form data here as an object
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
        className="pricing-section"
        style={{
          backgroundImage: "url(images/hosting-pricing-bg.jpg)",
        }}
      ></section>

      <section className="p-0 mt-6">
        <div className="container">
          <div className="row justify-content-center">
            {/* Left Section with Business Text */}
            <div className="col-md-6 col-lg-6">
              <div className="p-4">
                <h5 className="text-black fw-600">
                  End-to-End Solutions for Business Optimization with Innoit
                </h5>
                <p className="text-black">
                  Our comprehensive suite of business solutions seamlessly
                  integrates essential operations, from customer relationship
                  management to payroll systems, POS, logistics, and
                  communication tools. With features like Weight Bridge
                  Integration, WhatsApp Integration, and advanced Email Caster,
                  we provide the tools to enhance your workflow, streamline
                  processes, and boost communication across your organization.
                </p>
                <p className="text-black">
                  Our solutions can help you optimize operations, improve
                  customer relationships, and enhance productivity with SAP
                  Business One integration. Learn how our platform empowers
                  businesses with real-time analytics, mobile apps, and secure
                  payment processing to manage your operations anytime,
                  anywhere.
                </p>
              </div>
            </div>

            {/* Right Section with Contact Form */}
            <div className="col-md-6 col-lg-6">
              <div className="text-center ">
                <span
                  className="text-white"
                  style={{
                    fontSize: "20px", // Larger font size for the heading
                    fontWeight: "bold",
                    color: "#fff",
                    backgroundColor: "#264d73", // Dark blue background color
                    padding: "10px", // Padding to match the style in the image
                    // borderRadius: "8px",
                    display: "block", // Ensures the span takes the full width
                    width: "100%", // Full width like in the image
                  }}
                >
                  Contact Now!
                </span>
              </div>
              <div
                className="p-4"
                style={{
                  backgroundColor: "#E9EAEC", // Light gray background
                  // borderRadius: "8px",
                  padding: "30px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label text-black">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control text-black"
                      id="name"
                      name="name" // Matches the dynamic variable in the template
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{ borderRadius: "8px", padding: "10px" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-black">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control text-black"
                      id="email"
                      name="email" // Matches the dynamic variable in the template
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{ borderRadius: "8px", padding: "10px" }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label text-black">
                      Message
                    </label>
                    <textarea
                      className="form-control text-black"
                      id="message"
                      name="message" // Matches the dynamic variable in the template
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      required
                      style={{ borderRadius: "8px", padding: "10px" }}
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn w-100"
                      disabled={isSending}
                      style={{
                        backgroundColor: "#ff6f3c", // Orange button background
                        color: "#fff",
                        padding: "15px", // Increased padding to match the image
                        fontSize: "16px",
                        fontWeight: "bold",
                        borderRadius: "8px",
                      }}
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
                        Rawalpindi, Punjab 46000{" "}
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
                        href="  https://g.co/kgs/YjHcn1U "
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
    </>
  );
};

export default Contact;
