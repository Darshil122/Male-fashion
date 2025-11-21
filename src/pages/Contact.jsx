import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.287244933879!2d72.5089284!3d23.049928399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5894bfffff%3A0x249c21f81988473f!2sInfikey%20Technologies%20Private%20Limited%20-%20IT%20Company%20%7C%20Web%20Design%20%7C%20App%20Dev%20%7C%20Software%20Development%20Company%20%7C%20USA%20and%20India!5e0!3m2!1sen!2sin!4v1757936561596!5m2!1sen!2sin"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="contact__text">
                <div className="section-title">
                  <span>Information</span>
                  <h2>Contact Us</h2>
                  <p>
                    As you might expect of a company that began as a high-end
                    interiors contractor, we pay strict attention.
                  </p>
                </div>
                <ul>
                  <li>
                    <h4>Ahmedabad</h4>
                    <p>
                      Infikey Technologies
                      <br />
                      +43 982-314-0958
                    </p>
                  </li>
                  <li>
                    <h4>France</h4>
                    <p>
                      109 Avenue Léon, 63 Clermont-Ferrand <br />
                      +12 345-423-9893
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="contact__form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <span className="text-danger">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="text"
                        placeholder="Email"
                        id="email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                      {errors.email && (
                        <span className="text-danger">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div className="col-lg-12">
                      <textarea
                        placeholder="Message"
                        id="message"
                        {...register("message", {
                          required: "Message is required",
                        })}
                      ></textarea>
                      {errors.message && (
                        <span className="text-danger">
                          {errors.message.message}
                        </span>
                      )}
                      <button type="submit" className="site-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
