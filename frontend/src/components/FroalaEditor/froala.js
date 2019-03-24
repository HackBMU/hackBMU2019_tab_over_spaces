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
         <Editor html = {this.props.html}  />
      
      </div>
    );
  }
}

export default Froala
