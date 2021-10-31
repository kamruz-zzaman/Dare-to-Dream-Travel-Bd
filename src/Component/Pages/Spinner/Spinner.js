import React from 'react';
import './spinner.css'
const Spinner = () => {
    return (
        <div className='flex justify-center h-96'>
            <div class="trinity-rings-spinner">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
        </div>
    );
};

export default Spinner;