import { Link } from 'react-router-dom'
import Header from './Header'

import React, { Component } from 'react'

class Battle extends Component {
  state = {
    name: '',
    image: '',
    url: '',
    bio: ''
  }
  componentDidMount() {
    fetch(`https://api.github.com/users/glebfedchenko`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.login,
          image: data.avatar_url,
          url: data.url,
          bio: data.bio
        })
      })
  }

  render() {
    const { name, image, url, bio } = this.state
    return (
      <div>
        <Header />
        <div className='container text-center'>
          <div><a href={url}>@{name}</a></div>
          <img src={image} className="img-circle" alt='' />
          <p>{bio}</p>
        </div>
      </div>
    )
  }
}

export default Battle
