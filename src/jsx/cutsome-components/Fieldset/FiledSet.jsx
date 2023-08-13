
const FiledSet = ({ legend, inputType, inputName, onChange, contentComponent, fieldClassName }) => {


    const getInput = () => {
        if (contentComponent) return contentComponent


        if (inputType === "textarea") {
            return (<textarea
                name={inputName}
                cols="40"
                rows="10">
            </textarea>)
        } else {
            return <input type={inputType} name={inputName} />
        }



    }

    return (
        <div className={fieldClassName}>
            <fieldset>
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