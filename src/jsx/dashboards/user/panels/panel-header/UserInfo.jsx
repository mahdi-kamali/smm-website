import { Icon } from "@iconify/react"

const UserInfo = () => {
    return (
        <div className="user-info">
            <div className="today-news">
                <h1>Todays News</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam quaerat aliquid ducimus sapiente quas eligendi labore itaque nisi facilis dolorem animi doloremque excepturi, quibusdam autem unde nobis maxime ullam. Esse.
                </p>
            </div>
            <div className="icons">
                <Icon icon="uil:search" />
                <Icon icon="ri:sun-fill" />
                <Icon icon="iconamoon:notification-fill" />
            </div>
            <div className="avatar">
                <img src={require("../../../../../images/panel/panel-header/avatar.jpg")} alt="" />
                <div className="info">
                    <h1>Sina Saropwa</h1>
                    <span>Premium User</span>
                </div>
            </div>
        </div>
    )
}

export default UserInfo