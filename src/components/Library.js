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
                        <div id='album-square' className='pt-3 mt-5 col-sm-12 col-md-5'>
                            <Link to={`/album/${album.slug}`} key={index}>
                                <img className='img-fluid' src={album.albumCover} alt={album.title} />
                                <div>{album.title}</div>
                                <div>{album.artist}</div>
                                <div>{album.songs.length} songs</div>
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default Library;