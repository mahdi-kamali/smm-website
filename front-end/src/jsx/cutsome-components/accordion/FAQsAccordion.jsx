import { Icon } from '@iconify/react'
import React from 'react'
import { useState } from 'react'





const FAQsAccordion = ({ headerTitle, bodyTitle, isExpanded }) => {


    const [expanded, setExpanded] = useState(isExpanded)


    



    return (
        <div className={`faqs-accordion accordion-${expanded}`}>
            <div
                className="accordion-header"
                onClick={() => { setExpanded(!expanded) }}>
                <h1> {headerTitle}</h1>
                <div className="accordion-arrow">
                    <Icon icon="gridicons:dropdown" />
                </div>
            </div>
            <div className={`accordion-body`}>
                <div className="content">
                    <p>
                        {bodyTitle}
                    </p>
                </div>

            </div>

            
        </div>
    )
}

export default FAQsAccordion