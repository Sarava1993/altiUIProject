import React from 'react';
import { CONSTANTS } from '../utils/constants';
import '../App.css';

class Header extends React.Component {
  render() {
    return (
        <header className="customHeader">
          <div className="customLogo">{CONSTANTS.TITLE}</div>
          <div className="appTitle">
              {
                CONSTANTS.HEADER.map((header, i) => {
                  return <div key={i} className="customHeadingTitle">{header.name}</div>
                })
              }
          </div>
        </header>
    );
  }
}

export default Header;
