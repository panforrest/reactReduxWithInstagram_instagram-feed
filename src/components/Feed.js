// className="form-control"
import React, { Component } from 'react'

class Feed extends Component {
  constructor(){
    super()
    this.state = {
      username:''
    }
  }

  updateUsername(field, event){
    console.log(field + ' == ' +event.target.value)
    let updatedUsername = Object.assign({}, this.state.username)
    updatedUsername['username'] = event.target.value
    this.setState({
      username: updatedUsername
    })
  }

  fetchPhotos(){
  	console.log('fetchPhoto for user: ' + JSON.stringify(this.state.username))

  }

  render(){
  	return(
      <div>
        <input onChange={this.updateUsername.bind(this, 'username')} type="text" placeholder="Instagram Username" /><br/>
        <button onClick={this.fetchPhotos.bind(this)}>Show Photos</button>
      </div>
  	)
  }
}

export default Feed