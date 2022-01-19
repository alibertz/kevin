import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import "../MainContent.css";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: {
        weatherApp: {
          header: "Weather App",
          image: require("../../../images/weatherapp.PNG"),
          created: "August 2019",
          description:
            "React application that consumes OpenWeatherMap API and outputs weather information based on user input.",
          technologies: ["React.JS", "Node.js", "Sass"],
          techIcons: [
            require("../../../images/react.png"),
            require("../../../images/nodejs.png"),
            require("../../../images/sass.png"),
          ],
          codeLink: "https://github.com/alibertz/weather-app",
          demoLink: "https://alibertz.github.io/weather-app/",
        },
        bostonsdeals: {
          header: "Boston's Deals",
          image: require("../../../images/bostonsdeals.PNG"),
          created: "Dec 2019 - May 2020",
          description:
            "Express server using GraphQL to query MongoDB database to serve user with food & restaurant deals based on user set criteria of location, day of week, and more.",
          technologies: ["Gatsby.js", "React.js", "GraphQL"],
          techIcons: [
            require("../../../images/gatsbyjs-icon.png"),
            require("../../../images/react.png"),
            require("../../../images/graphql.png"),
          ],
          codeLink: "https://github.com/alibertz/bostonsdeals",
          demoLink: "https://bostonsdeals.herokuapp.com/",
        },
        artSite: {
          header: "Artist Showcase Website",
          image: require("../../../images/artistwebsite.PNG"),
          created: "July 2019",
          description:
            "Single Page Application built in React.js showcasing artist's sculpture work. (Work in progress)",
          technologies: ["React.JS", "Node.js", "Sass"],
          techIcons: [
            require("../../../images/react.png"),
            require("../../../images/nodejs.png"),
            require("../../../images/sass.png"),
          ],
          codeLink: "https://github.com/alibertz/richardalibertiart",
          demoLink: "https://alibertz.github.io/richardalibertiart/",
        },
        zipcode: {
          header: "Distance Calculator",
          image: "",
          created: "February 2020",
          description:
            "Simple web application that displays distance in miles or kilometers between two user input ZIP codes. Complete with clean UI, input validation and intuitive error handling.",
          technologies: ["React.JS", "Node.js", "Sass"],
          techIcons: [
            require("../../../images/react.png"),
            require("../../../images/nodejs.png"),
            require("../../../images/sass.png"),
          ],
          codeLink: "https://github.com/alibertz/dist-between-zipcodes",
          demoLink: "https://alibertz.github.io/dist-between-zipcodes",
        },
        parsehub: {
          header: "Data Intake Script",
          image: "",
          created: "",
        },
      },
    };
  }
  render() {
    return (
      <section id="projects">
        <div className="container">
          <h3 style={{ borderBottom: "1px solid #eee", color: "#eee" }}>
            PROJECTS
          </h3>
          <div className="projects-card-container">
            <div>
              <ProjectCard project={this.state.projects.bostonsdeals} />
            </div>
            <div>
              <ProjectCard project={this.state.projects.weatherApp} />
            </div>
            <div>
              <ProjectCard project={this.state.projects.zipcode} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
