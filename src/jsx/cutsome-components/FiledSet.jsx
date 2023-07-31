
const FiledSet = ({ legend, inputName, onChange }) => {
    return (
        <fieldset>
            <legend>
                {legend.svg}
                <span>{legend.title}</span>
            </legend>
            <div className="content">
                <input
                    type="text"
                    name={inputName}
                    onChange={onChange}
                />
            </div>
        </fieldset>
    )
}

export default FiledSet