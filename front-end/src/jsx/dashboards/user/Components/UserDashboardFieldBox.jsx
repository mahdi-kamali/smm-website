import { Icon } from '@iconify/react'
import React from 'react'

const UserDashboardFieldBox = (
    {
        customeClass,
        oncClickFunction,
        header,
        body,
        id,
    }
) => {




    return (
        <fieldset
            className={`user-dashboard-field-box ${customeClass}`}
            onClick={oncClickFunction} >
            <legend>
                {header.svg}
                <span>
                    {header.title}
                </span>
            </legend>
            <div className="content">
                {body}
            </div>
        </fieldset>
    )
}

export default UserDashboardFieldBox