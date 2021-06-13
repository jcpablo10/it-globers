import React, { useState, useEffect } from 'react'
import '../../Styles/_lightbox.scss'

const Lightbox = ({message}) => {

    // const [visible, setVisible] = useState(true)

    // useEffect(() => {
    //     setTimeout(() => {
    //       setVisible(false);
    //     }, delay);
    //   }, [delay]);

    return (
        <div className="lightbox">
            <div className="lightbox__message">
                <p>{message}</p>
            </div>
        </div>
        
    )
}

export default Lightbox
