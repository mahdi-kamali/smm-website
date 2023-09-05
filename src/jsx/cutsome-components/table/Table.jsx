import React, { useEffect } from 'react'

const Table = (props) => {

    const style = {
        gridTemplateColumns: props.columnsStyle,
    }



 



    return (
        <div className='table' style={style}   >
            {props.children}
        </div>
    )
}

export default Table