import React from 'react';

const CtaSection = ({ stats, features, image, floatingCards }) => (
  <section id="cta" className="cta section light-background pb-4">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row align-items-center">
        <div className="col-lg-12" data-aos="fade-right" data-aos-delay={200}>
          <div className="cta-content">
          <div dir='ltr' className="container section-title pb-4" data-aos="fade-up">
      <h2>خدماتنا</h2>
      <p>حلول رقمية شاملة مصممة للتميز التعليمي
</p>
    </div>

            <div className="features-list">
              {features && features.map((feature, idx) => (
                <div key={idx} className="feature-item" data-aos="fade-up" data-aos-delay={300 + idx * 50}>
                  <i className="bi bi-check-circle-fill mx-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="cta-actions" data-aos="fade-up" data-aos-delay={500}>
              <a href="/contact" className="btn btn-primary">قدم طلبك الأن</a>
            </div>
            {/* <div className="stats-row" data-aos="fade-up" data-aos-delay={400}>
              {stats && stats.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <h3>
                    <span data-purecounter-start={0} data-purecounter-end={stat.value} data-purecounter-duration={2} className="purecounter" />{stat.suffix}
                  </h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
        {/* <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
          <div className="cta-image">
            {image && <img src={image} alt="Online Learning Platform" className="img-fluid" />}
            {floatingCards && floatingCards.map((card, idx) => (
              <div key={idx} className={`floating-element ${card.className}`} data-aos="zoom-in" data-aos-delay={600 + idx * 100}>
                <div className="card-content">
                  <i className={`bi ${card.icon}`} />
                  <div className="text">
                    <span className="number">{card.number}</span>
                    <span className="label">{card.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default CtaSection; 