


const ActiveSocialItem = ({ svg, title, selected, click }) => {
    return (
        <button className={`item ${selected === title ? "selected" : ""}`}
            onClick={click}>
            <div className="item-header">
                <img src={svg} />
            </div>
            <div className="item-body">
                <span>{title}</span>
            </div>
        </button>
    )
}

export default ActiveSocialItem