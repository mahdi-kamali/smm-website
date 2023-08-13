import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import Accordion from '../../../../cutsome-components/accordion/Accordion'
import AddNewTicket from './componetns/AddNewTicket'
import TicketHistory from './componetns/TicketHistory'

const Tickets = () => {

    const [ticketState, setTicketState] = useState(false)


    const frequentlyAskedQuestions = [
        {
            header: <h1 className='header'>Orders</h1>,
            body: <p className='body'>If You have a problem with your order,Open The ticket and Explain your problem First of all Select the order in the subject after this Fill in the Order ID in the provided space Then choose your Request and click the submit button Our Team will check it And will reply to you as soon as possible</p>,
            defaultActive: true
        },
        {
            header: <h1 className='header'>Payments</h1>,
            body: <p className='body'>If you have sent the Payment but its not added in to your account,Open the ticket and Choose Subject as Payment Then select Payment Method, Write the transaction Id,Email Id,Payment ammount,And your Message(if any have)And click the submit button our Payment department will Confirm your payment and add it as soon as possible into your account
            </p>,
            defaultActive: true

        },
        {
            header: <h1 className='header'>Orders</h1>,
            body: <p className='body'>If you need a Child Panel then we provide the child panel for 20$ per month For the Child Panel You Must have a domain or you can buy it, We will provide 10% discount But for the discount you need to spend at least 500$ per month via API .
            </p>,
            defaultActive: true

        }
        ,
        {
            header: <h1 className='header'>Orders</h1>,
            body: <p className='body'>If you need a Child Panel then we provide the child panel for 20$ per month For the Child Panel You Must have a domain or you can buy it, We will provide 10% discount But for the discount you need to spend at least 500$ per month via API .
            </p>,
            defaultActive: true

        }

    ]

    return (
        <section className='panel-tickets'>
            <div className="left">
                <div className="state">
                    <button
                        className={`${!ticketState}`}
                        onClick={() => { setTicketState(false) }}
                    >
                        <Icon icon="mdi:add-bold" />
                        <span>Add New Tickets</span>
                    </button>
                    <button
                        className={`${ticketState}`}
                        onClick={() => { setTicketState(true) }}
                    >
                        <Icon icon="ep:ticket" />
                        <span>Ticket History</span>
                    </button>
                </div>
                <div className="ticket-state-content">
                    {!ticketState ? <AddNewTicket /> : <TicketHistory />}
                </div>
            </div>
            <div className="right">
                <div className="frequently-questions">
                    <div className="question-header">
                        <h1>Ticket Faqs</h1>
                    </div>
                </div>
                <div className="accordions">
                    {frequentlyAskedQuestions.map((item, index) => {
                        return <Accordion
                            key={index}
                            containerClass={"tickets-freq-item"}
                            headerComponent={item.header}
                            bodyComponent={item.body}
                            defaultState={item.defaultActive}
                            dropDownIcon={
                                <Icon icon="material-symbols:arrow-drop-down" />} />
                    })}

                </div>
            </div>
        </section >
    )
}

export default Tickets