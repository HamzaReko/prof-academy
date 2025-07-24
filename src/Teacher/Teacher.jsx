import React from "react";
import teacher2 from "../assets/img/education/teacher-4.webp";
import Lesson from "./components/lesson";
import { Link } from "react-router-dom";
const Teacher = () => {
  const LessonContent = [
    {
      grade: "ثانوي",
      subject: "فيزياء",
      img: teacher2,
      numOfStudents: "902",
      rate: "4.9",
      price: "200",
      link: "/",
    },
    {
      grade: "ثانوي",
      subject: "كيمياء",
      img: teacher2,
      numOfStudents: "702",
      rate: "4.9",
      price: "400",
      link: "/",
    },
    {
      grade: "ثانوي",
      subject: "عربي",
      img: teacher2,
      numOfStudents: "413",
      rate: "4.9",
      price: "300",
      link: "/",
    },
  ];

  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">دار ابن سينا</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">الرئيسيه</Link>
              </li>
              <li className="current">دار ابن سينا</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* End Page Title */}
      {/* Instructor Profile Section */}
      <section id="instructor-profile" className="instructor-profile section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="instructor-hero-banner"
                data-aos="zoom-out"
                data-aos-delay={200}
              >
                <div className="hero-background">
                  <img
                    src="assets/img/education/showcase-4.webp"
                    alt="Background"
                    className="img-fluid"
                  />
                  <div className="hero-overlay" />
                </div>
                <div className="hero-content">
                  <div className="instructor-avatar">
                    <img
                      src={teacher2}
                      alt="Instructor"
                      className="img-fluid"
                    />
                    <div className="status-badge">
                      <i className="bi bi-patch-check-fill" />
                      <span>مؤكد</span>
                    </div>
                  </div>
                  <div className="instructor-info">
                    <h2>مستر ابن سينا</h2>
                    <p className="title">سنتر تعليمي</p>
                    <div className="credentials">
                      <span className="credential">جميع المراحل</span>
                      <span className="credential"> خبره 10+ سنين</span>
                      <span className="credential">15,247 طالب</span>
                    </div>
                    <div className="rating-overview">
                      <div className="stars">
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-fill" />
                        <i className="bi bi-star-half" />
                      </div>
                      <span className="rating-text">
                        4.8 تقييم بواسطة 2334 طالب
                      </span>
                    </div>
                    <div className="contact-actions">
                      <a href="#contact" className="btn-contact">
                        <i className="bi bi-envelope" />
                        تواصل معهم
                      </a>
                      <div className="social-media">
                        <a href="#">
                          <i className="bi bi-facebook" />
                        </a>
                        <a href="#">
                          <i className="bi bi-youtube" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-5 mt-4">
            <div className="col-lg-8">
              <div
                className="content-tabs"
                data-aos="fade-right"
                data-aos-delay={300}
              >
                <ul className="nav nav-tabs custom-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#instructor-profile-about"
                      type="button"
                      role="tab"
                    >
                      <i className="bi bi-person" />
                      حول
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#instructor-profile-experience"
                      type="button"
                      role="tab"
                    >
                      <i className="bi bi-briefcase" />
                      الخبره
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#instructor-profile-courses"
                      type="button"
                      role="tab"
                    >
                      <i className="bi bi-book" />
                      الحصص
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#instructor-profile-reviews"
                      type="button"
                      role="tab"
                    >
                      <i className="bi bi-star" />
                      التقييمات
                    </button>
                  </li>
                </ul>
                <div className="tab-content custom-tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="instructor-profile-about"
                    role="tabpanel"
                  >
                    <div className="about-content">
                      <div className="bio-section">
                        <h4>حول</h4>
                        <p>
                          مسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمستر
                          جامد فشخ
                        </p>{" "}
                        <p>
                          مسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمست
                          رمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمسترمستر
                        </p>
                      </div>
                      <div className="expertise-grid">
                        <h4>المواد</h4>
                        <div className="skills-grid">
                          <div className="skill-item my-auto">
                            <span>فيزياء</span>
                          </div>
                          <div className="skill-item my-auto">
                            <span>عربي</span>
                          </div>
                          <div className="skill-item my-auto">
                            <span>ماث</span>
                          </div>
                          <div className="skill-item my-auto">
                            <span>كيمياء</span>
                          </div>
                          <div className="skill-item my-auto">
                            <span>انجليزي</span>
                          </div>
                          <div className="skill-item my-auto">
                            <span>دين</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="instructor-profile-experience"
                    role="tabpanel"
                  >
                    <div className="experience-grid">
                      <div className="experience-card">
                        <div className="timeline-marker">2019</div>
                        <div className="experience-details">
                          <h5>افضل سنتر لسنة 2019</h5>
                          <p className="institution">كلام فاضي</p>
                          <p>
                            شوية رغي وكدا شوية رغي وكدا شوية رغي وكدا شوية رغي
                            وكدا شوية رغي وكدا شوية رغي وكدا شوية رغي وكدا شوية
                            رغي وكدا
                          </p>
                        </div>
                      </div>{" "}
                      <div className="experience-card">
                        <div className="timeline-marker">2019</div>
                        <div className="experience-details">
                          <h5>افضل سنتر لسنة 2019</h5>
                          <p className="institution">كلام فاضي</p>
                          <p>
                            شوية رغي وكدا شوية رغي وكدا شوية رغي وكدا شوية رغي
                            وكدا شوية رغي وكدا شوية رغي وكدا شوية رغي وكدا شوية
                            رغي وكدا
                          </p>
                        </div>
                      </div>{" "}
                      <div className="experience-card">
                        <div className="timeline-marker">2019</div>
                        <div className="experience-details">
                          <h5>افضل سنتر لسنة 2019</h5>
                          <p className="institution">كلام فاضي</p>
                          <p>
                            شوية رغي وكدا شوية رغي وكدا شوية رغي وكدا شوية رغي
                            وكدا شوية رغي وكدا شوية رغي وكدا شوية رغي وكدا شوية
                            رغي وكدا
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="instructor-profile-courses"
                    role="tabpanel"
                  >
                    <div className="courses-grid">
                      {LessonContent.map((item, i) => {
                        return (
                          <Lesson
                            grade={item.grade}
                            subject={item.subject}
                            img={item.img}
                            numOfStudents={item.numOfStudents}
                            rate={item.rate}
                            price={item.price}
                            link={item.link}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="instructor-profile-reviews"
                    role="tabpanel"
                  >
                    <div className="reviews-container">
                      <div className="review-card">
                        <div className="review-header">
                          <img
                            src={teacher2}
                            alt="Student"
                            className="reviewer-avatar"
                          />
                          <div className="reviewer-info">
                            <h6>طالب</h6>
                            <p>الصف الثالث الثانوي</p>
                            <div className="review-rating">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <p>
                          فاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفا
                          جرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجر
                        </p>
                      </div>
                      <div className="review-card">
                        <div className="review-header">
                          <img
                            src={teacher2}
                            alt="Student"
                            className="reviewer-avatar"
                          />
                          <div className="reviewer-info">
                            <h6>طالب</h6>
                            <p>عيل</p>
                            <div className="review-rating">
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                              <i className="bi bi-star-fill" />
                            </div>
                          </div>
                        </div>
                        <p>
                          فاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفا
                          جرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجرفاجر
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="sidebar-widgets"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <div className="stats-widget">
                  <h4>الأحصائيات</h4>
                  <div className="stats-grid">
                    <div className="stat-box">
                      <div className="stat-icon">
                        <i className="bi bi-people" />
                      </div>
                      <div className="stat-content">
                        <h5>15,247</h5>
                        <p>عدد الطلاب</p>
                      </div>
                    </div>
                    <div className="stat-box">
                      <div className="stat-icon">
                        <i className="bi bi-book" />
                      </div>
                      <div className="stat-content">
                        <h5>18</h5>
                        <p>عدد الكورسات</p>
                      </div>
                    </div>
                    <div className="stat-box">
                      <div className="stat-icon">
                        <i className="bi bi-award" />
                      </div>
                      <div className="stat-content">
                        <h5>94%</h5>
                        <p>معدل الأكمال</p>
                      </div>
                    </div>
                    <div className="stat-box">
                      <div className="stat-icon">
                        <i className="bi bi-clock" />
                      </div>
                      <div className="stat-content">
                        <h5>10+</h5>
                        <p>سنين الخبره</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="achievements-widget">
                  <h4>الجوائز</h4>
                  <div className="achievement-list">
                    <div className="achievement-item">
                      <i className="bi bi-trophy" />
                      <div className="achievement-text">
                        <h6>جائيزه</h6>
                        <p>2015</p>
                      </div>
                    </div>{" "}
                    <div className="achievement-item">
                      <i className="bi bi-trophy" />
                      <div className="achievement-text">
                        <h6>جائيزه</h6>
                        <p>2015</p>
                      </div>
                    </div>{" "}
                    <div className="achievement-item">
                      <i className="bi bi-trophy" />
                      <div className="achievement-text">
                        <h6>جائيزه</h6>
                        <p>2015</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="contact" className="contact-widget">
                  <h4>تواصل معهم </h4>
                  <div className="contact-info">
                    <div className="contact-item">
                      <i className="bi bi-envelope" />
                      <span dir="ltr">33333.3333@3333.edu</span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-telephone" />
                      <span dir="ltr">33333.3333@3333.edu</span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-geo-alt" />
                      <span dir="ltr">33333.3333@3333.edu</span>
                    </div>
                  </div>
                  <div className="office-hours">
                    <h6>مواعيد العمل</h6>
                    <p>
                      من السبت الي الخميس
                      <br />
                      10 صباحا - 10 مساءًا
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Instructor Profile Section */}
    </main>
  );
};

export default Teacher;
