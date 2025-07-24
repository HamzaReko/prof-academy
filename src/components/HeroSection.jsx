import React from 'react';
import courses13 from '../assets/img/education/courses-13.webp';
import { PureIncrement } from 'pure_counter';
import { HashLink } from 'react-router-hash-link';

const HeroStatCard = ({ value, label }) => (
  <div className="stat-item">
    <PureIncrement  className="number purecounter" start={0} end={value} duration={2} />
    <span className="label">{label}</span>
  </div>
);

const HeroFeature = ({ icon, text }) => (
  <div className="feature">
    <i className={`bi ${icon}`} />
    <span>{text}</span>
  </div>
);

const HeroSection = () => (
  <section id="courses-hero" className="courses-hero section light-background">
    <div className="hero-content">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="hero-text">
              <h1>حول تعليمك إلى تجربة رقمية متطورة</h1>
              <p>
              نختص في تطوير حلول رقمية آمنة وعصرية ومخصصة للمؤسسات التعليمية والمعلمين الأفراد. من تطبيقات الجوال إلى الهوية الرقمية الكاملة، نساعدك للبقاء في المقدمة دائمًا.



              </p>
              <div className="hero-stats">
                <HeroStatCard value={54} label="المعلمين الواثقين بنا" />
                <HeroStatCard value={325} label="الحصص" />
                <HeroStatCard value={99.9} label="معدل الأمان %" />
              </div>
              <div className="hero-buttons">
                <HashLink to="/#featured-instructors" className="btn btn-primary">تصفح المعلمين</HashLink>
                {/* <a href="#about" className="btn btn-outline">للمزيد</a> */}
              </div>
              <div className="hero-features">
                <HeroFeature icon="bi-shield-check" text="امان موثوق" />
                <HeroFeature icon="bi-clock" text="خدمة 24/7" />
                <HeroFeature icon="bi-people" text="طاقم عمل متعاون" />
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="hero-image">
              <div className="main-image">
                <img src={courses13} alt="Online Learning" className="img-fluid" />
              </div>
              {/* Add floating cards or other hero visuals here if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-background">
      <div className="bg-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>
    </div>
  </section>
);

export default HeroSection; 