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
            <section className='container'>
                <div className='row pt-5 justify-content-around'>
                    {this.state.albums.map( (album, index) => 
                        <div id='album-square' className='p-0 mt-5 col-sm-12 col-md-5'>
                            <Link className='nav-link' to={`/album/${album.slug}`} key={index}>
                                <img className='img-fluid' src={album.albumCover} alt={album.title} />
                                <h2>{album.title}</h2>
                                <h3>{album.artist}</h3>
                                <h4>{album.songs.length} songs</h4>
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default Library;