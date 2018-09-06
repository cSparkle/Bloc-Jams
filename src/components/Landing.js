import React from 'react';

class Landing extends React.Component {
    render() {
        return (
            <section className='Landing'>
                <section className='container text-center pt-5'>
                    <div className='col-12 col-md-7 col-lg-5 col-xl-3'>
                        <h1 className='pt-5'>Turn the music up!</h1>
                    </div>
                    <div className='row m-2'>
                        <div className='col-12 col-md-7 col-lg-5 col-xl-3'>
                            <h2>Choose your music</h2>
                            <p>The world is full of music; why should you have to listen to music that someone else chose?</p>
                        </div>
                    </div>
                    <div className='row m-2'>
                        <div className='col-12 col-md-7 col-lg-5 col-xl-3'>
                            <h2>Unlimited, streaming, ad-free</h2>
                            <p>No arbitrary limits. No distractions</p>
                        </div>
                    </div>
                    <div className='row m-2'>
                        <div className='col-12 col-md-7 col-lg-5 col-xl-3'>
                            <h2>Mobile enabled</h2>
                            <p>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
                        </div>
                    </div>
                </section>
                
            </section>
        );
    }
}

export default Landing;