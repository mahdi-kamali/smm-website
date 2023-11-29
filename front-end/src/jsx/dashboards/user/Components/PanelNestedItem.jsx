import React, { useEffect } from 'react'
import PanelsItem from './PanelsItem';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import MaxLineText from '../../../cutsome-components/Text/MaxLineText';

const PanelNestedItem = ({ data, selectedPanel, selectPanel }) => {


    const [expanded, setExpanded] = useState(false)
    const [isChildSelected, setIsChildSelected] = useState()



    useEffect(() => {

        data.items.forEach(item => {
            if (selectedPanel.title === item.title) {
                setExpanded(true)
            }
        })
    }, [selectedPanel])





    return (
        <div className={`nested-menu nested-menu-${expanded}`}>
            <div className="header" onClick={() => setExpanded(!expanded)}>
                {data.icon}
                <span>{data.title}</span>


                <Icon className='drop-down-arrow' icon="gridicons:dropdown" />

            </div>
            <div className="body">
                <div className="content">
                    {data.items.map((item, index) => {
                        return <PanelsItem
                            key={index}
                            title={item.title}
                            icon={item.icon}
                            currentActivePanel={selectedPanel.title}
                            clickEvent={() => selectPanel(item)}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}



export default PanelNestedItem