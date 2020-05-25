import React from 'react';
import '../App.css';

class Radio extends React.Component {
  render() {
    return (
        <div className="cardDetailsConfirm row">
            <div className="col-sm-12 label">{this.props.label}<span>{" *"}</span></div>
            <div className="col-sm-12 customRadio">
                {
                    this.props.data.map((d, i) => 
                        <>
                            <input 
                                type="radio" 
                                id={d.name} 
                                key={i}
                                name="gender" 
                                value={d.name} 
                                className="alignRadioBtn"
                                checked={this.props.chkVal === d.name}
                                onChange={(e) => this.props.handleGenderChange(e.target.value)}/>
                            <label>{d.name}</label>
                        </>
                    )
                }
            </div>
        </div>
    );
  }
}

export default Radio;
