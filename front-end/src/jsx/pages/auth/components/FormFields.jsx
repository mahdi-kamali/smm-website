import { Icon } from '@iconify/react';



const FormFields = (
    {
        icon,
        placeHolder,
        name,
        type,
        child,
        customeClass,
        required
    }) => {

    if (child) {
        return <fieldset
            className={customeClass}
        >
            <legend>
                {icon}
                <span>
                    {placeHolder}
                </span>
            </legend>
            {
                child ? child : <input
                    type={type}
                    required={required}
                    name={name} />
            }

        </fieldset>
    } else {
        return <fieldset
            className={customeClass}
            onBlur={(e) => { e.target.parentNode.classList.remove("focues") }}
            onFocus={(e) => { e.target.parentNode.classList.add("focues") }}
        >
            <legend>
                {icon}
                <span>
                    {placeHolder}
                </span>
            </legend>
            {
                child ? child : <input
                    type={type}
                    required={required}
                    name={name} />
            }

        </fieldset>
    }

}

export default FormFields