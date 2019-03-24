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
          <a href= {this.props.link}>One Click Deploy</a>
         <Editor html = {this.props.html} userId = {this.props.userId} />
      </div>
    );
  }
}

export default Froala
