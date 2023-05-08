import React from 'react'

const HowTo = () => {
    return (
        <>
            <div className="row mt-5 justify-content-center mb-5 text-center">
                <div><h3 className="sblue fw-bold text-center mb-3">How-to Video</h3></div>
                <div className="col mt-2">
                    <div className="text-center mb-3 mx-auto">
                        <iframe width={310} height={170}
                            src="https://www.youtube.com/embed/HzqTJmJ6n8U"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                        <br /><a className="fw-bold sblue text-center" href="https://youtu.be/HzqTJmJ6n8U" target="_blank" rel="noreferrer">Protective Clear Coat for Aluminum Pontoon Boats</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowTo