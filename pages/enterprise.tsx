import * as React from 'react';
import { NextContext } from 'next';
import Head from 'next/head';
import NavigationBar from '../components/layout/NavigationBar';
import LocaleSolver, { withLocaleService } from '../components/locale/LocaleSolver';
import 'styles/scss/App.scss';
import Link from 'next/link';
import Swiper from 'swiper';
import Intro from '../components/layout/Intro';
import TabbedHero from '../components/layout/TabbedHero';
import TabItem from '../components/layout/TabItem';
import Tab from '../components/layout/Tab';
import Hero from '../components/layout/Hero';
import FlexBox from '../components/layout/FlexBox';
import ButtonLink from '../components/links/ButtonLink';
import HeroCard from '../components/layout/HeroCard';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Footer from '../components/layout/Footer';


interface Props {

}
interface States {

  currentIndexGrowth: number;
  currentIndexHowto: number;
  showFeatCE: boolean;
  showBeneCE: boolean;
  showFeatBA: boolean;
  showBeneBA: boolean;
  showFeatHR: boolean;
  showBeneHR: boolean;
  showFeatCS: boolean;
  showBeneCS: boolean;
  showFeatEC: boolean;
  showBeneEC: boolean;
  showFeatED: boolean;
  showBeneED: boolean;
}

let tabSwiper: any = null;
let chatBotSwiper: any = null;
let storySwiper: any = null;


class Enterprise extends React.Component<Props, States> {
  public static async getInitialProps(ctx: NextContext) {

  }
  state = {
    currentIndexGrowth: 0,
    currentIndexHowto: 0,
    showFeatCE: false,
    showBeneCE: false,
    showFeatBA: false,
    showBeneBA: false,
    showFeatHR: false,
    showBeneHR: false,
    showFeatCS: false,
    showBeneCS: false,
    showFeatEC: false,
    showBeneEC: false,
    showFeatED: false,
    showBeneED: false,
  };
  componentDidMount() {
    tabSwiper = new Swiper('#tab-swiper', {
      speed: 400,
      spaceBetween: 100
    });

    chatBotSwiper = new Swiper('#chatbot-swiper', {
      speed: 400,
      spaceBetween: 100,
    });

    storySwiper = new Swiper('#story-swiper', {
      slidesPerView: 1,
      effect: 'coverflow',
      centeredSlides: true,
      spaceBetween: -200,
      freeMode: false,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 1500,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    this.setState({
      currentIndexGrowth: 0,
      currentIndexHowto: 0
    });
  }



  render() {
    const { localeService, posts } = this.props;

    var divStyle = {
      width: '100%;'
    };
    var buttonStyle = {
      'margin-top': '-25px;'
    }

    return (
      <div>
        <Head>
          <title>{localeService.dictionary.meta.home.title}</title>
          <meta name="description" content={localeService.dictionary.meta.home.description} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={localeService.dictionary.meta.home.title} />
          <meta
            property="og:description"
            content={localeService.dictionary.meta.home.description}
          />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />

        </Head>
        <NavigationBar localeService={this.props.localeService} />

        <Intro className="enterprise">
          <div className="flex-item__left">
            <Fade>
              <div className="enterprise__intro__text">
                <h1>
                  Start engaging and serving your customers automatically
              </h1>
              </div>
            </Fade>

          </div>
          <div className="flex-item__right enterprise__intro__image">
            <Fade>
              <img src="/static/png/enterprise/coverphone.png" className="enterprise__intro__image--phone" alt="" />
            </Fade>
            <Fade right>
              <img src="/static/png/enterprise/coverchat.png" className="enterprise__intro__image--chat" alt="" />
            </Fade>
          </div>
        </Intro>
        <TabbedHero
          className="enterprise"
          title="Our AI & chatbot solution enables you to design an intelligent assistant for your business in an accelerated path to business growth and revenue.">

          <div>
            {this.renderTabMenu()}
          </div>
          <div>
            <div className="swiper-container" id="tab-swiper">
              <div className="swiper-wrapper">

                <div className="swiper-slide">

                  <Grid className="enterprise__tab">
                    <Fade>
                      <h5>FMCG - Customer Engagement Customer engagement has always been at the forefront of brand marketing plans, and now employing digital channels to turn casual users into shoppers is quickly becoming a viable path to faster and simpler interaction. Our chatbot solution allows your FMCG brand to create brilliantly effective campaign plans, simply by defining your goals.</h5>
                    </Fade>
                    <Row>
                      <Col md={6}>
                        <Fade>
                          <img src="/static/png/enterprise/cephone.png" />
                        </Fade>
                      </Col>
                      <Col md={6}>
                        <div className="enterprise__tab__button">
                          <Fade bottom>
                            <div className="enterprise__tab__button--large">
                              <a className="button button__light button__block" onClick={this.stateFeatCe()}>Features you can offer</a>
                              <Fade bottom collapse when={this.state.showFeatCE}>
                                <ul>
                                  <li>
                                    Small talk and assistance
                                </li>
                                  <li>
                                    Personalized offers
                                </li>
                                  <li>
                                    Advertise special promotions
                                </li>
                                  <li>
                                    FAQs
                                </li>
                                  <li>
                                    Quote management
                                </li>
                                  <li>
                                    Lead and contact management
                                </li>
                                  <li>
                                    Loyalty program
                                </li>
                                </ul>
                              </Fade>
                            </div>
                          </Fade>
                          <Fade bottom>
                            <div className="enterprise__tab__button--large">
                              <a className="button button__light button__block" onClick={this.stateBeneCe()}>Benefits</a>
                              <Fade bottom collapse when={this.state.showBeneCE}>
                                <ul>
                                  <li>
                                    Create campaigns that aligns with your goals
                                </li>
                                  <li>
                                    Achieve relevant messages for personalization at scale
                                </li>
                                  <li>
                                    Outperform your campaign revenue targets
                                </li>
                                  <li>
                                    Increase customer experience & loyalty
                                </li>
                                  <li>
                                    Reactivate customers in your database
                                </li>
                                  <li>
                                    Boost omni-channel ROI
                                </li>
                                  <li>
                                    Loyalty program
                                </li>
                                </ul>
                              </Fade>
                            </div>
                          </Fade>
                        </div>
                      </Col>
                    </Row>
                  </Grid>
                </div>

                <div className="swiper-slide">

                  <Grid className="enterprise__tab">
                    <Fade>
                      <h5>Whether your business line is banking, financial services, or FinTech, bots are a great strategy to sustain profitability and win over customers. It offers real-time financial services / data at the engagement point, supply 24 hour self-service, and transform ordinary transactions, policy updates, payments, and more into simple text through the channel of customers choice.</h5>
                    </Fade>
                    <Row>
                      <Col md={6}>
                        <Fade>
                          <img src="/static/png/enterprise/baphone.png" />
                        </Fade>
                      </Col>
                      <Col md={6}>
                        <div className="enterprise__tab__button">
                          <Fade bottom>
                            <div className="enterprise__tab__button--large">
                              <a className="button button__light button__block" onClick={this.stateFeatBa()}>Features you can offer</a>
                              <Fade bottom collapse when={this.state.showFeatBA}>
                                <ul>
                                  <li>
                                    User and account registration
                                </li>
                                  <li>
                                    Branch and ATM locator
                                </li>
                                  <li>
                                    Spending analysiss
                                </li>
                                  <li>
                                    Apply for new services and request checkbook
                                </li>
                                  <li>
                                    Report lost or stolen card
                                </li>
                                  <li>
                                    Transfer money to own account / third party
                                </li>
                                  <li>
                                    Bill payment
                                </li>
                                  <li>
                                    Real-time financial market data
                                </li>
                                </ul>
                              </Fade>
                            </div>
                          </Fade>
                          <Fade bottom>
                            <div className="enterprise__tab__button--large">
                              <a className="button button__light button__block" onClick={this.stateBeneBa()}>Benefits</a>
                              <Fade bottom collapse when={this.state.showBeneBA}>
                                <ul>
                                  <li>
                                    Remove friction points for immediate support and resolution
                                </li>
                                  <li>
                                    Provide personal banking and investment advice
                                </li>
                                  <li>
                                    Uncover right-time / right-fit loyalty program promotions
                                </li>
                                  <li>
                                    Deliver actionable response options to urgent activity notifications
                                </li>
                                  <li>
                                    Offer guidance for simpler loan applications and more submissions
                                </li>
                                  <li>
                                    Drive digital adoption to long-term relationships and capture real-time opportunities
                                </li>
                                </ul>
                              </Fade>
                            </div>
                          </Fade>
                        </div>
                      </Col>
                    </Row>
                  </Grid>
                </div>

                <div className="swiper-slide">
                  <Grid className="enterprise__tab">
                    <Fade>
                      <h5>Your most important assets are your employees. Imagine how happy they would be and how productive they are, if they were given the answer right away. This kind of chatbot will simplify Human Resource experience. Employee can ask or message a bot like their fellow to resolve issues, ask questions, schedule meetings, and more. </h5>
                    </Fade>
                    <Row>
                      <Col md={6}>
                        <Fade>
                          <img src="/static/png/enterprise/hrphone.png" />
                        </Fade>
                      </Col>
                      <Col md={6}>
                        <div className="enterprise__tab__button">
                          <Fade bottom>
                            <div className="enterprise__tab__button--large">
                              <a className="button button__light button__block" onClick={this.stateFeatHr()}>Features you can offer</a>
                              <Fade bottom collapse when={this.state.showFeatHR}>
                                <ul>
                                  <li>
                                    Employer branding
                                </li>
                                  <li>
                                    Sourcing & recruitment
                                </li>
                                  <li>
                                    On boarding process
                                </li>
                                  <li>
                                    FAQ & Company policy
                                </li>
                                  <li>
                                    Schedule meetings and send a notification
                                </li>
                                  <li>
                                    Benefits enrollment
                                </li>
                                  <li>
                                    Centralize documentation
                                </li>
                                </ul>
                              </Fade>
                            </div>
                          </Fade>
                          <Fade bottom>
                            <div className="enterprise__tab__button--large">
                              <a className="button button__light button__block" onClick={this.stateBeneHr()}>Benefits</a>
                              <Fade bottom collapse when={this.state.showBeneHR}>
                                <ul>
                                  <li>
                                    Easily converge siloed systems
                                </li>
                                  <li>
                                    Increase productivity across all departments
                                </li>
                                  <li>
                                    Enhance and increase employee engagement
                                </li>
                                  <li>
                                    Automate common data entry tasks to offset a busy HR team’s workload
                                </li>
                                  <li>
                                    Innovate the recruiting process
                                </li>
                                  <li>
                                    Gather meaningful data & provide it in a customized way
                                </li>
                                </ul>
                              </Fade>
                            </div>
                          </Fade>
                        </div>
                      </Col>
                    </Row>
                  </Grid>
                </div>

                <div className="swiper-slide">
                  <Grid className="enterprise__tab">
                    <Fade>
                      <h5>Today’s digital-savvy customer expect answers at the click of a button. They desire a personalized, proactive conversation with a brand that they love. Customer service bots interact with the customer on behalf of your business, enabling customer to self-service online by drawing on specific business rules to answer common questions and requests. </h5>
                    </Fade>
                    <Row>
                      <Col md={6}>
                        <Fade>
                          <img src="/static/png/enterprise/csphone.png" />
                        </Fade>
                      </Col>
                      <Col md={6}>
                        <div className="enterprise__tab__button">
                          <Fade bottom>
                            <div className="enterprise__tab__button--large">
                              <a className="button button__light button__block" onClick={this.stateFeatCs()}>Features you can offer</a>
                              <Fade bottom collapse when={this.state.showFeatCS}>
                                <ul>
                                  <li>
                                    Always on, 24/7 availability
                                </li>
                                  <li>
                                    Simpler & personalized interactions
                                </li>
                                  <li>
                                    Easier problem resolution with self-service
                                </li>
                                  <li>
                                    Increase customer engagement
                                </li>
                                  <li>
                                    Provide news or information updates
                                </li>
                                  <li>
                                    Provide products / services recommendations
                                </li>
                                  <li>
                                    Ease online transactions and facilitate sales
                                </li>
                                </ul>
                              </Fade>
                            </div>
                          </Fade>
                          <Fade bottom>
                            <div className="enterprise__tab__button--large">
                              <a className="button button__light button__block" onClick={this.stateBeneCs()}>Benefits</a>
                              <Fade bottom collapse when={this.state.showBeneCS}>
                                <ul>
                                  <li>
                                    Customers can always get assistance when and where they need it
                                </li>
                                  <li>
                                    Get real insight into what your customers prefer
                                </li>
                                  <li>
                                    Customer service improvement through analytics and data collections
                                </li>
                                  <li>
                                    Enables business to save operational costs on Call Center
                                </li>
                                  <li>
                                    Help business save time in responding to customers’ FAQ
                                </li>
                                </ul>
                              </Fade>
                            </div>
                          </Fade>
                        </div>
                      </Col>
                    </Row>
                  </Grid>

                </div>

                <div className="swiper-slide">
                  <Grid className="enterprise__tab">
                    <Fade>
                      <h5>Bots offer a way to change the shopping experience through ‘conversational commerce’ that is a two-way interaction between customers and business that feels more like an interaction between a seller and buyer.  </h5>
                    </Fade>
                    <Row>
                      <Col md={6}>
                        <Fade>
                          <img src="/static/png/enterprise/ecphone.png" />
                        </Fade>
                      </Col>
                      <Col md={6}>
                        <div className="enterprise__tab__button">
                          <Fade bottom>
                            <div className="enterprise__tab__button--large">
                              <a className="button button__light button__block" onClick={this.stateFeatEc()}>Features you can offer</a>
                              <Fade bottom collapse when={this.state.showFeatEC}>
                                <ul>
                                  <li>
                                    Greeting and help
                                </li>
                                  <li>
                                    Search for products by price, color, and more
                                </li>
                                  <li>
                                    Purchase product (checkout)
                                </li>
                                  <li>
                                    Track order status and shipping
                                </li>
                                  <li>
                                    View order history
                                </li>
                                  <li>
                                    Personalized offers & advertise special promotions
                                </li>
                                  <li>
                                    Ask questions (FAQs)
                                </li>
                                </ul>
                              </Fade>
                            </div>
                          </Fade>
                          <Fade bottom>
                            <div className="enterprise__tab__button--large">
                              <a className="button button__light button__block" onClick={this.stateBeneEc()}>Benefits</a>
                              <Fade bottom collapse when={this.state.showBeneEC}>
                                <ul>
                                  <li>
                                    Offer instant, real-time shopping experience across multiple channels
                                </li>
                                  <li>
                                    Allows simple and convenient purchases via message-based interactions
                                </li>
                                  <li>
                                    Provide relevant, actionable offers in real time, and personalized to a customer’s trends
                                </li>
                                  <li>
                                    Able to deliver alerts and updates regarding available inventory
                                </li>
                                  <li>
                                    Provide real-time, relevant offers and advice from a virtual ‘personal shopper’
                                </li>
                                </ul>
                              </Fade>
                            </div>
                          </Fade>
                        </div>
                      </Col>
                    </Row>
                  </Grid>

                </div>


                <div className="swiper-slide">
                  <Grid className="enterprise__tab">
                    <Fade>
                      <h5>As chatbot technology advances, more use cases are surfacing across nearly every sector imaginable. Recently, bots have begun being implemented in education to assist in a variety of automates tasks, and the foreseeable advantages are far-reaching.</h5>
                    </Fade>
                    <Row>
                      <Col md={6}>
                        <Fade>
                          <img src="/static/png/enterprise/eduphone.png" />
                        </Fade>
                      </Col>
                      <Col md={6}>
                        <div className="enterprise__tab__button">
                          <Fade bottom>
                            <div className="enterprise__tab__button--large">
                              <a className="button button__light button__block" onClick={this.stateFeatEd()}>Features you can offer</a>
                              <Fade bottom collapse when={this.state.showFeatED}>
                                <ul>
                                  <li>
                                    Assist with the filling of applications
                                </li>
                                  <li>
                                    Accept tuition payments
                                </li>
                                  <li>
                                    Assign course schedules
                                </li>
                                  <li>
                                    Provide answer to commonly-asked questions
                                </li>
                                  <li>
                                    Schedule meetings or phone calls
                                </li>
                                </ul>
                              </Fade>
                            </div>
                          </Fade>
                          <Fade bottom>
                            <div className="enterprise__tab__button--large">
                              <a className="button button__light button__block" onClick={this.stateBeneEd()}>Benefits</a>
                              <Fade bottom collapse when={this.state.showBeneED}>
                                <ul>
                                  <li>
                                    Provide information about deadlines, lesson plans, and curriculum

                                </li>
                                  <li>
                                    Able to issue educator evaluations and streamline the data analysis process
                                </li>
                                  <li>
                                    Help student understand difficult concepts in a way that feels as if they are being taught by another person
                                </li>
                                </ul>
                              </Fade>
                            </div>
                          </Fade>
                        </div>
                      </Col>
                    </Row>
                  </Grid>

                </div>

              </div>
            </div>

          </div>

        </TabbedHero>

        <HeroCard title="Success Story">
          <div style={divStyle}>
            <div className="swiper-container" id="story-swiper">

              <div className="swiper-wrapper">
                <div className="swiper-slide enterprise__success-story">
                  <div className="enterprise__success-story__item">
                    <img src="/static/png/enterprise/telkomsel.png" className="enterprise__success-story__item__icon" />
                    <div className="enterprise__success-story__item__img">
                      <img src="/static/png/enterprise/veronika.png"></img>
                    </div>
                    <div style={buttonStyle}>
                      <ButtonLink modifier="light" href="/story/veronika">
                        Read About Veronika
                    </ButtonLink>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="enterprise__success-story__item">
                    <img src="/static/png/enterprise/uni.png" className="enterprise__success-story__item__icon" />
                    <div>
                      <img src="/static/png/enterprise/jemma.png"></img>
                    </div>
                    <ButtonLink modifier="light" href="/story/jemma">
                      Read About Jemma
                    </ButtonLink>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="enterprise__success-story__item">
                    <img src="/static/png/enterprise/alfa.png" className="enterprise__success-story__item__icon" />
                    <div>
                      <img src="/static/png/enterprise/shalma.png"></img>
                    </div>
                    <ButtonLink modifier="light" href="/story/shalma">
                      Read About Shalma
                    </ButtonLink>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="enterprise__success-story__item">
                    <img src="/static/png/enterprise/bri.png" className="enterprise__success-story__item__icon" />
                    <div>
                      <img src="/static/png/enterprise/sabrina.png"></img>
                    </div>
                    <ButtonLink modifier="light" href="/story/sabrina">
                      Read About Sabrina
                    </ButtonLink>
                  </div>
                </div>
              </div>

              <div className="swiper-pagination"></div>

              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>

            </div>
          </div>
        </HeroCard>

        <HeroCard className="hero-card--blue enterprise__how-to" title="How to Get Your Chatbot">
          <div>
            {this.renderTabChatBot()}
          </div>
          <div className="enterprise__how-to__content">
            <div className="swiper-container" id="chatbot-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <h6>
                    Get in touch
                  </h6>
                  <h6>
                    Say hi to us and let’s discuss. We start everything by listening to your story and your objectives. This step allows us to learn about your business needs.
                  </h6>
                </div>

                <div className="swiper-slide">
                  <h6>
                    Concept Plan
                  </h6>
                  <h6>
                    We begin to gather information, then formulate the best strategy that will act as the blueprint of the project.
                  </h6>
                </div>

                <div className="swiper-slide">
                  <h6>
                    Try POC
                  </h6>
                  <h6>
                    We'll develop a custom proof of concept with our chatbot platform for you. So, you can try how far the capabilities is, values, and benefits of our chatbot solutions for your business.
                  </h6>
                </div>

                <div className="swiper-slide">
                  <h6>
                    Kick-off
                  </h6>
                  <h6>
                    After present project plans and objectives, the next phase is kickoff meeting. It'll take place after contracts have been signed and there's agreement on the statement of work, costs, and timeline.
                  </h6>
                </div>

                <div className="swiper-slide">
                  <h6>
                    Chatbot development
                  </h6>
                  <h6>
                    After understanding all the aspects of the project, we start designing and develop your chatbot. Starting with interior functionality, and then delving into chatbot personality, the bot scripts are coded and developed cumulatively.
                  </h6>
                </div>

                <div className="swiper-slide">
                  <h6>
                    Testing and Review
                  </h6>
                  <h6>
                    Test the bot and provide feedback as to where the bot got confused or stuck. This step also includes the final QA of the bot, to ensure your bot saying the right thing at the right time.
                  </h6>
                </div>

                <div className="swiper-slide">
                  <h6>
                    Launch
                  </h6>
                  <h6>
                    Once the bot is tested and deployed, we'll orchestrate the smooth launch of your an intelligent assistant.
                  </h6>
                </div>

                <div className="swiper-slide">
                  <h6>
                    Continuous Support
                  </h6>
                  <h6>
                    Whether you're having additional features, planning on retention campaign, or simply need to discuss about chatbot best practices, we will always be there every step of the way
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </HeroCard>

        <HeroCard className="hero-card enterprise__platform" title="Technology Behind Our Solutions">
          <div>
            <h6>
              Kata Platform gives enterprises the rich features needed to create high-value chatbots without development complexity
            </h6>
          </div>
          <div>
            <img src="/static/png/enterprise/laptop.png" />
          </div>
          <ButtonLink modifier="default" href="/enterprise">
            See Our Technology
          </ButtonLink>

        </HeroCard>

        <Grid className="enterprise__get-in-touch" fluid>
          <Row>
            <Col md={6} className="enterprise__get-in-touch__col enterprise__get-in-touch__background-blue" >
              <Image src="/static/png/enterprise/star.svg" />
              <h5>
                Design your smart assistant today. Grow your business more further
            </h5>
              <ButtonLink modifier="light" href="/enterprise">
                Get in touch
          </ButtonLink>
            </Col>
            <Col md={6} className="enterprise__get-in-touch__col enterprise__get-in-touch__background-dark-blue">
              <Image src="/static/png/enterprise/connect.svg" />
              <h5>
                Expand your offering. Create the best AI solutions for your clients
            </h5>
              <ButtonLink modifier="light" href="/enterprise">
                Become a partner
          </ButtonLink>
            </Col>
          </Row>
        </Grid>

        <Footer localeService={this.props.localeService} />
      </div >
    );
  }

  renderTabMenu() {
    return (
      <Tab>
        <TabItem item="Consumer Engagement" modifier={this.state.currentIndexGrowth == 0 ? "tab-item--selected" : undefined} onClick={this.tabSwipeClick(0)} />
        <TabItem item="Banking Assistant" modifier={this.state.currentIndexGrowth == 1 ? "tab-item--selected" : undefined} onClick={this.tabSwipeClick(1)} />
        <TabItem item="HR Bot" modifier={this.state.currentIndexGrowth == 2 ? "tab-item--selected" : undefined} onClick={this.tabSwipeClick(2)} />
        <TabItem item="Customer Service" modifier={this.state.currentIndexGrowth == 3 ? "tab-item--selected" : undefined} onClick={this.tabSwipeClick(3)} />
        <TabItem item="E-Commerce Bot" modifier={this.state.currentIndexGrowth == 4 ? "tab-item--selected" : undefined} onClick={this.tabSwipeClick(4)} />
        <TabItem item="Educational" modifier={this.state.currentIndexGrowth == 5 ? "tab-item--selected" : undefined} onClick={this.tabSwipeClick(5)} />
      </Tab>
    );
  }

  renderTabChatBot() {
    return (
      <ul>
        <li className={this.state.currentIndexHowto == 0 ? "enterprise__how-to__list-selected" : undefined} onClick={this.botSwipeClick(0)}>
          <img src="/static/png/enterprise/icochat.svg" width="90px" />
        </li>
        <li className={this.state.currentIndexHowto == 1 ? "enterprise__how-to__list-selected" : undefined} onClick={this.botSwipeClick(1)}>
          <img src="/static/png/enterprise/icoconn.svg" width="90px" />
        </li>
        <li className={this.state.currentIndexHowto == 2 ? "enterprise__how-to__list-selected" : undefined} onClick={this.botSwipeClick(2)}>
          <img src="/static/png/enterprise/icocode.svg" width="90px" />
        </li>
        <li className={this.state.currentIndexHowto == 3 ? "enterprise__how-to__list-selected" : undefined} onClick={this.botSwipeClick(3)}>
          <img src="/static/png/enterprise/icohand.svg" width="90px" />
        </li>
        <li className={this.state.currentIndexHowto == 4 ? "enterprise__how-to__list-selected" : undefined} onClick={this.botSwipeClick(4)}>
          <img src="/static/png/enterprise/icobrain.svg" width="90px" />
        </li>
        <li className={this.state.currentIndexHowto == 5 ? "enterprise__how-to__list-selected" : undefined} onClick={this.botSwipeClick(5)}>
          <img src="/static/png/enterprise/icophone.svg" width="90px" />
        </li>
        <li className={this.state.currentIndexHowto == 6 ? "enterprise__how-to__list-selected" : undefined} onClick={this.botSwipeClick(6)}>
          <img src="/static/png/enterprise/icorocket.svg" width="90px" />
        </li>
        <li className={this.state.currentIndexHowto == 7 ? "enterprise__how-to__list-selected" : undefined} onClick={this.botSwipeClick(7)}>
          <img src="/static/png/enterprise/icotools.svg" width="90px" />
        </li>
      </ul>
    );
  }

  tabSwipeClick = (e: number) => () => {
    tabSwiper.slideTo(e, 400);
    this.setState({ currentIndexGrowth: e });
  }

  botSwipeClick = (e: number) => () => {
    chatBotSwiper.slideTo(e, 400);
    this.setState({ currentIndexHowto: e });
  };

  storySwiper = (e: number) => () => {
    storySwiper.slideTo(e, 400)
  }
  stateFeatCe = () => () => {
    this.setState({ showFeatCE: !this.state.showFeatCE });
  }
  stateBeneCe = () => () => {
    this.setState({ showBeneCE: !this.state.showBeneCE });
  }
  stateFeatBa = () => () => {
    this.setState({ showFeatBA: !this.state.showFeatBA });
  }
  stateBeneBa = () => () => {
    this.setState({ showBeneBA: !this.state.showBeneBA });
  }
  stateFeatHr = () => () => {
    this.setState({ showFeatHR: !this.state.showFeatHR });
  }
  stateBeneHr = () => () => {
    this.setState({ showBeneHR: !this.state.showBeneHR });
  }
  stateFeatCs = () => () => {
    this.setState({ showFeatCS: !this.state.showFeatCS });
  }
  stateBeneCs = () => () => {
    this.setState({ showBeneCS: !this.state.showBeneCS });
  }
  stateFeatEc = () => () => {
    this.setState({ showFeatEC: !this.state.showFeatEC });
  }
  stateBeneEc = () => () => {
    this.setState({ showBeneEC: !this.state.showBeneEC });
  }
  stateFeatEd = () => () => {
    this.setState({ showFeatED: !this.state.showFeatED });
  }
  stateBeneEd = () => () => {
    this.setState({ showBeneED: !this.state.showBeneED });
  }

}
export default withLocaleService(Enterprise);

