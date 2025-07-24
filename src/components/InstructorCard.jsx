import React from 'react';
import { Link } from 'react-router';

const InstructorCard = ({ image, name, specialty, description, students, rating, courses, socialLinks }) => (
  <div className="instructor-card">
    <div className="instructor-image">
      <img src={image} className="img-fluid" alt={name} />
    </div>
    <div className="instructor-info">



  <div className='d-flex flex-row justify-content-between'>
<div className='d-flex flex-column'>
          <h5>{name}</h5>
      
      
          <p className="specialty">{specialty}</p>
      
</div>
        
        <div className="stats-grid">
          <div className="stat">
            <span className="number">{students}</span>
            <span className="label">طالب</span>
          </div>
  </div>
      </div>
      <div className="action-buttons my-2"> 
        <Link to="/teacher" className="btn-view mx-auto w-50 text-center">عرض المعلم</Link>
      </div>
    </div>
  </div>
);

export default InstructorCard; 