import React, { useState } from 'react'
import FiledSet from '../Fieldset/FiledSet'
import { Icon } from '@iconify/react'
import SelectComponent from './SelectComponent'

const SelectBox = ({ legend, defaultValue, items, inputName }) => {


    const [expand, setExpand] = useState(false)
    const [selectedItem, setSelectedItem] = useState(items[0])


    return (
        <div className="select-box">
            <fieldset className={`select-box-container ${expand}`}>
                <legend>
                    {legend.svg}
                    <span>{legend.title}</span>
                </legend>
                <div className="content">
                    <SelectComponent
                        items={items}
                        expand={expand}
                        setExpand={setExpand}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem} />
                </div>
            </fieldset>
            <input
                type="hidden"
                value={selectedItem.value}
                name={inputName} />
        </div>


    )
}

export default SelectBox