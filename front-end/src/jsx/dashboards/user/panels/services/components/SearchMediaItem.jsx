
const SearchMediaItem = (props) => {
    const data = props.data
    const clickFunction = props.clickFunction
    const currentSelectedMedia = props.currentSelectedMedia

    return (
        <div className={`item ${currentSelectedMedia.title === data.title ? "selected" : ""}`} onClick={clickFunction}>
            <div className="item-header">
                <img src={data.svg} />
            </div>
            <div className="item-body">
                <h1>{data.title}</h1>
            </div>
        </div>
    )
}

export default SearchMediaItem