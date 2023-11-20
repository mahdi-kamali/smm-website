import { Icon } from "@iconify/react"
import { SERVER } from "../../../../../lib/envAccess"

const UserInfo = ({user}) => {

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
                <img src={SERVER.BASE_URL + user.image}  />
                <div className="info">
                    <h1>{user.fullName}</h1>
                    <span>{user.role}</span>
                </div>
            </div>
        </div>
    )
}

export default UserInfo