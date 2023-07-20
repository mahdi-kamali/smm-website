import { Icon } from '@iconify/react';



const FormFields = ({ icon, placeHolder, name, type }) => {

    return (
        <fieldset
            onBlur={(e) => { e.target.parentNode.classList.remove("focues") }}
            onFocus={(e) => { e.target.parentNode.classList.add("focues") }}>
            <legend>
                {icon}
                <span>
                    {placeHolder}
                </span>
            </legend>
            <input type={type} name={name} />
        </fieldset>
    )
}

export default FormFields