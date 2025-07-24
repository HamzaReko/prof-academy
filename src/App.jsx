import { Outlet } from "react-router";
import "./index.css";
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import Header from './components/Header';
import Footer from './components/Footer';
// Import all main images from Home.jsx for preloading
import courses13 from './assets/img/education/courses-13.webp';
import students9 from './assets/img/education/students-9.webp';
import personF3 from './assets/img/person/person-f-3.webp';
import campus4 from './assets/img/education/campus-4.webp';
import personM5 from './assets/img/person/person-m-5.webp';
import students7 from './assets/img/education/students-7.webp';
import personF7 from './assets/img/person/person-f-7.webp';
import education5 from './assets/img/education/education-5.webp';
import personM8 from './assets/img/person/person-m-8.webp';
import activities3 from './assets/img/education/activities-3.webp';
import personF12 from './assets/img/person/person-f-12.webp';
import teacher6 from './assets/img/education/teacher-6.webp';
import personM11 from './assets/img/person/person-m-11.webp';
import teacher2 from './assets/img/education/teacher-2.webp';
import teacher7 from './assets/img/education/teacher-7.webp';
import teacher4 from './assets/img/education/teacher-4.webp';
import teacher9 from './assets/img/education/teacher-9.webp';
import personF1 from './assets/img/person/person-f-1.webp';
import personM2 from './assets/img/person/person-m-2.webp';
import personM4 from './assets/img/person/person-m-4.webp';
import blogPost1 from './assets/img/blog/blog-post-1.webp';
import personF13 from './assets/img/person/person-f-13.webp';
import blogPost2 from './assets/img/blog/blog-post-2.webp';
import personM10 from './assets/img/person/person-m-10.webp';
import blogPost3 from './assets/img/blog/blog-post-3.webp';
import courses4 from './assets/img/education/courses-4.webp';

const imagesToLoad = [
  courses13, students9, personF3, campus4, personM5, students7, personF7, education5, personM8, activities3, personF12, teacher6, personM11, teacher2, teacher7, teacher4, teacher9, personF1, personM2, personM4, blogPost1, personF13, blogPost2, personM10, blogPost3, courses4
];

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    imagesToLoad.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad;
    });
    // eslint-disable-next-line
  }, []);

  const handleImageLoad = () => {
    setLoadedCount((count) => {
      const newCount = count + 1;
      if (newCount === imagesToLoad.length) {
        setIsLoading(false);
      }
      return newCount;
    });
  };

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader-spinner"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Index - Learner Bootstrap Template</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/src/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/src/assets/img/apple-touch-icon.png" />
      </Helmet>
      <Header />
      <div>
        {/* will either be <Home/> or <Settings/> */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
