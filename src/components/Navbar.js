import React, { Component } from 'react'
// import FairTraderLogo from '../img/favicon.png'
import './Navbar.css'
import Identicon from 'identicon.js';

class Navbar extends Component {

  render() {
    return (
      <nav>
        <div className="row NavbarRow">
          <div className="col-4">
            <button className="fairTraderExchangeTxt">FairTrader</button>
            {/* <img src={FairTraderLogo} alt="FairTraderLogo" className="FairTraderLogo" /> */}
          </div>
          <div className="col-4" className="fairTraderExchangeDiv">
            <button className="fairTraderExchangeTxt">Exchange</button>
            {/* <button className="fairTraderExchangeTxt">Website</button> */}
          </div>
          <div className="col-4 navbarLastDiv">{ this.props.account
              ? <img
                className="ml-2"
                width='40'
                height='40' style={{float: 'right'}}
                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                alt=""
              />
              : <span></span>
            }
            <button className="navbarBtns" style={{float: 'right'}}>{this.props.accountFormated}</button>
            <button className="navbarBtns" style={{float: 'right'}}>{this.props.EtherAmountAccount + ' '  + 'Ether'}</button>
            
          </div>
        </div>
      </nav>
      // <nav className="navbar fixed-top flex-md-nowrap p-0 shadow"  style={{backgroundColor: 'black'}}>
      //   <a
      //     className="navbar-brand col-sm-3 col-md-2 mr-0"
      //     href="https://www.fairtradingpost.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Fair Trader
      //   </a>

      //   <ul className="navbar-nav px-3">
      //     <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
      //       <small className="text-secondary">
      //         <small id="account">{this.props.account}</small>
      //       </small>

      //       { this.props.account
      //         ? <img
      //           className="ml-2"
      //           width='30'
      //           height='30'
      //           src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
      //           alt=""
      //         />
      //         : <span></span>
      //       }

      //     </li>
      //   </ul>
      // </nav>
    );
  }
}

export default Navbar;
