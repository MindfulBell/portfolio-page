import React from 'react';

export default (props) => {
    const width = props.scrollPos < 1250 ? 0 : `${props.lvl}%`;
    
    // setup diff colors for bars
    // let backgroundColor = (function(lvl){
    //     if (lvl <=35) {
    //         return '#85B846'
    //     }
    //     else if (lvl >= 36 && lvl <= 49) {
    //         return '#6EB846'
    //     }
    //     else {
    //         return '#33CC33'
    //     }
    // }(props.lvl))

    return (
        <div className='skillHolder'>
            <div className='skillTitle'>
                <h4>{props.name}</h4>
            </div>
            <div className='progressBar'>
                <div className='bar' style={{width}}>
                &nbsp;
                </div>
            </div>
        </div>
    )
}
