import React from "react";
import AboutMe from "./AboutMe/AboutMe";
// import ScrollableAnchor from "react-scrollable-anchor";
import Timeline from "./Timeline/Timeline";
import Projects from "./Projects/Projects";
import "./MainContent.css";

// import { configureAnchors } from "react-scrollable-anchor";

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
// configureAnchors({ offset: -60, scrollDuration: 400 });

// class MainContent extends Component {
//   render() {
//     const scroller = {
//       position: "fixed",
//       top: "18%",
//       right: "1rem",
//       zIndex: "2",
//       color: "purple",
//       fontFamily: "Permanent Marker",
//       fontSize: "1.6rem",
//       textDecoration: "none",
//       listStyle: "none",
//       textAlign: "right",
//       transition: ".2s",
//     };
//     return (
//       <main style={{ overflow: "hidden", position: "relative" }}>
//         <ul style={scroller} id="scroller">
//           <li>
//             <a href="#aboutMe"> {"<About />"} </a>
//           </li>
//           <li>
//             <a href="#projects"> {"<Projects />"} </a>
//           </li>
//           <li>
//             <a href="#timeline"> {"<Experience />"} </a>
//           </li>
//         </ul>
//         <ScrollableAnchor id={"aboutMe"}>
//           <AboutMe />
//         </ScrollableAnchor>
//         <ScrollableAnchor id={"projects"}>
//           <Projects />
//         </ScrollableAnchor>
//         <ScrollableAnchor id={"timeline"}>
//           <Timeline />
//         </ScrollableAnchor>
//       </main>
//     );
//   }
// }

function MainContent(props) {
  return (
    <div id="main-content">
      <div id="about-anchor" ref={props.ref}>
        <AboutMe />
      </div>

      <div id="project-anchor">
        <Projects />
      </div>

      <div id="timeline-anchor">
        <Timeline />
      </div>
    </div>
  );
}

export default MainContent;
