/* eslint-disable */
import React from 'react';

export const lineheight = {
  wordSpacing: '0.2rem',
  fontSize: '18px',
  fontWeight: '500',
  color: 'whitesmoke',
  textShadow: '2px 2px 4px #0000FF', // horizontal offset, vertical offset, blur radius, color
};

export const heading = {
  color: 'whitesmoke',
  fontSize: '2rem',
  fontWeight: '500',
  textAlign: 'center',
  marginBottom: '6rem',
  textShadow: '2px 2px 4px #0000FF',
};

export default function Home() {
  return (
    <>
      <div className="home-wrap">
        <h2 style={heading}>Welcome to our Home Page!</h2>
        <p style={lineheight}>
        Welcome to Math-Magician, your one-stop application for all 
        things mathematical. Built using the powerful React.js 
        library, Math-Magician is more than just a calculator app. 
        It's a comprehensive tool designed to make mathematics 
        engaging and accessible.
        At its core, Math-Magician features a robust calculator functionality. 
        Whether you're performing simple arithmetic or complex calculations, 
        our calculator is designed to handle it all with ease. The intuitive 
        interface ensures that you can perform your calculations quickly and 
        accurately.
        </p>
        <p style={lineheight}>
        But Math-Magician is not just about numbers. We believe that learning should be fun and inspiring. That's why we've integrated a unique quotes functionality into our app. With each use, you'll be presented with a thought-provoking quote about mathematics. These quotes are fetched in real-time from an API, ensuring a fresh dose of inspiration each time you use the app.
        </p>
        <p style={lineheight}>
        The power of Math-Magician lies in its use of React components and states. 
        This allows for a dynamic, responsive user experience. Whether you're a student, 
        a teacher, a professional, or just someone who loves math, Math-Magician is designed 
        to cater to your needs.
        So why wait? Dive in and explore the magic of mathematics with Math-Magician!
        </p>
      </div>
    </>
  );
}
