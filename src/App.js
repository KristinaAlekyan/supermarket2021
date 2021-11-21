import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends  React.Component {
  constructor(props) {
    super(props);
      this.state = {
    };
  }
  render(){  
    return (
        <div >
          <Header/> 
          <Main/>
        </div>
    );
  }
}

export default App;
