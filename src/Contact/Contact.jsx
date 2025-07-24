import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact section my-auto">
      <div className="container my-auto" data-aos="fade-up" data-aos-delay={100}>
        <div className="contact-main-wrapper">
          <div className="contact-content">
            <div
              className="contact-cards-container"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="contact-card">
                <div className="icon-box">
                  <i className="bi bi-geo-alt" />
                </div>
                <div className="contact-text">
                  <h4>المكان</h4>
                  <p>المنيا الجديده الحي الاول امام سوبر ماركت ميشو</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="icon-box">
                  <i className="bi bi-envelope" />
                </div>
                <div className="contact-text">
                  <h4>الأيميل</h4>
                  <p>the.prof.corporation@gmail.com</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="icon-box">
                  <i className="bi bi-telephone" />
                </div>
                <a href="tel:+201033654595"> 
                <div className="contact-text">
                  <h4>الهاتف</h4>
                  <p dir="ltr">+201033654595 </p>
                </div>
                </a>
              </div>
              <div className="contact-card">
                <div className="icon-box">
                  <i className="bi bi-clock" />
                </div>
                <div className="contact-text">
                  <h4>ساعات العمل</h4>
                  <p>24/7</p>
                </div>
              </div>
            </div>
            <div
              className="contact-form-container"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <h3 className="mb-5">قدم الطلب</h3>
              {/* <p>
    انضم الأن لعائلتنا مع بروف اكاديمي
              </p> */}
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="الأسم"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                    dir="rtl"
                      type="tel"
                      className="form-control"
                      name="tel"
                      id="email"
                      placeholder="الهاتف"
                    
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="العنوان"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="الرساله"
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="form-submit">
                  <button type="submit">Send Message</button>
                  <div className="social-links">
                    <a href="#">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
