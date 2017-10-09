import React from 'react'
import { Link } from "react-router-dom";
import Map from './Map'
import AutoCompleteForm from './AutoCompleteForm'

export default class Home extends React.Component {


  render() {
    return(
      <div id="home">
        <div className="enter-site">
          <div className="enter-site-inner">
            <AutoCompleteForm />
          </div>
        </div>
      </div>
    )
  }

}
