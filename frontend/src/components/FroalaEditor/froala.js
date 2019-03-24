import React from "react";
import ReactDOM from "react-dom";
import Editor from "./editor";

class Froala extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
                <a href={this.props.link}  target="_blank"><button className = "form__button" style={{color:"aqua",backgroundColor:"#000", padding:'2rem',fontSize:'1.3rem'}}>One Click Deploy <i className="fa fa-arrow-right"></i></button></a><br/><br />
         <Editor html = {this.props.html} userId = {this.props.userId} />
      </div>
    );
  }
}

export default Froala
