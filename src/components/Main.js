import React, { Component } from 'react'
import BuyForm from './BuyForm'
// import SellForm from './SellForm'

class Main extends Component {
  render() {
    return (
      <div id="content" className="mt-3">
<br /><br /><br />
        <div className="card mb-4" >

          <div className="card-body" style={{ backgroundColor: '#fecc02' }}>

            <BuyForm
              ethBalance={this.props.ethBalance}
              tokenBalance={this.props.tokenBalance}
              buyTokens={this.props.buyTokens}
            />

          </div>

        </div>

      </div>
    );
  }
}

export default Main;
