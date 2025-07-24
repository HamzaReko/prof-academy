import React from "react";
import { Link } from 'react-router';

const Lesson = ({ grade, subject, img, numOfStudents, rate, price, link }) => {
  return (
    <div className="course-item">
      <div className="course-thumb">
        <img src={img} alt="Course" className="img-fluid" />
        <div className="course-level">{grade}</div>
      </div>
      <div className="course-info">
        <h5>{subject}</h5>
        <div className="course-stats">
          <span>
            <i className="bi bi-people" /> {numOfStudents} ملتحق
          </span>
          <span>
            <i className="bi bi-star-fill" /> {rate}
          </span>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <p className="price">{price} جنية</p>
          <Link to={link}>
            <button className="btn btn-primary">حصه تجريبيه</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
