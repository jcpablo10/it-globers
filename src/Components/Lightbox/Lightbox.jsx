import React from 'react'
import '../../Styles/_lightbox.scss'

const Lightbox = ({message}) => {

    return (
        <div className="lightbox">
            <div className="lightbox__message">
                <p>{message}</p>
            </div>
        </div>
        
    )
}

export default Lightbox
