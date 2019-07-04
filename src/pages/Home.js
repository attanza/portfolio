import React from "react";
import { Segment } from "semantic-ui-react";
import Skills from "../components/Skills";
const Home = () => {
  return (
    <div className="animated fadeIn">
      <Segment padded>
        <h3>About Me</h3>
        <p>
          I am an enthusiastic and organized individual. Through previous roles
          I have gained experience in project managing and an understanding for
          the responsibilities linked to this role. I have the ability to
          prioritize well and understand what tasks should come first and how to
          complete them in the most effective manner.
        </p>
        <br />
        <p>
          Previous administrative roles have taught me how to prepare documents
          and how to coordinate different events and projects. My solid IT
          skills will also allow me to create documents as I have a vast
          knowledge of many IT packages. I have great communication skills,
          which would enable me to liaise with central services, contractors and
          staff. I work extremely well and efficiently when part of a team,
          which is key in this role as there is always a need for managing and
          leading change when required.
        </p>
        <br />
        <p>
          I have an eye for details, which means that issues such as Health and
          Safety will always be a main priority and I have the ability to
          respond to any sort of situations in the best way possible. I am hard
          working and give one hundred per cent to everything I do. I am
          committed and trustworthy and always willing to learn and pass on any
          knowledge that I have to others.
        </p>
        <br />
        <h3>My Skills and Knowledges</h3>
        <br />
        <Skills />
      </Segment>
    </div>
  );
};

export default Home;
