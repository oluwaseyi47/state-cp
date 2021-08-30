import React, { Component } from 'react'
import image from './WhatsApp Image 2021-05-31 at 10.51.18 (1).jpeg'

export class App extends Component {
  state={
    fullName: 'Kayode Oluwaseyi',
    bio: 'Tech Enthusiast',
    image: image,
    Proffesion: 'Software Developer',
    boolShow: true,
    timeInterval: 0,
  }

  handleBoolShow = () => {
    this.setState ({
      boolShow: !this.state.boolShow
    })
  } 


  componentDidMount(){
    setInterval(() => this.setState({timeInterval:this.state.timeInterval +1}), 2000)
  }
  render() {
    return (
      <div className='App'>
      {this.state.boolShow && (
        <div> 
        <h1>FullName:{this.state.fullName}</h1>
        <h1>bio:{this.state.bio}</h1>
        <img src={this.state.image} width='300px' />
        <h1>Proffesion:{this.state.Proffesion}</h1>
        </div>
      )}
      <button onClick={this.handleBoolShow}>Click ME</button>

      <p>
        {this.state.timeInterval}
      </p>

      </div>
    )
  }
}

export default App
