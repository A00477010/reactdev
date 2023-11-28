import React from "react";
import photo from "../../Images/aditya 4.jpeg";
// import './App.cs';

function AboutMe() {
  return (
    <div className="userinfo">
      <h1>Aditya Chaudhari</h1>
      <img src={photo} alt="PassportPhoto" />
      <div>
        <p>dev</p>
        <p>
          I am Aditya, I am from Goa, India. I have completed my bachelors of
          engineering from the University of Mumbai in 2021. I have 2 years of
          work experience in software. I like playing badminton and table
          tennis. Traveling is one of my favorite hobbies.
        </p>
      </div>
      <div>
        <p>
          I joined the MCDA course because it provided a blended learning of
          software development and data science/analysis. As these are both
          fields of technology I was interested in, I opted for this program.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
