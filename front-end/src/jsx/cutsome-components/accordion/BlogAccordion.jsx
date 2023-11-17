import React from 'react'

const BlogAccordion = ({ header, body }) => {
    return (
        <div className='blog-accordion'>
            <div className="accord-header">
                {header}
            </div>
            <div className="accordion-body">
                <div className="content">
                    {body}
                </div>
            </div>
        </div>
    )
}

export default BlogAccordion