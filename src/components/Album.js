import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
    constructor(props) {
        super(props);

        const album = albumData.find( album => {
            return album.slug === this.props.match.params.slug
        });

        this.state = {
            album: album,
            currentSong: album.songs[0],
            isPlaying: false,
            hoveredSong: null,
            icon: null
        };

        this.audioElement = document.createElement('audio');
        this.audioElement.src = album.songs[0].audioSrc;
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
        console.log('displayed after onMouseEnter. Hovered song is ' + this.state.hoveredSong);
        this.determineIcon();
    }

    handleMouseLeave(song) {
        this.setState({
            hoveredSong: song
        });
        console.log('displayed after onMouseLeave. Hovered song is ' + this.state.hoveredSong);
    }

    determineIcon() {
        if (!this.state.isPlaying) {
            this.setState({
                icon: 'ion-md-play-circle'
            });
        }
    }


   
     
    render() {
        return (
            <section className='album'>
                <section id='album-info'>
                    <img id='album-cover-art' src={this.state.album.albumCover} alt={this.state.album.title} />
                    <div className='album-details'>
                        <h1 id='album-title'>{this.state.album.title}</h1>
                        <h2 className='artist'>{this.state.album.artist}</h2>
                        <div id='release-info'>{this.state.album.releaseInfo}</div>
                    </div>
                </section>
                <table id='song-list'>
                    <colgroup>
                        <col id='song-number-column' />
                        <col id='song-title-column' />
                        <col id='song-duration-column' />
                    </colgroup>
                    <tbody>
                        {this.state.album.songs.map( (song, index) => 
                            <tr className='song' key={index} onClick={ () => this.handleSongClick(song) } onMouseEnter={ () => this.handleMouseEnter(song) } onMouseLeave={ () => this.handleMouseLeave(song)} >
                                <td><span className={this.state.icon}></span></td>
                                <td>{song.title}</td>
                                <td>{song.duration} seconds</td>
                            </tr>
                        )}       
                    </tbody>
                </table>
            </section>
        );
    }
}

export default Album;

//Advice from John Frecko
//Take song being passed in and set it to hoveredSong variable. You do not want to do the rendering of the element in those functions, though. 
//You want there it me a separate function that determines what to display and take into account the hoveredSong, the currentSong, and the song being rendered