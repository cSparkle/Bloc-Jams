import React from 'react';

class Landing extends React.Component {
    render() {


        return (
            <section className='Landing'>
                <section className='container'>
                    <div className='row mt-5'>
                        <h1 className='col-12 col-md-8 col-lg-6 col-xl-4'>Turn the music up!</h1>
                    </div>
                    <div className='row m-5'>
                        <div className='col-12 col-md-7 col-lg-5 col-xl-3'>
                            <h2 className='point-title'>Choose your music</h2>
                            <p className='point-description'>The world is full of music; why should you have to listen to music that someone else chose?</p>
                        </div>
                    </div>
                    <div className='row m-5'>
                        <div className='col-12 col-md-7 col-lg-5 col-xl-3'>
                            <h2 className='point-title'>Unlimited, streaming, ad-free</h2>
                            <p className='point-description'>No arbitrary limits. No distractions</p>
                        </div>
                    </div>
                    <div className='row m-5'>
                        <div className='col-12 col-md-7 col-lg-5 col-xl-3'>
                            <h2 className='point-title'>Mobile enabled</h2>
                            <p className='point-description'>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
                        </div>
                    </div>
                </section>

            </section>
        );
    }
}

export default Landing;