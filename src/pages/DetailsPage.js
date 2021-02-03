import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "parts/Header";
import Breadcrumb from "elements/Breadcrumb";
import FeaturedImage from "parts/FeaturedImage";
import BookingForm from "parts/BookingForm";
import PageDetailsDescription from "parts/PageDetailsDescription";
import Testimony from "parts/Testimony";
import ListMenu from "parts/ListMenu";
import Footer from "parts/Footer";

import ItemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Warpindo | Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Warpindo Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <Breadcrumb data={breadcrumb} />
        <div className="grid grid-cols-12">
          <FeaturedImage data={ItemDetails.imageUrls} />
          <BookingForm itemDetails={ItemDetails} />
        </div>
        <section>
          <PageDetailsDescription data={ItemDetails} />
        </section>
        <div className="pt-10 pb-8">
          <Testimony isLandingPage={false} data={ItemDetails.testimonial} />
        </div>
        <section className="bg-red-100 pt-12">
          <ListMenu isLandingPage={false} data={ItemDetails.categories} />
        </section>
        <Footer />
      </>
    );
  }
}
