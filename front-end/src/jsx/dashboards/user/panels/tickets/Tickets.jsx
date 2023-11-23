import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import Accordion from '../../../../cutsome-components/accordion/Accordion'
import AddNewTicket from './componetns/AddNewTicket'
import TicketHistory from './componetns/TicketHistory'

const Tickets = () => {

    const [ticketState, setTicketState] = useState(false)



  

    const frequentlyAskedQuestions = [
        {
          header: <h1 className='header'>How long does it take to receive a response from the support team?</h1>,
          body: <p className='body'>
            Our support team strives to respond to all tickets as quickly as possible. However, response times may vary depending on the volume of inquiries. Generally, you can expect a response within 24-48 hours.
          </p>,
          defaultActive: true
        },
        {
          header: <h1 className='header'>Why is my order not completed yet?</h1>,
          body: <p className='body'>
            Check the status of your order from the orders tab in your user dashboard before opening a ticket. To know the speed of the orders, please refer to the service description. In the rare event that the status of your order has become complete but the service was not delivered, please open a ticket and tell us to check the order for you.
          </p>,
          defaultActive: false
        },
        {
          header: <h1 className='header'>Why was my order canceled?</h1>,
          body: <p className='body'>
            Your orders will be canceled for one of the following reasons: <br/>
            1- Placing two or more orders for the same link at the same time without waiting for completion. <br/>
            2- The link format is incorrect or does not follow the instructions provided in the service description. <br/>
            3- The service is currently being updated or under service. <br/>
            4- In some cases, the quantity was not in increments of 100's or 1000's
          </p>,
          defaultActive: false
        },
        {
          header: <h1 className='header'>Why was my refill request rejected?</h1>,
          body: <p className='body'>
            A refill can be rejected for a variety of reasons such as: <br/>
            1- The order has dropped below the start count of the original order, in this case, the number must be brought up organically or through a new quick service order so that the system can refill the original order. <br/>
            2- The refill period outlined in the description of the order has now ended. <br/>
            3- The service does not offer refill. <br/>
            4- A new order has been made for the same link and there is overlap. <br/>
            If none of these reasons apply to you, please open a ticket with the support team for further assistance or clarification.
          </p>,
          defaultActive: false
        },
        {
          header: <h1 className='header'>How many tickets can I open?</h1>,
          body: <p className='body'>
            You must open only one ticket for all your orders so we can help you better. After the request has been submitted or the issue has been solved, the ticket will be closed. Only then should you open a new ticket for new orders. The maximum limit for pending tickets is 3. A response must be made by the support team to be able to open a new ticket.
          </p>,
          defaultActive: false
        },
        {
          header: <h1 className='header'>Can I get a refund to my original method of payment?</h1>,
          body: <p className='body'>
            Unfortunately, there is no way to return the balance to the original payment method. Upon payment, you have agreed to the terms and conditions of the site, that there is no way to get the money back. These payments are for services and not refundable.
          </p>,
          defaultActive: false
        },
        {
          header: <h1 className='header'>Is it possible for the quantity ordered to decrease?</h1>,
          body: <p className='body'>
            A drop is normal, that is why most services offer a refill guarantee. A drop can depend on many factors such as an update made by the social media platform, or on the quality of service chosen. Always make sure to read the service descriptions carefully to ensure you are making the correct order for your needs
          </p>,
          defaultActive: false
        },
        {
          header: <h1 className='header'>How often can I refill my order?</h1>,
          body: <p className='body'>
            You can request a refill once every 24 hours and only if there is a drop in the quantity delivered. Remember that your order must be still in the refill period. Also, in the case of drip feed orders, you can request to refill only the last order. Because in this case, the rest of the refill requests will be rejected.
          </p>,
          defaultActive: false
        },
        {
          header: <h1 className='header'>How can I have a Child Panel?</h1>,
          body: <p className='body'>
            You can see more details in Child Panel section, you can order your child panel request there and after reading all details If you have any further questions or need more specific information about the Child Panel, don't hesitate to contact our customer support for help.
          </p>,
          defaultActive: false
        },
        {
          header: <h1 className='header'>How can I change my account password?</h1>,
          body: <p className='body'>
            To change your account password, please follow these steps: <br/>
            1. Login to your account on the UTSMM Panel website. <br/>
            2. Go to your account settings or profile section. <br/>
            3. Look for the option to change your password. <br/>
            4. Enter your current password and the new password you desire. <br/>
            5. Save the changes, and your account password will be updated.
          </p>,
          defaultActive: false
        },
        {
          header: <h1 className='header'>How can I send a screenshot to you?</h1>,
          body: <p className='body'>
            You can either attach a file or send us a screenshot using this website: <a href="https://imgur.com/upload" target="_blank" rel="noopener noreferrer">https://imgur.com/upload</a>
          </p>,
          defaultActive: false
        },
        // ... (repeat the structure for other FAQs)
      ];
      

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