import { Icon } from '@iconify/react'

const QuickViewItem = (props) => {


    return (
        <div className="item">
            <div className="data">
                <h2>{props.data.value}</h2>
                <span>{props.data.title}</span>
            </div>


            <Icon icon={props.data.svg} />
        </div>
    )
}

export default QuickViewItem