
import { Icon } from "@iconify/react"
import FAQsAccordion from "../../../../cutsome-components/accordion/FAQsAccordion"
import { useDispatch } from "react-redux"
import { ADMIN_PANEL_CREATE_FAQS, ADMIN_PANEL_EDIT_FAQS } from "../../../../pop-ups/Constaints"
import { showPopUp } from "../../../../../features/popUpReducer"
import CreateFaqsPopUp from "../../../../pop-ups/CreateFaqsPopUp"
import EditFaqsPopUp from "../../../../pop-ups/EditFaqsPopUp"
import Table from "../../../../cutsome-components/table/Table"
import TableHeader from "../../../../cutsome-components/table/components/TableHeader"
import ItemHeader from "../../../../cutsome-components/table/components/ItemHeader"
import TableBody from "../../../../cutsome-components/table/components/TableBody"
import Row from "../../../../cutsome-components/table/components/Row"
import Property from "../../../../cutsome-components/table/components/Property"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import MaxLineText from "../../../../cutsome-components/Text/MaxLineText"

import Switch from "react-switch"


export default function Faqs() {

    const dispatcher = useDispatch()

    const [chats, setChats] = useState([])


    const selectedFaqs = [
        {
            id: 100,
            "question": "What is social media marketing (SMM)?",
            "answer": "Social media marketing, often abbreviated as SMM, is an essential component of digital marketing strategies. It involves leveraging various social media platforms to create and share content, engage with users, and achieve specific marketing goals. By utilizing platforms like Facebook, Instagram, Twitter, LinkedIn, and Pinterest, businesses can establish a strong online presence, connect with their target audience, and drive traffic to their websites.",
            "isExpanded": true
        },
        {
            id: 101,

            "question": "Why is SMM important for my business?",
            "answer": "Social media marketing is crucial for businesses of all sizes because it provides a direct channel to interact with potential and existing customers. Through SMM, you can build brand awareness, foster customer loyalty, and influence purchasing decisions. As platforms continue to evolve, SMM enables you to adapt to the changing preferences of your audience and stay ahead of competitors.",
            "isExpanded": true
        },
        {
            id: 102,
            "question": "Which social media platforms should I focus on?",
            "answer": "The choice of social media platforms depends on your specific business goals and target audience. For instance, if you're a B2B company looking to establish industry authority, LinkedIn might be a primary platform. If your business revolves around visual content, Instagram and Pinterest could be valuable. An in-depth analysis of your audience demographics and behavior will guide you in selecting the platforms that best align with your objectives.",
            "isExpanded": true
        },
        {
            id: 103,
            "question": "Do I need a professional to handle my SMM?",
            "answer": "While it's possible to manage your own social media accounts, a professional SMM strategist brings expertise, industry insights, and the ability to craft a tailored strategy. Professionals can create engaging content, identify trends, analyze metrics, and adjust strategies as needed, maximizing your return on investment.",
            "isExpanded": false
        },
        {
            id: 104,
            "question": "What services do you offer for social media marketing?",
            "answer": "Our comprehensive social media marketing services encompass content creation, curated posting schedules, active audience engagement, targeted paid advertising campaigns, detailed analytics tracking, performance analysis, and strategic adjustments based on data insights. We work closely with you to create a customized plan that aligns with your brand identity and goals.",
            "isExpanded": false
        },
        {
            id: 105,
            "question": "How do you create engaging social media content?",
            "answer": "Our content creation process is rooted in understanding your brand's unique voice and message. We craft visually captivating graphics, compelling captions, and incorporate trending hashtags to resonate with your audience. By staying attuned to the latest industry trends and user preferences, we ensure that your content is both relevant and engaging.",
            "isExpanded": false
        }
    ]

    const headerList = [
        "Chat ID",
        "Full Name",
        "Email",
        "Phone Number",
        "Message",
        "Answerd",
        "Controlls"
    ]


    useEffect(() => {
        axios.get("https://65056334ef808d3c66effa9b.mockapi.io/users")
            .then(response => {
                setChats(response.data)
            })
    }, [])


    const openCreateFaqPopUp = () => {
        dispatcher(showPopUp({
            type: ADMIN_PANEL_CREATE_FAQS,
            duration: 2000,
            component: <CreateFaqsPopUp />
        }))
    }

    const openEditFaqPopUp = (faq) => {
        dispatcher(showPopUp({
            type: ADMIN_PANEL_EDIT_FAQS,
            duration: 2000,
            component: <EditFaqsPopUp faqs={faq} />
        }))
    }



    return (
        <div className="admin-panel-faqs">

            <div className="selected-faqs">
                <h2 className="header">
                    <h1 className="left">
                        Selected Faqs
                    </h1>
                    <div className="right">
                        <button onClick={openCreateFaqPopUp}>
                            <Icon icon="wpf:create-new" />
                            <span>Create New</span>
                        </button>
                    </div>
                </h2>
                <div className="body">
                    {selectedFaqs.map((record, index) => {
                        return <div className="item">
                            <FAQsAccordion
                                headerTitle={record.question}
                                bodyTitle={record.answer}
                                key={index} />
                            <div className="item-buttons">
                                <button>
                                    <Icon icon="fluent:delete-32-filled" />
                                    <span>Delete</span>
                                </button>
                                <button
                                    onClick={() => openEditFaqPopUp(record)}>
                                    <Icon icon="bxs:edit" />
                                    <span>Edit</span>
                                </button>
                            </div>
                        </div>

                    })}
                </div>


            </div>



            <Table columnsStyle={"6rem 10rem 15rem 10rem   1fr 1fr 1fr"} >
                <TableHeader>

                    {
                        headerList.map((record, index) => {
                            return <ItemHeader key={index}>
                                {record}
                            </ItemHeader>
                        })
                    }
                </TableHeader>
                <TableBody >
                    {
                        chats.map(record => {
                            return <Row key={record.chatId}>
                                <Property>
                                    <div className="property-header">
                                        {headerList[0]}
                                    </div>
                                    <div className="property-body">
                                        {record.chatId}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headerList[1]}
                                    </div>
                                    <div className="property-body">
                                        {record.fullName}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headerList[2]}
                                    </div>
                                    <div className="property-body">
                                        {record.email}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headerList[3]}
                                    </div>
                                    <div className="property-body">
                                        {record.phoneNumber}
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headerList[4]}
                                    </div>
                                    <div className="property-body">
                                        <MaxLineText
                                            maxLine={3}
                                            content={record.message} />
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headerList[5]}
                                    </div>
                                    <div className="property-body">
                                        <Switch
                                            onChange={(e) => { alert(e) }}
                                            checked={record.answered} />
                                    </div>
                                </Property>
                                <Property>
                                    <div className="property-header">
                                        {headerList[6]}
                                    </div>
                                    <div className="property-body buttons">
                                        <button className="reply-email">
                                            <span>
                                                Reply Email
                                            </span>
                                            <Icon icon="iconamoon:send-fill" />
                                        </button>
                                        <button className="reply-phone">
                                            <span>
                                                Reply Phone
                                            </span>
                                            <Icon icon="iconamoon:send-fill" />
                                        </button>
                                    </div>
                                </Property>
                            </Row>
                        })
                    }

                </TableBody>
            </Table>




        </div>
    )
}
