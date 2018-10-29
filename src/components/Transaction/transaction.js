import React, { Component } from 'react';

class Transaction extends Component {

  constructor(props) {
   super(props);

   this.state = {
     blocks: [],
     show: false
   };
 }

 toggleDiv = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    }

 componentDidMount() {

   fetch('https://blockchain.info/rawtx/b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da')
   .then(function(response) {
      return response.json();
    })
    .then( (response) => {
      //console.log(parsedData);
      this.setState({blocks: response});
      console.log("state", this.state.blocks)
    })
    .catch(error => console.log(error))


 }

  render() {

    return (


      <div className="container">
      <div>
  <p><button className="btn bg-primary btn-round text-light btn-lg btn-rised" onClick={ this.toggleDiv }>View a Single Transaction</button></p>
  { this.state.show && <div className="division">

  <p>
  <span className="spans">Ver: </span>
  <span className="valuespan">{this.state.blocks.ver}</span></p>
  <p>
  <span className="spans">Weight: </span>
  <span className="valuespan">{this.state.blocks.weight}</span></p>
  <p>
  <span className="spans">Block Height: </span>
  <span className="valuespan">{this.state.blocks.block_height}</span></p>
  <p>
  <span className="spans">Relayed By: </span>
  <span className="valuespan">{this.state.blocks.relayed_by}</span></p>
  <p>
  <span className="spans">Lock Time: </span>
  <span className="valuespan">{this.state.blocks.lock_time}</span></p>
  <p>
  <span className="spans">Size: </span>
  <span className="valuespan">{this.state.blocks.size}</span></p>


  </div> }
  </div>

</div>
    )
  }
}

export default Transaction;
