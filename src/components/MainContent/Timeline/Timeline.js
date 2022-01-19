import React, { Component } from "react";
import TimelineElement from "./TimelineElement";

class Timeline extends Component {
  state = {
    experience: [
      {
        badge: { icon: "fas fa-laptop", color: "timeline-badge first" },
        title: "Data Coordinator",
        company: "Partners in Health",
        timespan: "Nov 2020 - Dec 2021",
        website: null,
        duties: [
          "Apply specialized processes to de-duplicate records within database and worked alongside DPH epidemiologists to ensure smooth transfer of data between state-wide database",
          "Help ensure high data integrity through various data cleaning methods, including wriAng specialized Salesforce reports to idenAfy collecAons of data that need cleaning",
          "Assist with system design and user tesAng and support, including supporAng training and quality assurance procedures for large contact tracing team",
        ],
      },
      {
        badge: { icon: "fas fa-code", color: "timeline-badge first" },
        title: "Front End Developer",
        company: "Hippolyta",
        timespan: "Aug 2020 - Present",
        website: "hippolyta.io",
        duties: [
          "Responsible for the branding, overall front-end appearance, and user experience for the company’s web application",
          "Played role in developing the application architecture including data structures and building the API",
          "Clean up UI bugs and other small interface fixes as issues were brought to attention by other members of the team",
          <em>
            Technologies used: React.js, Typescript, Gatsby, Node.js, GraphQL
            and Redux
          </em>,
        ],
      },
      {
        badge: { icon: "fas fa-code", color: "timeline-badge second" },
        title: "Lead Technical Developer",
        company: "Prediction Money, Inc",
        timespan: "Jan 2019 - June 2019",
        website: null,
        duties: [
          "Formulated business plan with company founder",
          "Worked with experienced back-end programmer to bring early startup visions to a reality",
          "Develop ways to create an optimal user experience to build loyal customer base",
          <em>Technologies Used: PHP, CodeIgniter, cPanel, Git, HTML/CSS</em>,
        ],
      },
      {
        badge: { icon: "fas fa-poll-h", color: "timeline-badge third" },
        title: "Digital Marketing Intern",
        company: "Cascade School Supplies, Inc",
        timespan: "June 2018 - Aug 2018",
        website: null,
        duties: [
          "Created fresh look to product pages to increase brand awareness and aesthetic appeal",
          "Added new product pages and deleted duplicate or discontinued products",
          "Generated valuable ideas for optimizing company website to increase SEO and a more meaningful user experience",
        ],
      },
      {
        badge: { icon: "fas fa-hamburger", color: "timeline-badge fifth" },
        title: "Server & Bartender",
        company: "Hops & Vines Beer Garden and Brasserie",
        timespan: "May 2015 - Sept 2017",
        website: null,
        duties: [
          "Developed strong interpersonal communication skills through regular interaction with patrons",
          "Served food and drink orders swiftly and accurately",
          "Exhibited strong teamwork and multitasking abilities with coworkers",
          "Assumed additional responsibilities to ensure the kitchen worked in harmony",
        ],
      },
      {
        badge: { icon: "fas fa-graduation-cap", color: "timeline-badge sixth" },
        title: "Bachelor of the Arts - Economics",
        company: "Westfield State Univeristy",
        timespan: "Graduated May 2019",
        website: null,
        duties: ["Minor in Computer Science"],
      },
    ],
  };
  render() {
    let timelineElements = this.state.experience.map((elem, index) => {
      return (
        <TimelineElement
          title={elem.title}
          company={elem.company}
          timespan={elem.timespan}
          website={elem.website}
          duties={elem.duties}
          badge={elem.badge}
          key={index}
          id={index}
        />
      );
    });
    return (
      <section id="experience">
        <div className="container-fluid elem">
          <div className="container">
            <h3 style={{ borderBottom: "1px solid rgb(117, 117, 117)" }}>
              EXPERIENCE & EDUCATION
            </h3>
            <ul className="timeline">{[timelineElements]}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Timeline;
