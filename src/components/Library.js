import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: albumData
        };
    }
    
    render() {
        return (
            <section className='card-deck justify-content-around pt-5'>
                    {this.state.albums.map( (album, index) => 
                        <Link className='nav-link' to={`/album/${album.slug}`} key={index}>
                            <div className='card border-0 shadow mt-5'>
                                <img className='mt-0 pt-0' src={album.albumCover} alt={album.title} />
                                <div className='card-body'>
                                    <h2 className='card-title'>{album.title}</h2>
                                    <p className='card-subtitle'>{album.artist}</p>
                                    <p className='card-text'>{album.songs.length} songs</p>
                                </div>   
                            </div>
                        </Link>
                    )}
            </section>
        );
    }
}

export default Library;