import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import propTypes from "prop-types";

import Button from "elements/Button";
import { InputNumber, InputDate } from "elements/Form";

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();

      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );

      this.setState({
        ...this.setState,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;

    return (
      <>
        <div className="pl-10 pr-20 py-6 col-span-6 border-b">
          <h5 className="text-gray-600">Minuman</h5>

          <h3 className="py-2 text-gray-800 text-3xl font-medium tracking-wider">
            <Button type="link" href="">
              Paket Kopi Susu, All Included Diskon 50%
            </Button>
          </h3>

          <p className="text-2xl text-red-600 font-medium">
            Rp. {itemDetails.price},-
          </p>

          <div className="py-3 grid grid-cols-6 gap-x-8">
            <div className="col-span-3">
              <label
                htmlFor="date"
                className="text-sm tracking-wider uppercase"
              >
                Tanggal Pemesanan :
              </label>
              <InputDate
                onChange={this.updateData}
                name="date"
                value={data.date}
              />
            </div>
            <div className="col-span-3">
              <label
                htmlFor="duration"
                className="text-sm tracking-wider uppercase"
              >
                Lama Sewa :
              </label>
              <InputNumber
                onChange={this.updateData}
                name="duration"
                suffix=" Malam"
                max={30}
                value={data.duration}
              />
            </div>
          </div>
          <Button
            className="btn btn-fill block text-center"
            type="link"
            href="/checkout"
            onClick={startBooking}
          >
            Tambah Ke Keranjang
          </Button>
          <h6 className="mt-4 text-md text-red-600 font-medium">
            <span className="text-gray-600 text-sm font-light">
              Anda akan membayar{" "}
            </span>
            Rp. {itemDetails.price * data.duration} ,-
            <span className="text-gray-600 text-sm font-light">
              {" "}
              per {itemDetails.unit}
            </span>
          </h6>
        </div>
      </>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

export default withRouter(BookingForm);
