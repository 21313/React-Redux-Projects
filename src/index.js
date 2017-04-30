// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


function counter(state=0,action){//Reducer
  switch(action.type){  
      case 'INCREMENT':
      return state + 1
      case 'DECREMENT':
      return state - 1
      default:
      return state
  }
}
let store = createStore(counter);//store

store.subscribe(()=>{
  console.log(store.getState());
});

// store.dispatch({type : 'INCREMENT'})//actions onward
// //1
// store.dispatch({type : 'INCREMENT'})
// //2
// store.dispatch({type : 'DECREMENT'})
// //1

function handleIncrement(){
  store.dispatch({type:'INCREMENT'});
}
ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <div>
        <button onClick={()=>store.dispatch({type:'INCREMENT'})}>INCREMENT</button>
        <button onClick={()=>store.dispatch({type:'DECREMENT'})}>DECREMENT</button>
        <button onClick={handleIncrement}>INCREMENT with Handler</button>
      </div>
    </div>
  </Provider>,
  document.getElementById("root")
);