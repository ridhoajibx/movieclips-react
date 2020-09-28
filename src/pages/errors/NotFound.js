import React, { useEffect, useState } from 'react';

const NotFound = () => {
    const [ title, setTitle ] = useState('')

    const getTitle = () => {
        let title = '404'
        setTitle(title)
    }
    
    useEffect(() => {
        getTitle();
    }) 
    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="display-6">
                    <p>{ title }</p>

                    <p>This pages not found !</p>
                </div>
            </div>               
        </div>
    );
}

export default NotFound;
