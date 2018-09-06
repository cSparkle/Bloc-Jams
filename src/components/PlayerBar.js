import React, { Component } from 'react';

class PlayerBar extends Component {
    render() {
        return (
            <section className='container'>
                <section className='row justify-content-center my-3'>
                    <button className='btn btn-outline-dark border-0' onClick={this.props.handlePrevClick} >
                        <span className='ion-md-skip-backward'></span> 
                    </button>
                    <button className='btn btn-outline-dark rounded-circle' onClick={this.props.handleSongClick} >
                        <span className={this.props.isPlaying ? 'ion-md-pause' : 'ion-md-play'}></span>
                    </button>
                    <button className='btn btn-outline-dark border-0' onClick={this.props.handleNextClick}>
                        <span className='ion-md-skip-forward'></span>
                    </button>
                </section>
                <section className='container'>
                    <div className='row justify-content-around'>
                        <div className='current-time'>{this.props.formatTime(this.props.currentTime)}</div>                   
                        <input 
                            type="range" 
                            className='form-control-range col-8' 
                            value={(this.props.currentTime / this.props.duration) || 0}
                            max='1'
                            min='0'
                            step='0.01'
                            onChange={this.props.handleTimeChange}
                        />
                        <div className='total-time'>{this.props.formatTime(this.props.duration)}</div>
                    </div>
                </section>
                <section className='container'>
                    <div className='row justify-content-around'>
                        <div className='ion-md-volume-low'></div>                      
                        <input 
                            type="range" 
                            className='form-control-range col-9' 
                            value={this.props.volume}
                            max='1'
                            min='0'
                            step='0.01' 
                            onChange={this.props.handleVolumeChange}
                        />
                        <div className='ion-md-volume-high'></div>
                    </div>
                </section>
                
            </section>
        );
    }
}

export default PlayerBar;