import React, { useState } from 'react'

const Accordion = (
    {
        headerComponent,
        containerClass,
        bodyComponent,
        setActiveFunction,
        defaultState,
        dropDownIcon }) => {


    const [expanded, setExpanded] = useState(defaultState)

    return (
        <div className={`accordion`}>
            <div className={`container ${containerClass}  ${expanded}`}>
                <div
                    className="accordion-header"
                    onClick={() => { setExpanded(!expanded) }}
                >
                    <span>
                        {headerComponent}
                    </span>
                    <div className="icon">
                        {dropDownIcon}
                    </div>
                </div>
                <div className={`accordion-body`}>
                    <div className="content">
                        {bodyComponent}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Accordion