import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import React from "react";
import LocomotiveScroll from "locomotive-scroll";

class App extends React.Component {
  componentDidMount() {
    new LocomotiveScroll({
      el: document.querySelector(".App"),
      smooth: true,
    });
  }

  render() {
    return (
      <div className="App">
        <div data-scroll-section>
          <div data-scroll data-scroll-speed="2">
            <Header />
          </div>

          <div data-scroll data-scroll-speed="-2">
            <div id="bg-sq1" />
          </div>
          <div data-scroll data-scroll-speed="-4">
            <div id="bg-sq2" />
          </div>

          <div data-scroll data-scroll-speed="1">
            <MainContent ref={this.ref} />
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
