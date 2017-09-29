// className="form-control"
import React, { Component } from 'react'

class Feed extends Component {
  render(){
  	return(
      <div>
        <input  type="text" placeholder="Instagram Username" /><br/>
        <button>Show Photos</button>
      </div>
  	)
  }
}

export default Feed