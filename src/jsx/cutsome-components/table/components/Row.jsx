import React from 'react'

const Row = (props) => {
    return (
        <div className='item'>
            {props.children}
        </div>
    )
}

export default Row