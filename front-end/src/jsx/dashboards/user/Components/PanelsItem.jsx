
import MaxLineText from "../../../../jsx/cutsome-components/Text/MaxLineText"


const PanelsItem = ({ title, icon, currentActivePanel, clickEvent }) => {

    return (
        <li
            onClick={clickEvent}
            className={
                ` ${currentActivePanel === title ? "selected circle-ripple--animation " : ""}`}>
            {icon}
            <MaxLineText
            content={title}
            maxLine={1}
            />
        </li>
    )
}

export default PanelsItem