import React, {Component} from 'react';
import Title from './title';
const tweet = require('./tweet');

class CardRight extends Component {

  render() {
    return (
      <div className="col-right">
        <div className="app-meta">
           <Title name={this.props.name} publisher={this.props.app.publisher}/>
           <span className="app-lic">{this.props.app.price}</span>
        </div>
        <div className="app-intro" dangerouslySetInnerHTML={{__html: this.props.app.desc}} />
        <hr />
      </div>
    );
  }

}


export default CardRight;
