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