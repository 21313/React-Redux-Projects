import React from 'react';
import {connect} from 'react-redux';// connect ek function hai

function mapStateToProps(state){// yahan store ki state arhi hai
  return {
    counter : state
  };
}
class App extends React.Component{
  render(){
    return(
      <div>
        App {this.props.counter}
      </div>
    )
  }
}

//Here connect higher order function
export default connect(mapStateToProps)(App);// idhr mapstatetoprops return kr rha hai object then wo object ko app component ki property bnaa rha hai by using connect

// var func = connct(mapStateToProps);
// var newApp = func(App);
// export default newApp;
