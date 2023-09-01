import React from 'react'

const Table = (props) => {
    console.log(props);

    const style = {
      gridTemplateColumns : props.columnsStyle , 
    }

    return (
        <div className='table' style={style}  >
            {props.children}
        </div>
    )
}

export default Table