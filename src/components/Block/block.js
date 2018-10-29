import React, { Component } from 'react';

class Block extends Component{

  constructor(props) {
   super(props);

   this.state = {
     block: [],
     show: false
   };
   //this.block = this.block.bind(this);
 }

 toggleDiv = () => {
        const { show } = this.state;
        this.setState( { show : !show } )
    }


 componentDidMount() {

   fetch('https://blockchain.info/rawblock/0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103')
   .then(function(response) {
      return response.json();
    })
    .then( (response) => {
      //console.log(parsedData);
      this.setState({block: response});
      console.log("state", this.state.block)
    })
    .catch(error => console.log(error))

 }


  render() {

    return (


      <div className="container">
      <div>
      <p><button className="btn bg-primary btn-round text-light btn-lg btn-rised" onClick={ this.toggleDiv }>View a Single Block</button></p>
      { this.state.show && <div className="division">

      <p>
      <span className="spans">Ver: </span>
      <span className="valuespan">{this.state.block.ver}</span></p>
      <p>
      <span className="spans">Time: </span>
      <span className="valuespan">{this.state.block.time}</span></p>
      <p>
      <span className="spans">Bits: </span>
      <span className="valuespan">{this.state.block.bits}</span></p>
      <p>
      <span className="spans">Fee: </span>
      <span className="valuespan">{this.state.block.fee}</span></p>
      <p>
      <span className="spans">Nonce: </span>
      <span className="valuespan">{this.state.block.nonce}</span></p>
      <p>
      <span className="spans">Size: </span>
      <span className="valuespan">{this.state.block.size}</span></p>



      </div> }
      </div>
</div>
    )
  }
}

export default Block;
