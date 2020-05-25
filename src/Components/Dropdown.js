import React from 'react';
import '../App.css';

class Dropdown extends React.Component {
  render() {
    return (
        <div className="cardDetailsConfirm row">
            <div className="col-sm-12 label">{this.props.label}<span>{" *"}</span></div>
            <div className="col-sm-12">
                <select name="country" id="country" className="customDropdown" 
                    value={this.props.selectedCountry}
                    onChange={(e) => this.props.handleCountryChange(e.target.value)}>
                    <option value="Select a Country">Select a Country</option>
                    {
                        this.props.countries.map((d, i) => {
                         return <option key={i} value={d.name}>{d.name}</option>        
                        })
                    }
                </select>
            </div>
        </div>
    );
  }
}

export default Dropdown;
