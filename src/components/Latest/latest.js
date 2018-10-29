import React, { Component } from 'react';


class Latest extends Component{

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

  fetch('https://blockchain.info/latestblock')
  .then(response =>  {
     return response.json();
   })
   .then(response => {
     //console.log(response);
     this.setState({blocks: response});
     console.log("state", this.state.blocks)
   })
   .catch(error => console.log(error))


}

  render() {

    //const { blocks } = this.state;

    return (


      <div className="container">
      <div>
  <p><button className="btn bg-primary btn-round text-light btn-lg btn-rised" onClick={ this.toggleDiv }>View Latest Transaction</button></p>
     { this.state.show &&
       <div className="division">

       <p>
       <span className="spans">Time: </span>
       <span className="valuespan">{this.state.blocks.time}</span></p>
       <p>
       <span className="spans">Block_Index: </span>
       <span className="valuespan">{this.state.blocks.block_index}</span></p>
       <p>
       <span className="spans">Height: </span>
       <span className="valuespan">{this.state.blocks.height}</span></p>




     </div> }

     <div>

    </div>
    </div>


</div>
    )
  }
}



export default Latest;
