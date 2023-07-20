
const PanelsItem = ({ title, icon, currentActivePanel, clickEvent }) => {

    return (
        <li
            onClick={clickEvent}
            className={
                ` ${currentActivePanel === title ? "selected circle-ripple--animation " : ""}`}>
            {icon}
            <span>{title}</span>

        </li>
    )
}

export default PanelsItem