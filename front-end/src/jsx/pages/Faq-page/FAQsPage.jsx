import FAQsAccordion from "../../cutsome-components/accordion/FAQsAccordion"
import waveBackground from "../../../animations/main-page/comments-background-wave.json"
import Accordion from "../../cutsome-components/accordion/Accordion"



import fqsListAnimation from "../../../animations/main-page/list.json"
import Lottie from "react-lottie-player"
import clouds from "../../../animations/main-page/cloudes.json"
import faqsPosterAnimation from "../../../animations/main-page/faqs-poster.json"

import { useFetch } from "../../../lib/useFetch"
import { API } from "../../../lib/envAccess"

const FAQsPage = () => {

  const [faqs, error, loading, setUrl, refresh] = useFetch(
    API.PUBLIC.FAQS.GET
  )


  waveBackground.fr = 5
  clouds.fr = 12.5
  fqsListAnimation.fr = 5
  faqsPosterAnimation.fr = 10









  const faqsLeftList = [
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
      "isExpanded": false
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
    },
    {
      "question": "Can you help me with paid social media advertising?",
      "answer": "Yes, we offer expert assistance in creating and managing paid advertising campaigns on various social media platforms. Our team is skilled in targeting specific demographics, optimizing ad placements, and managing budgets to maximize reach, clicks, and conversions. Paid advertising can significantly amplify your brand's visibility and growth potential.",
      "isExpanded": false
    },
  ]

  const faqsRightList = [

    {
      "question": "Do you provide analytics and performance reports?",
      "answer": "Absolutely. We understand the importance of data-driven decision-making. We continuously monitor and analyze key performance indicators (KPIs) such as engagement rates, reach, click-through rates, and conversions. Our detailed reports offer insights into campaign effectiveness, allowing us to fine-tune strategies for optimal results.",
      "isExpanded": true
    },
    {
      "question": "How do I begin working with your SMM services?",
      "answer": "Initiating our SMM services is simple. Reach out to us through our website or email, and we'll schedule a consultation. During this discussion, we'll delve into your business goals, target audience, and existing online presence. With this information, we'll develop a tailored SMM strategy that aligns with your vision.",
      "isExpanded": true
    },
    {
      "question": "What's the typical timeline for seeing results with SMM?",
      "answer": "The timeline for noticeable results varies based on factors like your industry, competition, current online presence, and the aggressiveness of the strategy. While some improvements might become apparent within a few weeks, substantial and sustained growth often takes a few months of consistent effort and optimization.",
      "isExpanded": false
    },
    {
      "question": "Is there a contract for your services?",
      "answer": "Yes, we typically work with contracts that outline the scope of services, pricing structure, duration of engagement, and terms of collaboration. Contracts provide clarity and ensure that both parties are aligned on expectations and responsibilities.",
      "isExpanded": false
    },
    {
      "question": "How is your pricing structured for SMM services?",
      "answer": "Our pricing is flexible and depends on various factors, including the services you require, the number of platforms you want to focus on, the level of engagement desired, and the complexity of your goals. We offer both package pricing and custom solutions to cater to your unique needs and budget.",
      "isExpanded": false
    },
    {
      "question": "Do you offer any guarantees on results?",
      "answer": "While we cannot guarantee specific outcomes due to the dynamic nature of social media, we are committed to delivering strategies and efforts that are aimed at achieving your SMM goals. Our experienced team continuously adapts and optimizes strategies to maximize success and ROI.",
      "isExpanded": false
    }
  ]








  return (

    <main className="faqs-page">

      <div className="faqs-poster">
        <div className="left">
          <Lottie
            animationData={faqsPosterAnimation}
            play
            loop />

        </div>
        <div className="right">
          <h1>
            Frequently
            <span>Asked
              Questions</span>
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat sequi possimus quo. Nam, repellat? Magni sit alias illo, aliquid impedit est doloribus consequuntur, porro incidunt et voluptatem doloremque voluptate. Consectetur!
          </p>
        </div>
      </div>

      <div className="faqs-items">
        <div className="col">
          {
            !loading ? faqs.slice(0, Math.ceil(faqs.length / 2)).map((item, index) => {
              return <FAQsAccordion
                key={index}
                headerTitle={item.question}
                bodyTitle={item.answer}
                isExpanded={item.isExpanded} />
            }) : <h1>Loading ...</h1>
          }
        </div>
        <div className="col">
          {
            !loading ? faqs.slice(Math.ceil(faqs.length / 2)).map((item, index) => {
              return <FAQsAccordion
                key={index}
                headerTitle={item.question}
                bodyTitle={item.answer}
                isExpanded={item.isExpanded} />
            }) : null
          }
        </div>

      </div>


      <div className="background">
        <Lottie
          className="cloude-animation"
          animationData={clouds}
          play
          loop />
        <Lottie
          className="charachter-animation"
          animationData={waveBackground}
          play
          loop />
      </div>

    </main>
  )
}

export default FAQsPage