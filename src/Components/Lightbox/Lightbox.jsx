import React, { useState } from 'react'
import '../../Styles/_lightbox.scss'

const Lightbox = ({lightboxMode}) => {

    const [lightbox, setLightbox] = useState(false)
    return (
        <div className="lightbox">
            <div className="lightbox__message">
                <p>Mensaje</p>
            </div>
        </div>
    )
}

export default Lightbox
