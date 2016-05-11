// Import React
import React from 'react';

// Import ClassNames
import ClassNames from 'classnames';

// Player component class
class Player extends React.Component {

  togglePlay(){
    // Check current playing state
    if(this.state.playStatus === Sound.status.PLAYING){
      // Pause if playing
      this.setState({playStatus: Sound.status.PAUSED})
    } else {
      // Resume if paused
      this.setState({playStatus: Sound.status.PLAYING})
    }
  }

  stop(){
    // Stop sound
   this.setState({playStatus: Sound.status.STOPPED});
  }

  forward(){
    this.setState({playFromPosition: this.state.playFromPosition+=1000*10});
  }

  backward(){
    this.setState({playFromPosition: this.state.playFromPosition-=1000*10});
  }

  render(){
    // Dynamic class names with ClassNames
    const playPauseClass = ClassNames({
      'fa fa-play': this.props.playStatus == 'PLAYING' ? false : true,
      'fa fa-pause': this.props.playStatus == 'PLAYING' ? true : false
    });

    // Return JSX
    return(
      <div className="player">
        {/*Rewind Button*/}
        <div className="player__backward">
          <button onClick={this.props.backward}><i className="fa fa-backward"></i></button>
        </div>
        <div className="player__main">
          {/*Play/Pause Button*/}
          <button onClick={this.props.togglePlay}><i className={playPauseClass}></i></button>
          {/*Stop Button*/}
          <button onClick={this.props.stop}><i className="fa fa-stop"></i></button>
          {/*Random Track Button*/}
          <button onClick={this.props.random}><i className="fa fa-random"></i></button>
        </div>
        {/*Forward Button*/}
        <div className="player__forward">
          <button onClick={this.props.forward}><i className="fa fa-forward"></i></button>
        </div>
      </div>
    )
  }

}

// Export Player
export default Player