import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
    constructor(props) {
        super(props);

        const album = albumData.find( album => {
            return album.slug === this.props.match.params.slug
        });

        this.state = {
            album: album,
            currentSong: album.songs[0],
            currentTime: 0,
            duration: album.songs[0].duration,
            isPlaying: false,
            hoveredSong: null,
            volume: .80
        };

        this.audioElement = document.createElement('audio');
        this.audioElement.src = album.songs[0].audioSrc;
    }

    componentDidMount() {
        this.eventListeners = {
            timeupdate: e => {
                this.setState({
                    currentTime: this.audioElement.currentTime
                });
            },
            durationchange: e => {
                this.setState({
                    duration: this.audioElement.duration
                });
            },
            volumechange: e => {
                this.setState({
                    volume: this.audioElement.volume
                });
            }
        };
        this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
        this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
        this.audioElement.addEventListener('volumechange', this.eventListeners.volumechange);
    }

    componentWillUnmount() {
        this.audioElement.src = null;
        this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
        this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
        this.audioElement.removeEventListener('volumechange', this.eventListeners.volumechange);
    }

    play() {
        this.audioElement.play();
        this.setState({
            isPlaying: true
        });
    }

    pause() {
        this.audioElement.pause();
        this.setState({
            isPlaying: false
        });
    }

    setSong(song) {
        this.audioElement.src = song.audioSrc;
        this.setState({
            currentSong: song
        });
    }

    handleSongClick(song) {
        const isSameSong = this.state.currentSong === song;
        if (this.state.isPlaying && isSameSong) {
            this.pause();
        } else {
            if (!isSameSong) { this.setSong(song); }
            this.play();
        }
    }

    handleMouseEnter(song) {
        this.setState({
            hoveredSong: song
        }); 
    }

    handleMouseLeave(song) {
        this.setState({
            hoveredSong: song
        });
    }

    determineIcon(song, index) {
        if (!this.state.isPlaying && song === this.state.hoveredSong) {
            return <span className='ion-md-play'></span>
        } else if (this.state.isPlaying && song === this.state.hoveredSong && song === this.state.currentSong) {
            return <span className='ion-md-pause'></span>
        } else {
            return <span className='ion-md-code'></span>
        }
    }

    handlePrevClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const newIndex = Math.max(0, currentIndex - 1);
        const newSong = this.state.album.songs[newIndex];
        this.setSong(newSong);
        this.play();
    }

    handleNextClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const newIndex = Math.min(this.state.album.songs.length -1, currentIndex + 1);
        const newSong = this.state.album.songs[newIndex];
        this.setSong(newSong);
        this.play();
    }

    handleTimeChange(e) {
        const newTime = this.audioElement.duration * e.target.value;
        this.audioElement.currentTime = newTime;
        this.setState({
            currentTime: newTime
        });
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60);
        var seconds = time - minutes * 60;
        seconds = seconds.toFixed(0);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        var formattedTime = `${minutes}:${seconds}`;
        if (isNaN(time)) {
            formattedTime = '-:--';
        }
        return formattedTime;
    }

    handleVolumeChange(e) {
        const newVolume = e.target.value;
        this.audioElement.volume = newVolume;
        this.setState({
            volume: newVolume
        });
    }

    render() {
        return (
            <div className='container-fluid'>
                <section className='card-deck pt-5'>
                    <div className='card border-0 pt-5'>
                        <img className='img-thumbnail' src={this.state.album.albumCover} alt={this.state.album.title} />
                    </div>
                    <div className='card border-0 pt-5'>
                        <h1 className='card-title'>{this.state.album.title}</h1>
                        <h2 className='card-subtitle'>{this.state.album.artist}</h2>
                        <p className='card-text'>{this.state.album.releaseInfo}</p>
                        <table className='table table-hover'>
                            <tbody>
                                {this.state.album.songs.map( (song, index) => 
                                    <tr key={index} onClick={ () => this.handleSongClick(song) } onMouseEnter={ () => this.handleMouseEnter(song) } onMouseLeave={ () => this.handleMouseLeave(song)} >
                                        <td>{this.determineIcon(song, index)}</td>
                                        <td>{song.title}</td>
                                        <td>{this.formatTime(song.duration)}</td>
                                    </tr>
                                )}       
                            </tbody>
                        </table>
                        <PlayerBar 
                            isPlaying={this.state.isPlaying}
                            currentSong={this.state.currentSong}
                            currentTime={this.state.currentTime}
                            duration={this.audioElement.duration}
                            handleSongClick={ () => this.handleSongClick(this.state.currentSong)}
                            handlePrevClick={ () => this.handlePrevClick()}
                            handleNextClick={ () => this.handleNextClick()}
                            handleTimeChange={ (e) => this.handleTimeChange(e)}
                            formatTime={ (time) => this.formatTime(time)}
                            handleVolumeChange={ (e) => this.handleVolumeChange(e)}
                            volume={this.state.volume}
                        />
                    </div>
                </section>
            </div>
        );
    }
}

export default Album;