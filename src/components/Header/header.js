import React, { Component } from 'react';
import Logoimg from "./Chainyard.JPG";
import Block from '../Block/block';
import Transaction from '../Transaction/transaction';
import Latest from '../Latest/latest';


class Header extends Component {

  render() {

    return (


      <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-dark" id="stylePage">

     <div className="container-fluid">
        <div className="row  justify-content-center align-items-center d-flex text-center h-100">
          <div className="col-12 col-md-8  h-50 ">
              <h1 className="display-2  text-light mb-2 mt-5"><strong>Blockchain Application</strong> </h1>
              <p className="lead  text-light mb-5">Web app that allows a user to browse block & transaction data from the Blockchain.org blockchain</p>
  <p><a href="https://www.blockchain.com/api/blockchain_api" className="btn bg-primary btn-round text-light btn-lg btn-rised">Find API information</a></p>



          </div>

        </div>
      </div>

      <Block />
      <Transaction />
      <Latest />




      </section>



    )
  }
}

export default Header;
