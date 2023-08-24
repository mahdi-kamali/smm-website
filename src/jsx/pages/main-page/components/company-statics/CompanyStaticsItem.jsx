import React from 'react'

const CompanyStaticsItem = ({ item, selected, setSelected }) => {




    return (
        <div
            className={`item ${selected}`}
            onMouseEnter={() => { setSelected(item) }}

        >
            <div className="item-header">
                <img src={item.svg} alt="" />
            </div>
            <div className="item-body">
                <h1>
                    {item.value}
                </h1>
                <span>{item.title}</span>
            </div>
        </div>
    )
}

export default CompanyStaticsItem