import { useState } from "react"

const FiledSet = (
    {
        legend,
        inputType,
        inputName,
        onChange,
        contentComponent,
        fieldClassName,
        isRequired = false
    }
) => {


    const [focus, setFocus] = useState(false)



    const getInput = () => {
        if (contentComponent) return contentComponent


        if (inputType === "textarea") {
            return (<textarea
                name={inputName}
                cols="40"
                rows="10"
                required={isRequired}>
            </textarea>)
        } else {
            return <input type={inputType} name={inputName} required={isRequired} />
        }



    }



    return (
        <div className={fieldClassName}>
            <fieldset
                className={`${focus ? "focus" : ""} `}
                onFocus={() => { setFocus(true) }}
                onBlur={() => { setFocus(false) }}
            >
                <legend>
                    {legend.svg}
                    <span>{legend.title}</span>
                </legend>
                <div className="content">
                    {
                        getInput()
                    }

                </div>
            </fieldset>
        </div>

    )
}

export default FiledSet