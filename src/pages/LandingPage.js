import React from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import ChooseMenu from "parts/ChooseMenu";
import ListMenu from "parts/ListMenu";
import VinylMenu from "parts/VinylMenu";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import landingPage from "json/landingPage.json";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.refChooseMenu = React.createRef();
  }

  componentDidMount() {
    window.title = "Warpindo | Home";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPage.hero} />
        <ChooseMenu data={landingPage.chooseMenu} />

        <div className="py-20 bg-red-100">
          <ListMenu isLandingPage={true} data={landingPage.categories} />
        </div>

        <VinylMenu data={landingPage.vinyl} />

        <div className="py-20 bg-red-100">
          <Testimony isLandingPage={true} data={landingPage.testimonial} />
        </div>
        <Footer />
      </>
    );
  }
}
