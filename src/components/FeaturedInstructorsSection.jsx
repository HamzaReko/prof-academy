import React from 'react';
import InstructorCard from './InstructorCard';
const FeaturedInstructorsSection = ({ instructors }) => (
  <section id="featured-instructors" className="featured-instructors section">
    <div dir='ltr' className="container section-title" data-aos="fade-up">
      <h2>عملائنا</h2>
      <p>تعرف على المعلمين الذين يعملون معنا
</p>
    </div>
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4">
        {instructors.map((inst, idx) => (
          <div key={idx} className="col-xl-3 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200 + idx * 150}>
            <InstructorCard {...inst} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedInstructorsSection; 