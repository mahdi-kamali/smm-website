
import { Icon } from "@iconify/react"
import FAQsAccordion from "../../../../cutsome-components/accordion/FAQsAccordion"
import { useDispatch } from "react-redux"
import { ADMIN_PANEL_CREATE_FAQS } from "../../../../pop-ups/Constaints"
import { showPopUp } from "../../../../../features/popUpReducer"
import CreateFaqsPopUp from "../../../../pop-ups/CreateFaqsPopUp"


export default function Faqs() {

    const dispatcher = useDispatch()

    const selectedFaqs = [
        {
            "question": "What is social media marketing (SMM)?",
            "answer": "Social media marketing, often abbreviated as SMM, is an essential component of digital marketing strategies. It involves leveraging various social media platforms to create and share content, engage with users, and achieve specific marketing goals. By utilizing platforms like Facebook, Instagram, Twitter, LinkedIn, and Pinterest, businesses can establish a strong online presence, connect with their target audience, and drive traffic to their websites.",
            "isExpanded": true
        },
        {
            "question": "Why is SMM important for my business?",
            "answer": "Social media marketing is crucial for businesses of all sizes because it provides a direct channel to interact with potential and existing customers. Through SMM, you can build brand awareness, foster customer loyalty, and influence purchasing decisions. As platforms continue to evolve, SMM enables you to adapt to the changing preferences of your audience and stay ahead of competitors.",
            "isExpanded": true
        },
        {
            "question": "Which social media platforms should I focus on?",
            "answer": "The choice of social media platforms depends on your specific business goals and target audience. For instance, if you're a B2B company looking to establish industry authority, LinkedIn might be a primary platform. If your business revolves around visual content, Instagram and Pinterest could be valuable. An in-depth analysis of your audience demographics and behavior will guide you in selecting the platforms that best align with your objectives.",
            "isExpanded": true
        },
        {
            "question": "Do I need a professional to handle my SMM?",
            "answer": "While it's possible to manage your own social media accounts, a professional SMM strategist brings expertise, industry insights, and the ability to craft a tailored strategy. Professionals can create engaging content, identify trends, analyze metrics, and adjust strategies as needed, maximizing your return on investment.",
            "isExpanded": false
        },
        {
            "question": "What services do you offer for social media marketing?",
            "answer": "Our comprehensive social media marketing services encompass content creation, curated posting schedules, active audience engagement, targeted paid advertising campaigns, detailed analytics tracking, performance analysis, and strategic adjustments based on data insights. We work closely with you to create a customized plan that aligns with your brand identity and goals.",
            "isExpanded": false
        },
        {
            "question": "How do you create engaging social media content?",
            "answer": "Our content creation process is rooted in understanding your brand's unique voice and message. We craft visually captivating graphics, compelling captions, and incorporate trending hashtags to resonate with your audience. By staying attuned to the latest industry trends and user preferences, we ensure that your content is both relevant and engaging.",
            "isExpanded": false
        }
    ]


    const openCreateFaqPopUp = () => {
        dispatcher(showPopUp({
            type: ADMIN_PANEL_CREATE_FAQS,
            duration: 2000,
            component: <CreateFaqsPopUp />
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
                                <button>
                                    <Icon icon="bxs:edit" />
                                    <span>Edit</span>
                                </button>
                            </div>
                        </div>

                    })}
                </div>


            </div>




        </div>
    )
}
