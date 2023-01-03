import React from 'react'

function Cardsection() {
    return (
        <>
            <div className='container main-cardsection'>
                <div className='row'>
                    {/* <div className='card-section'> */}
                    <div className='col-lg-3 col-md-12 col-sm-12 card-space' >
                        <div className='card-body'>
                            <div className='card-inner'>
                                <h1 className='c-h1'>14+</h1>
                                <img src='/images/counter-img-1.png' className='c-img' />
                                <h5 className='c-h5'>Year Of Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 card-space'>
                        <div className='card-body'>
                            <div className='card-inner'>
                                <h1 className='c-h1'>68+</h1>
                                <img src='/images/counter-img-2.png' className='c-img' />
                                <h5 className='c-h5'>Project per month</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 card-space'>
                        <div className='card-body'>
                            <div className='card-inner'>
                                <h1 className='c-h1'>23K+</h1>
                                <img src='/images/counter-img-3.png' className='c-img' />
                                <h5 className='c-h5'>Product per month</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-12 col-sm-12 card-space'>
                        <div className='card-body'>
                            <div className='card-inner'>
                                <h1 className='c-h1'>100+</h1>
                                <img src='/images/counter-img-4.png' className='c-img' />
                                <h5 className='c-h5'>Happy cilent</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default Cardsection