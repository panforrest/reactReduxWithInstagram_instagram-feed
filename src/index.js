import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Feed } from './components'

class App extends Component {
  render(){
  	return(
  	  <div>
  	    <Feed />
  	  </div>
  	)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))