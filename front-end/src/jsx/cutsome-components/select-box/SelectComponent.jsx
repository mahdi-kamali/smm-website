import React from 'react'
import { useState } from 'react'

const SelectComponent = ({
    items,
    setExpand,
    expand,
    selectedItem,
    setSelectedItem }) => {




    const handleSelectClick = (item) => {
        setSelectedItem(item)
        setExpand(false)
    }


    return (
        <div className='select-box-container' >
            <div
                className="selected-option"
                onClick={() => { setExpand(!expand) }}>
                {selectedItem.title}
            </div>
            <div className="available-options">
                <div className="options-container">
                    {
                        items.map(((item, index) => {
                            return <div
                                className="option"
                                key={index}
                                onClick={() => { handleSelectClick(item) }}>
                                {item.title}
                            </div>
                        }))
                    }
                </div>

            </div>

        </div>
    )
}

export default SelectComponent