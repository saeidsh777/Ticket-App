import React from "react";
import "./Ticket.css";

export default class Ticket extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countriesData: {
        "-1": ["Please Select City"],
        Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
        Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
        US: ["Los Angles", "San Diego", "Chicago"],
      },
      mainCountryCities: [],
    };
  }

  selectCountry(e) {
    let inputValue = e.target.value;
    let objSelect = this.state.countriesData[inputValue];
    this.setState({ mainCountryCities: objSelect });
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-6 box">
          <input className="fnameInput" placeholder="First Name" />
        </div>

        <div className="col-md-6 box">
          <input className="lnameInput" placeholder="Last Name" />
        </div>
        <div className="col-md-6 box">
          <input className="phoneInput" placeholder="Phone Number" />
        </div>
        <div className="col-md-6 box">
          <input className="emailInput" placeholder="Email" />
        </div>
        <div className="col-md-6 box">
          <select
            className="countrySelect"
            onChange={(e) => this.selectCountry(e)}
          >
            <option value="-1">Please Select ...</option>
            <option className="option" value="Iran">
              Iran
            </option>
            <option className="option" value="Turkey">
              Turkey
            </option>
            <option className="option" value="US">
              United State
            </option>
          </select>
        </div>
        <div className="col-md-6 box">
          <select className="citySelect">
            {this.state.mainCountryCities.length > 0 ? (
              this.state.mainCountryCities.map((city) => (
                <option value={city}>{city}</option>
              ))
            ) : (
              <option value="-1">Please Select City</option>
            )}
          </select>
        </div>
        <div className="col-md-12 box">
          <button className="btn">Book a ticket</button>
        </div>
      </div>
    );
  }
}
