import React, { Component } from "react";

import Header from "parts/Header";
import Button from "elements/Button";
import Stepper, { Meta, MainContent, Controller } from "elements/Stepper";

import BookingInformation from "parts/Checkout/BookingInformation";
import Completed from "parts/Checkout/Completed";
import Payment from "parts/Checkout/Payment";
import Footer from "parts/Footer";

import ItemDetails from "json/itemDetails.json";

export default class CheckoutPage extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { data } = this.state;
    const checkout = {
      duration: 3,
    };

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blanks fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instruction below",
        content: (
          <Payment
            data={data}
            ItemDetails={ItemDetails}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };

    return (
      <>
        <Header isCheckout {...this.props} />
        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />
              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Button
                        className="btn btn-fill mb-3 text-center"
                        type="button"
                        isBlock
                        isPrimary
                        hasShadow
                        onClick={nextStep}
                      >
                        Continue To Book
                      </Button>
                    )}
                  <Button
                    className="btn btn-outline btn-outline-gray text-center"
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${ItemDetails._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" && (
                      <Button
                        className="btn btn-fill mb-3 text-center"
                        type="button"
                        isBlock
                        isPrimary
                        hasShadow
                        onClick={nextStep}
                      >
                        Continue To Book
                      </Button>
                    )}
                  <Button
                    className="btn btn-outline btn-outline-gray text-center"
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${ItemDetails._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn btn-outline btn-outline-gray text-center"
                    type="link"
                    isBlock
                    isLight
                    href=""
                  >
                    Back To Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>

        <Footer isCheckout />
      </>
    );
  }
}
