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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Eos quod sit quos corporis laboriosam cupiditate omnis dignissimos,
          explicabo, voluptatum similique laudantium praesentium tempore.
          Recusandae culpa eos eius, sed ab quibusdam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti ipsum,
          asperiores sed nihil reprehenderit officia harum earum recusandae nobis provident.
          Modi facere repellat fugiat quisquam quos tempore tempora aspernatur.
        </p>
        <p style={lineheight}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Eos quod sit quos corporis laboriosam cupiditate omnis dignissimos,
          explicabo, voluptatum similique laudantium praesentium tempore.
          Recusandae culpa eos eius, sed ab quibusdam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti ipsum,
          asperiores sed nihil reprehenderit officia harum earum recusandae nobis provident.
          Modi facere repellat fugiat quisquam quos tempore tempora aspernatur.
        </p>
        <p style={lineheight}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Eos quod sit quos corporis laboriosam cupiditate omnis dignissimos,
          explicabo, voluptatum similique laudantium praesentium tempore.
          Recusandae culpa eos eius, sed ab quibusdam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero corrupti ipsum,
          asperiores sed nihil reprehenderit officia harum earum recusandae nobis provident.
          Modi facere repellat fugiat quisquam quos tempore tempora aspernatur.
        </p>
      </div>
    </>
  );
}
