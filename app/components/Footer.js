import React from 'react';
import { browserHistory, Link } from 'react-router';
import Modal from './Modal';
import CutImg from '../img/cutIcon.png'
import LogImg from '../img/footerlog.png';
import UniliverImg from '../img/footerUniliver.png';
import LineImg from '../img/footerLine.png';
import { Scrollbars } from 'react-custom-scrollbars';

import Popup from 'react-popup';
import styles from '../styles/App.css';



class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      privacyModalIsOpen: false,
      cookieModalIsOpen: false
    }

  }
  openModal(e,val){
    if(e == 'privacyPolicy'){
      this.setState({privacyModalIsOpen: true});
    } else if(e == 'termsCondi'){
      this.setState({modalIsOpen: true});
    } else if(e == 'cookiePolicy') {
      console.log('cookiePolicy');
      this.setState({
        cookieModalIsOpen: true
      });
    }
  }
  closeModal(){
    this.setState({
      modalIsOpen: false,
      privacyModalIsOpen: false,
      cookieModalIsOpen: false
    });
  }
  afterOpenModal(){
    console.log('afterOpenModal');
    if ( window.hasOwnProperty('parentIFrame') ) {
      console.log('$("#trigger"):-- ',$("#trigger"));
        if($("#trigger").length){
          window.parentIFrame.scrollTo( $("#trigger").width(),  $("#trigger").height() );
        }
        if($("#triggerP").length){
          window.parentIFrame.scrollTo( $("#triggerP").width(),  $("#triggerP").height() );
        }
        if($("#triggerC").length){
          window.parentIFrame.scrollTo( $("#triggerC").width(),  $("#triggerC").height() );
        }
    }
    // this.refs.subtitle.style.color = '#f00';
  }
  componentDidMount(){
  }
  componentDidUpdate(){
  }
  forPrivacyModal(){
    this.setState({
      modalIsOpen: false,
      privacyModalIsOpen: false,
      cookieModalIsOpen: false
    }, function(){
      var l = document.getElementById('triggerP');
      l.click();
    })
  }
  showModal(){
    this.refs.modal.show();
  }
  hideModal(){
    this.refs.modal.hide();
  }
  render(){
    return(
        <div className={styles.footerContant}>
          <div className={styles.textFooter}>
          <ul>
              <li className={styles.textFooterT}>
                <div className={styles.textFooterLog}>
                  <p><img src={LogImg} /></p>
                </div>
              </li>
              <li className={styles.textFooterT+" "+styles['lineWidth']}>
                      <img src={LineImg} />
              </li>
              <li className={styles.textFooterT}>
                <div className={styles.textFooterTxt}>
                  <p><a id="trigger"
                name="termsCondi" onClick={this.openModal.bind(this, 'termsCondi')}>
                  Terms and Conditions</a>
                  <ModalPopUp closeModal={this.closeModal}
                    modalIsOpen={this.state.modalIsOpen}
                    afterOpenModal={this.afterOpenModal}
                    closeModal={this.closeModal.bind(this)}
                    forPrivacyModal={this.forPrivacyModal.bind(this)}/></p>
                  <p><a id="triggerP"
                  name="privacyPolicy" onClick={this.openModal.bind(this, 'privacyPolicy')}>
                  Privacy Policy</a>
                  <ModalPopUp closeModal={this.closeModal}
                    privacyModalIsOpen={this.state.privacyModalIsOpen}
                    afterOpenModal={this.afterOpenModal}
                    closeModal={this.closeModal.bind(this)}/></p>
                  <p><a id="triggerC"
                  name="cookiePolicy" onClick={this.openModal.bind(this, 'cookiePolicy')}>
                  Cookie Policy</a>
                  <ModalPopUp closeModal={this.closeModal}
                    cookieModalIsOpen={this.state.cookieModalIsOpen}
                    afterOpenModal={this.afterOpenModal}
                    closeModal={this.closeModal.bind(this)}/></p>
                </div>
              </li>
              <li className={styles.textFooterT+" "+styles['lineWidth']}>
                      <img src={LineImg} />
              </li>
              <li className={styles.textFooterT}>
                <div className={styles.textFooterUniliver}>
                  <p><img src={UniliverImg} /><span>© 2017 Unilever</span></p>
                </div>
              </li>
            </ul>
          </div>
      </div>
    );
  }
}

class ModalPopUp extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      cookies: false,
      usecookies: false,
      usecookies1: false,
      partyCookie: false,
      deleteCookie: false,
      privacyNotice: false,
      consent: false,
      children: false,
      infoCollect: false,
      personalInfo: false,
      mms: false,
      sharePInfo: false,
      transferPInfo: false,
      Safeguarding: false,
      privacy_rights: false,
      otherPolicy: false
    }

  }

  toggleParagraph( val, e ){
    console.log('val:- ',val,'e_---', e);
    this.setState({
      [val]: !this.state[val]
    })
  }


  render(){
    let that = this;
            if(that.props.modalIsOpen){
                return(
                  <Modal
                    id="modalVijaya"
                    isOpen={this.props.modalIsOpen}
                    appElement={document.body}
                    onAfterOpen={this.props.afterOpenModal}
                    onRequestClose={this.props.closeModal}
                    className={styles.popUpContent}
                    contentLabel="Example Modal" classID={styles.popupSect}>

                    <h1 className={styles.headText}>
                    DOVE Terms and Conditions </h1>
                    <button onClick={this.props.closeModal.bind(this)}
                    className={styles.btnModal}><img src={CutImg} /></button>
                    <br/>
                    <h2 className={styles.subhead}>
                    1. Applicant Qualifications</h2>
                    <p className={styles.subText}>
                    Welcome to Dove Casting. This document
                    sets out our terms of use and terms of
                    conduct (Code of Conduct).</p>
                    <p className={styles.subText}>
                    This website is brought to you by Dove Limited.
                    For more information on Dove Casting please  <a className={styles.underline} target='_blank' href="http://www.doveonlinecasting.com/">click here.</a>
                    </p>
                    <br/>
                    <h2 className={styles.subhead}>2. Eligibility</h2>
                    <p className={styles.subText}>
                    Dove Casting is designed for individuals 18 years of age or older. Please be aware of this age limit. As an applicant you will uphold this Code of Conduct and are liable for all activities and content you post.</p>
                    <br/>
                    <h2 className={styles.subhead}>
                    3. Registration and Information Dove Limited may Collect</h2>
                    <p className={styles.subText}>In order to use the website and to create an account you must register to use it with a valid email address and create a password.</p>
                    <br/>
                    <p className={styles.subText}>If you register for Dove Casting, we will collect:</p>
                    <p className={styles.subTextright}>• Your user name and e-mail address when you register;</p>
                    <p className={styles.subTextright}>• Year of birth;</p>
                    <p className={styles.subTextright}>• Gender;</p>
                    <p className={styles.subTextright}>• Nationality;</p>
                    <p className={styles.subTextright}>• Occupation;</p>
                    <p className={styles.subTextright}>• Email;</p>
                    <p className={styles.subTextright}>• Phone number;</p>
                    <p className={styles.subTextright}>• Hair information;</p>
                    <p className={styles.subTextright}>• Skin information;</p>
                    <p className={styles.subTextright}>• Agent details;</p>
                    <p className={styles.subTextright}>• Beauty routine;</p>
                    <p className={styles.subTextright}>• Your photography uploaded by you to the campaign</p>
                    <br/>
                    <h2 className={styles.subhead}>4. Information Collected and Use</h2>
                    <p className={styles.subTextright}>• We collect and use personal information in order to: </p>
                    <p className={styles.subTextright}>• Process applications submitted by you;</p>
                    <p className={styles.subTextright}>• Identity features, stories and habits of our applicants to enable match our campaign needs and to match applicants with specific products;</p>
                    <p className={styles.subTextright}>• Contact and select women to be featured on Dove communication assets (TVC, Print, POS, Dove Website, Social Media Accounts, Internal Communications);</p>
                    <p className={styles.subTextright}>• Send news, newsletters and updates via email or telephone for campaigns, offers, promotions, new products or related products we launch if you have positively consented to this service;</p>
                    <p className={styles.subTextright}>• Administer or otherwise carry out our obligations in relation to any agreement you have with us; and</p>
                    <p className={styles.subTextright}>• Respond to requests submitted by you.</p>
                    <br/>
                    <h2 className={styles.subhead}>5. Storage and Processing</h2>
                    <p className={styles.subText}>As part of the services offered to you through this website, the information you provide to us will be stored in United Stated of America.</p>
                    <p className={styles.subText}>We may also transfer your personal information to servers located outside the country in which you live or to affiliates or other trusted third parties based in other countries so that they may process personal information on our behalf. By registering for this programme, providing your consent or otherwise providing Unilever with personal information, you agree to us doing so in accordance with our Terms and Conditions, our Privacy Policy and applicable data protection laws and regulations.</p>
                    <br/>
                    <h2 className={styles.subhead}>6. Third Parties</h2>
                    <p className={styles.subText}> Data is collected and stored by third parties who are acting as agents for Dove Global. The approved third party will not make any use of the data other than in ways prescribed by Dove Global and any such use will be in accordance with our <a onClick={this.props.forPrivacyModal}
                    className={styles.underline}>Privacy Policy.</a>
                    </p>.
                    <br/>
                    <h2 className={styles.subhead}>7. Changes to Your Information</h2>
                    <p className={styles.subText}>Dove Limited will use reasonable endeavours to update changes and correct any errors or omissions as soon as practicable after being notified of them. However, we do not accept liability for any errors or omissions.</p>
                    <p className={styles.subText}>You may amend or delete your photographs, video and personal information at any time by contacting dove@heathermarchcasting.com with the following subject “Dove Online Casting: Update data”.</p>
                    <p className={styles.subText}>You can unsubscribe to our newsletter at any time. To opt-out, you can email us at dove@heathermarchcasting.com with the following subject “Dove Online Casting: Opt Out”.</p>
                    <br/>
                    <h2 className={styles.subhead}>8. Prohibited Uses</h2>
                    <p className={styles.subText}>Violations of the Code of Conduct
                    may result in the termination of access to services or deletion
                    of content without notice.</p>
                    <p className={styles.subText}>You will not upload or otherwise
                    use with the service any content that:</p>
                    <p className={styles.subTextright}> • incites, advocates, or expresses pornography, nudity, obscenity, vulgarity, profanity, hatred, bigotry, racism, or gratuitous violence.</p>
                    <p className={styles.subTextright}> • misrepresents the source of anything
                    you post, including impersonation of another individual or entity.</p>
                    <p className={styles.subTextright}>• is intended to harm or exploit
                    minors in any way.</p>
                    <p className={styles.subTextright}> • invades anyone's privacy by attempting
                    to harvest, collect, store, or publish private or personally identifiable
                    information, such as passwords, account information, credit card numbers,
                    addresses, or other contact information without their foreknowledge and
                    willing consent.</p>
                    <p className={styles.subTextright}> • is illegal or violates any local and national
                    laws that apply to your location; including but not limited to child
                    pornography, illegal drugs, copyright material and intellectual property
                    not belonging to you.</p>
                    <p className={styles.subTextright}> • is intended to threaten, stalk,
                    defame, defraud, degrade, victimize, or intimidate an individual
                    or group of individuals for any reason; including on the basis of
                    age, gender, disability, ethnicity, sexual orientation, race, or
                    religion; or to incite or encourage any one else to do so.</p>
                    <p className={styles.subTextright}> • intends to harm or disrupt another
                    applicant's computer or would allow others to illegally access software
                    or bypass security on Web sites, or servers, including but not limited to
                    spamming.</p>
                    <p className={styles.subTextright}> • attempts to impersonate a Unilever
                    employee, agent, manager, host, another applicant, or any other person
                    though any means.</p>
                    <br/>
                    <h2 className={styles.subhead}>9. Termination and Cancellation</h2>
                    <p className={styles.subText}> Unilever reserves the right, at its sole discretion, to review and remove applicant-created services and content at will and without notice, and delete postings or ban participants that are deemed objectionable.</p>
                    <br/>
                    <h2 className={styles.subhead}>10. Termination and Cancellation</h2>
                    <p className={styles.subText}> We encourage our Applicants to not share information that others could use to harm you.</p>
                    <p className={styles.subText}> Unilever is not responsible for the content or activities of any applicant-created submission.  </p>
                    <p className={styles.subText}> Unilever reserves the right to amend or change our Terms and Conditions and this Code of Conduct at any time without notice, and encourage you to periodically review these guidelines to ensure you are in compliance.</p>
                    <br/>
                    <p className={styles.subText}> Thank you for joining Dove Casting and honoring this Code of Conduct!</p>
                  </Modal>
                )
              } else if (this.props.privacyModalIsOpen) {
                return(
                  <Modal
                    isOpen={this.props.privacyModalIsOpen}
                    appElement={document.body}
                    onAfterOpen={this.props.afterOpenModal}
                    onRequestClose={this.props.closeModal}
                    className={styles.popUpContent}
                    contentLabel="Example Modal" classID={styles.popupSect}>
                    <h1 className={styles.headText}>Privacy Policy</h1>
                    <br/>
                    <p className={styles.textunderline}>UNILEVER PRIVACY PRINCIPLES</p>
                    <p className={styles.subText}>Unilever takes privacy seriously.
                    The following principles underpin our approach to respecting your
                    privacy:</p>
                    <p className={styles.subText}>1. We value the trust that you place
                    in us by giving us your personal information. We will always use your
                    personal information in a way that is fair and worthy of that trust.</p>
                    <p className={styles.subText}>2. We will provide clear information about
                    how we use your personal information. We shall always be transparent with
                    you about what information we collect, what we do with it, with whom we
                    share it and who you should contact if you have any concerns.</p>
                    <p className={styles.subText}>3. We will take all reasonable steps to
                    protect your information from misuse and keep it secure.</p>
                    <p className={styles.subText}>4. We will comply with all applicable
                    data protection laws and regulations and we will co-operate with data
                    protection authorities. In the absence of data protection legislation,
                    we will act in accordance with generally accepted principles governing
                    data protection.</p>
                    <br/>
                    <p className={styles.textunderline}>UNILEVER PRIVACY NOTICE</p>
                    <p className={styles.subText}>This Privacy Notice explains the types of
                    personal information we collect and how we use, disclose and protect that
                    information</p>
                    <p className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'privacyNotice')}>What does this Privacy Notice apply to?</p>
                    {this.state.privacyNotice ? <span><p className={styles.subText}>This Privacy Notice applies to personal
                    information collected by the Unilever Group of companies in connection with
                    the services they offer. Find out more about the Unilever Group at </p>
                    <p className={styles.subText}>.This includes information collected offline
                    through our Consumer Engagement Centres, direct marketing campaigns,
                    sweepstakes and competitions, and online through our websites, applications
                    and branded pages on third party platforms and applications accessed or used
                    through such websites or third party platforms </p>
                    <p className={styles.subText}>This Privacy Notice also applies to targeted
                    Unilever content, including offers and advertisements for Unilever products
                    and services, which we (or a service provider acting on our behalf) may send
                    to you on third party websites, platforms and applications </p>
                    <p className={styles.subText}>based on your Site Usage Information
                    (as defined below). These Third Party Sites may have their own privacy
                    policies and terms and conditions. We encourage you to read them before
                    using those Third Party Sites</p>
                    <p className={styles.subText}>This Privacy Notice is hereby incorporated
                    into and forms part of the terms and conditions of use of the applicable
                    Unilever Site. For information about the Unilever Group company responsible
                    for protecting your personal information, see </p>
                    <p className={styles.subText}>This Privacy Notice is hereby incorporated
                    into and forms part of the terms and conditions of use of the applicable
                    Unilever Site. For information about the Unilever Group company responsible
                    for protecting your personal information, see </p></span> : null}
                    <p className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'consent')}>Your consent</p>
                    {this.state.consent ? <span><p className={styles.subText}>By using a Unilever Site, you are consenting
                    to the relevant Unilever Group company collecting, using and disclosing your
                    personal information in accordance with this Privacy Notice. If you do not
                    agree to the collection, use and disclosure of your personal information in
                    this way, please do not use the Unilever Sites or otherwise provide the
                    relevant Unilever Group company with your personal information.</p>
                    <p className={styles.subText}>
					          <br/>
                    Unilever will only collect, use or disclose your personal information where
                    it is fair and lawful to do so.  In most cases, we will ask for your consent
                    explicitly but, in some cases, we may infer consent from your actions and behaviour.
                    We may ask you to provide additional consent if we need to use your personal
                    information for purposes not covered by this Privacy Notice.  You are not
                    obliged to provide such consent but if you decide not to then your participation in certain
                    activities may be restricted.  If you provide additional consent, the terms of that consent
                    shall prevail in the event of any conflict with the terms of this Privacy Notice.
				            </p>
                    <p className={styles.subText}>	Please note, however, that we may process your personal
                    information without consent if we have a legitimate reason to do so, provided that such
                    use will not have a prejudicial effect on your own rights,freedoms and interests.  Any such
                    use shall be in accordance with the Unilever Privacy Principles set out above.</p></span> : null}
                    <p className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'children')}>Children</p>
                    {this.state.children ? <span><p className={styles.subText}>The majority of Unilever Sites are designed and intended
                    for use by adults. Where a Unilever Site is intended for use by a younger audience, we
                    will obtain consent from a parent or guardian before we collect personal information
                    where we feel it is appropriate to do so or where it is required by applicable laws
                    and regulations (the age at which consent is necessary varies from country to country).
                    If you are a child over the age where parental consent is required in your country,
                    you should review the terms of this Privacy Notice with your parent or guardian to make
                    sure you understand and accept them.</p>
                    <p className={styles.subText}>If we discover that we have collected information from a
                    child without consent from a parent or guardian where such consent should have been obtained,
                    we will delete that information as soon as possible.</p>
                    <p className={styles.subText}>Access to certain parts of the Unilever Sites and/or eligibility to
                    receive prizes, samples or other rewards may be limited to users over a certain age.
                    We may use your personal information to carry out age verification checks and enforce
                    any such age restrictions.</p></span> : null}
                    <p className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'infoCollect')}> What information do we collect?</p>
                    {this.state.infoCollect ? <p className={styles.subText}>In this Privacy Notice, your "personal information"
                    means information or pieces of information that could allow you to be identified.
                    This typically includes information such as your name, address, screen name, profile
                    picture, email address, and telephone number, but can also include other information
                    such as IP address, shopping habits, information about your lifestyle or preferences
                    such as your hobbies and interests. We may collect personal information about you
                    from different sources, including:</p> : null}
                    <p className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'personalInfo')}>How do we use your personal information?</p>
                    {this.state.personalInfo ? <span><p className={styles.subText}>We may use your personal information to:</p>
                    <p className={styles.textunderline}>Information you give us directly</p>
                    <br/>
                    <p className={styles.subText}>We may collect information from you directly when
                    you provide us with personal information, e.g. when you register for prize draws
                    or competitions, sign up to receive information, use applications, buy a product or service
                    from us,fill out a survey, or make a comment or enquiry.
                    The types of information we may collect from you directly include your:</p>
                    <li className={styles.subText}>name</li>
                    <li className={styles.subText}>address</li>
                    <li className={styles.subText}>email address</li>
                    <li className={styles.subText}>user name</li>
                    <li className={styles.subText}>telephone number</li>
                    <li className={styles.subText}>credit card or other payment information</li>
                    <li className={styles.subText}>age</li>
                    <li className={styles.subText}>date of birth</li>
                    <li className={styles.subText}>gender</li>
                    <li className={styles.subText}>user-generated content, posts and other content you
                    submit to Unilever Sites</li>
                    <li className={styles.subText}>any other personal information you voluntarily
                    provide to us</li>
                    <br/>
                    <p className={styles.textunderline}>Information collected automatically when you
                    use the Unilever Sites</p>
                    <p className={styles.subText}>We (and third party service providers acting on our behalf)
                    use cookies and other tools (such as web analytic tools and pixel tags) to automatically
                    collect information about you when you use Unilever Sites, subject to the terms of this
                    Privacy Notice and applicable data laws and regulations. The types of information
                    collected automatically may include:</p>
                    <br/>
                    <li className={styles.subText}>information about the type of browser you use</li>
                    <li className={styles.subText}>details of the web pages you have viewed</li>
                    <li className={styles.subText}>your IP address</li>
                    <li className={styles.subText}>the hyperlinks you have clicked</li>
                    <li className={styles.subText}>your user name, profile picture, gender, networks and
                    any other information you choose to share when using Third Party Sites (suchclass as when
                    you use the “Like” functionality on Facebook or the +1 functionality on Google+)</li>
                    <li className={styles.subText}>the websites you visited before arriving at a Unilever Site</li>
                    <br/>
                    <p className={styles.textunderline}> Information we collect from other sources</p>
                    <p className={styles.subText}>We may receive personal information about you from other
                    legitimate sources,including information from commercially available sources,
                    such as public databases and data aggregators, and information from third parties.
                    The types of personal information that we may collect from such sources include your:</p>
                    <br/>
                    <li className={styles.subText}>name</li>
                    <li className={styles.subText}>street address</li>
                    <li className={styles.subText}>age</li>
                    <li className={styles.subText}>your shopping habits</li>
                    <li className={styles.subText}>preferences and information about your lifestyle such as
                    your hobbies and interests</li>
                    <li className={styles.subText}>publicly available information such as user-generated
                    content, blogs and postings, as permitted by law</li>
                    <li className={styles.subText}>Online advertising</li>
                    <p className={styles.subText}>We may share Site Usage Information with trusted third parties
                    (e.g. advertisers, advertising agencies, advertising networks, data exchanges, etc.)
                    in order to offer you tailored content, including more relevant advertising for products
                    and services which may be of interest to you.  These third parties may sIn some countries,
                    we have adopted the use of industry-recognised icons (e.g. the AdChoices icon)
                    which may appear alongside targeted advertisements that we (or a service provider acting on our behalf)
                    send to you based on your Site Usage Information.  You may click on these icons to receive more
                    information about the collection and use of your information or to opt-out of such collection
                    in future.  Please note that even if you opt out, you may still receive advertisements from
                    Unilever that are not customized based on your Site Usage Information.et and access
                    their own cookies, web beacons and similar tracking technologies on your device in
                    order to help us deliver customized content and advertising to you when you visit
                    Unilever Sites or Third Party Sites.
                    <br/> <br/>
                    In some countries, we have adopted the use of industry-recognised icons (e.g. the AdChoices icon)
                    which may appear alongside targeted advertisements that we (or a service provider acting on our behalf)
                    send to you based on your Site Usage Information.  You may click on these icons to receive more
                    information about the collection and use of your information or to opt-out of such collection
                    in future.  Please note that even if you opt out, you may still receive advertisements from
                    Unilever that are not customized based on your Site Usage Information.
                    <br/><br/>
                    Depending on your location, there may be other solutions to help you control your online
                    behavioural advertising preferences (such as whether certain third parties may collect and
                    use your Site Usage Information for targeted advertising purposes).
                    For example, in Europe the website
                    <a target='_blank' href="http://www.youronlinechoices.com"> www.youronlinechoices.com </a>
                    allows you to choose which companies can deliver customized ads while in the US you may use the
                    <a target='_blank' href="http://www.networkadvertising.org/choices/"> Network Advertising Initiative’s
                    Opt-Out Tool </a> and the
                    <a target='_blank' href="http://www.aboutads.info/choices/"> Digital Advertising Alliance’s Opt-Out Tool</a>.
                    <br/><br/>
                    </p>
                    <br/>
                    <p className={styles.subText}>We may use your personal information to:</p>
                    <li className={styles.subText}>improve our products and your experience on the Unilever
                    Sites. <a href="#OLE_LINK4">Find out more.</a></li>
                    <li className={styles.subText}>evaluate the use of the Unilever Sites, products and services</li>
                    <li className={styles.subText}>analyse the effectiveness of our advertisements, competitions and
                    promotions</li>
                    <li className={styles.subText}>personalise your website experience, as well as to evaluate
                    (anonymously and in the aggregate) statistics on website activity,
                    such as what time you visited it, whether you’ve visited it before and what site referred
                    you to it</li>
                    <li className={styles.subText}>make the Unilever Sites easier to use and to better tailor
                    the Unilever Sites and our products to your interests and needs</li>
                    <li className={styles.subText}>help speed up your future activities and experience on the
                    Unilever Sites. For example, a site can recognise that you have provided your
                    personal information and will not request the same information a second time</li>
                    <li className={styles.subText}>collect information about the device you are using to view
                    the Unilever Site,such as your IP address or the type of Internet browser or operating system
                    you are using, and link this to your personal information so as to ensure that the Unilever
                    Sites present the best web experience for you</li>
                    <p className={styles.subText}>to contact you regarding products and services which may be of
                    interest to you, provided you have given us consent to do so or you have previously requested a
                    product or service from us and the communication is relevant or related to that prior request and
                    made within any timeframes established by applicable laws. </p>
                    <p className={styles.subText}>We may use your personal information to:</p>
                    <li className={styles.subText}>suggest products or services (including those of relevant third
                    parties) which we think may be of interest to you</li>
                    <li className={styles.subText}>offer you the opportunity to take part in competitions or
                    promotions</li>
                    <p className={styles.subText}>You can opt out of receiving communications from us at any time.
                    Any direct marketing communications that we send to you will provide the information and
                    means necessary to opt out.</p>
                    <p className={styles.subText}>to provide you with products or services that you request
                    from us.</p>
                    <p className={styles.subText}>We may use your personal information:</p>
                    <li className={styles.subText}>for the purposes of competitions or promotions that you have entered</li>
                    <li className={styles.subText}>to send you information, products or samples that you have
                    requested</li>
                    <li className={styles.subText}>to respond to your queries or comments</li>
                    <p className={styles.subText}>In order to protect information from accidental or malicious
                    destruction, when we delete information from our services we may not immediately delete
                    residual copies from our servers or remove information from our backup systems.
                    <br/></p></span>: null}

                    <h2 className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'mms')}>Mobile Message Services</h2>
                    {this.state.mms ? <span><br/>
                    <p className={styles.subText}>We may make available a service through which you can receive
                    text or other types of messages from Unilever such as SMS (short message service), MMS
                    (multimedia message service) or EMS (enhanced message service) on your wireless or mobile
                    device (“Mobile Message Service”). If you subscribe to one of our Mobile Message Services,
                    you agree to receive such messages from Unilever at the address or mobile number you provide
                    for that purpose (unless and until you have elected to opt out of receiving such messages
                    by following the instructions in the </p>
                    <br/>
                    <p className={styles.subText}>You understand that your wireless carrier’s standard rates
                    apply to these messages,and that you may change your mind at any time by following the
                    instructions in the Your privacy rights and who to contact
                    section below. If fees are charged to your wireless account invoice,
                    you agree that we may collect from you and provide your carrier with your applicable
                    payment information in connection therewith. You represent that you are the owner or
                    authorized user of the wireless device you use to sign up for the Mobile Message Service,
                    and that you are authorized to approve the applicable charges. In addition to meeting certain
                    age restrictions and any other terms and conditions associated with each Mobile Message Service,
                    you may be required to register personal information such as your name, text message, wireless
                    address or mobile phone number. We may also obtain the date, time and content of your
                    messages in the course of your use of the Mobile Message Service. We will use the information
                    we obtain in connection with our Mobile Message Service in accordance with this Privacy Notice.
                    Please note, however, that your wireless carrier and other service providers may also collect
                    data about your wireless device usage, and their practices are governed
                    by their own policies.</p>
                    <p className={styles.subText}>You acknowledge and agree that the Mobile Message Service is
                    provided via wireless systems which use radios (and other means) to transmit communications
                    over complex networks. We do not guarantee that your use of the Mobile Message Service will be
                    private or secure, and we are not liable to you for any lack of privacy or security you may
                    experience.You are fully responsible for taking precautions and providing security measures
                    best suited for your situation and intended use of the Mobile Message Service. We may also
                    access the content of your wireless and/or mobile phone account with your carrier for the purpose of
                    identifying and resolving technical problems and/or service-related complaints.</p></span> : null}
                    <h2 className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'sharePInfo')}>Who do we share your personal information with?</h2>
                    {this.state.sharePInfo ? <span><p className={styles.subText}>Unilever is one of the world's leading fast moving consumer
                    goods companies with products sold in
                    over 190 countries (more information about Unilever can be found at:
                    <a target='_blank' href="http://www.unilever.com/aboutus/"> http://www.unilever.com/aboutus/ </a>
                    . As a global business, Unilever we may share your personal information with Unilever Group
                    companies and trusted third parties based outside the country in which you live so that they may
                    process that data on our behalf. <a className={styles.findMore} href="#OLE_LINK4">Find out
                    more.</a></p>
                    <p className={styles.subText}>We may also share your personal information with companies,
                    organisations or individuals outside of the Unilever Group if we believe that disclosure of
                    the information is necessary for legal reasons. <a className={styles.findMore} href="#OLE_LINK4">
                    <br/>
                    </a></p></span> : null}
                    <h2 className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'transferPInfo')}>Transferring your personal information</h2>
                    {this.state.transferPInfo ? <span><br/>
                    <p className={styles.subText}>We may transfer your personal information to servers located
                    outside the country in which you live or to affiliates or other trusted third parties
                    based in other countries so that they may process personal information on our behalf.
                    By using a Unilever Site or otherwise providing Unilever with personal information,
                    you agree to us doing so in accordance with the terms of this Privacy Notice and
                    applicable data protection laws and regulations.
                    <br/>
                    You should be aware that many countries do not afford the same legal protection to
                    personal information as you might enjoy in your country of origin. While your personal
                    information is in another country, it may be
                    accessed by the courts, law enforcement and national security authorities in that country in
                    accordance with its laws. Subject to such lawful access requests, we promise that anyone processing
                    your personal information outside your country of origin is required to implement measures to protect
                    it and is only entitled to process it in accordance with Unilever’s instructions.</p>
                    <br/></span> : null}

                    <h2 className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'Safeguarding')}>Safeguarding your personal information</h2>
                    {this.state.Safeguarding ? <p className={styles.subText}>We take all reasonable precautions to keep your personal
                    information secure and require any third parties that handle or process your personal
                    information for us to do the same. Access to your personal information is restricted
                    to prevent unauthorised access, modification or misuse and is only permitted among
                    our employees and agents on a need-to-know basis.</p> : null}
                    <h2 className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'privacy_rights')}>Your privacy rights and who to contact</h2>
                    {this.state.privacy_rights ? <span><p className={styles.subText}>If you have any questions, comments or concerns
                    about how we handle your personal information,then you may contact us by clicking the
                    Contact Us link on the Unilever Site that directed you to this Privacy Notice.Your
                    request will be directed to the appropriate Unilever group company.Alternatively,
                    please go to <a target='_blank' href="http://www.unilever.com/">www.unilever.com</a>, select
                    the appropriate country and click on the Contact Us
                    link. Your request will be directed to the appropriate Unilever Group company.</p>
                    <p className={styles.subText}>You have the right to tell us if you:</p>
                    <li className={styles.subText}>don't want to be contacted in the future by us</li>
                    <li className={styles.subText}>would like a copy of the personal information which
                    we hold about you</li>
                    <li className={styles.subText}>would like us to correct, update, or delete your
                    personal information in our records</li>
                    <li className={styles.subText}>wish to report any misuse of your personal information</li>
                    <p className={styles.subText}>To assist us in dealing with your request, please
                    provide your full name and details.</p>
                    <h2 className={styles.subText}>Changes to our Privacy Notice</h2>
                    <p className={styles.subText}>We may change this Privacy Notice from time to time
                    by posting the updated version of
                    the Privacy Policy on the Unilever Sites. We will give you reasonable notice of
                    any material change. We encourage you to visit frequently to stay informed about
                    how we use your personal information.</p></span>: null}

                    <h2 className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'otherPolicy')}>Other Unilever privacy notices</h2>
                    {this.state.otherPolicy ?   <p className={styles.subText}>In addition to this Privacy Notice, there may be
                      specific campaigns or promotions which will be governed by
                      additional privacy terms or policies. We encourage you to read these additional
                      terms or policies before participating in any such campaigns
                      or promotions as you will be required to comply with them
                      if you participate. Any additional privacy terms or policies will be made
                      prominently available to you.</p> : null}

                    <button onClick={this.props.closeModal.bind(this)} className={styles.btnModal}>
                    <img src={CutImg} /></button>
                  </Modal>
                )
              } else {
                return(
                   <Modal
                    isOpen={this.props.cookieModalIsOpen}
                    appElement={document.body}
                    onAfterOpen={this.props.afterOpenModal}
                    onRequestClose={this.props.closeModal}
                    className={styles.popUpContent}
                    contentLabel="Example Modal" classID={styles.popupSect}>
                    <h1 className={styles.headText}>Cookie Policy</h1>
                    <br/>
                    <p className={styles.cookietxt} >1.This Cookie Policy applies to any
                    websites, branded pages on third party platforms (such as Facebook or YouTube),
                    and applications accessed or used through such websites or third party platforms
                    (“Unilever Sites”) which are operated by or on behalf of the Unilever group of
                    companie</p>
                    <br/>
                    <p className={styles.cookietxt}>2.By using the Unilever Sites, you are consenting
                    to our use of cookies in accordance with this Cookie Policy. If you do not agree
                    to our use of cookies in this way, you should set your browser settings accordingly
                    or not use the Unilever Sites. If you disable the cookies that we use, this may
                    impact your user experience while on the Unilever Sites.</p>
                    <br/>
                    <p className={styles.cookietxt}>3.The table below summarises the different types
                    of cookie we use on Unilever Sites, together with their respective purpose and
                    duration (i.e. how long each cookie will remain on your device).</p>
                    <br/>
                    <p className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'cookies')}>What are cookies?</p>
                    { that.state.cookies ? <p className={styles.cookietxt} >We use cookies to make the Unilever Sites
                    easier to use and to better tailor the Unilever Sites and our products to
                    your interests and needs. Cookies may also be used to help speed up your future
                    activities and experience on our Sites. We also use cookies to compile anonymous,
                    aggregated statistics that allow us to understand how people use our Sites and to
                    help us improve their structure and content. We cannot identify you personally from
                    this information.</p> : null}

                    <p className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'usecookies')}>  What do we use cookies for?</p>
                    { that.state.usecookies ? <p className={styles.cookietxt}>We use cookies to make the Unilever Sites easier
                    to use and to better tailor the Unilever Sites and our products to your interests
                    and needs. Cookies may also be used to help speed up your future activities and
                    experience on our Sites. We also use cookies to compile anonymous, aggregated
                    statistics that allow us to understand how people use our Sites and to help us
                    improve their structure and content. We cannot identify you personally from
                    this information.</p> : null}

                    <p className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'usecookies1')}>What types of cookies do we use?</p>
                    {that.state.usecookies1 ? <span><p className={styles.cookietxt}>Two types of cookies may be used on the Unilever
                    Sites - "session cookies" and "persistent cookies". Session cookies are temporary
                    cookies that remain on your device until you leave the Unilever Site. A persistent
                    cookie remains on your device for much longer or until you manually delete it
                    (how long the cookie remains on your device will depend on the duration or "lifetime"
                    of the specific cookie and your browser settings).</p><p className={styles.cookietxt}>Some of the pages you visit may also collect information
                    using pixel tags (also called clear gifs) that may be shared with third parties which
                    directly support our </p>
                    <p className={styles.cookietxt}>promotional activities and website development.
                    For example, website usage information about visitors to Unilever Sites may be
                    shared with our third party advertising agency to better target Internet banner
                    advertisements on our websites. The information is not, however, personally
                    identifiable, although it could be linked to your personal information.</p>
                    <p className={styles.cookietxt}>Cookies used on Unilever Sites</p>
                    <br/>
                    <table className={styles.tabletxt}>
                      <tbody>
                        <tr>
                          <td className={styles.tablehead1} >
                            <p>Type of Cookie</p>
                            <p>Necessary</p>
                            <p>Performance</p>
                            <p>Functionality</p>
                            <p>Targeting / advertising</p>
                        </td>
                        <td className={styles.tablehead2} >
                          <p>What do they do?</p>
                          <p>These cookies are essential to make Unilever websites work correctly,
                          they enable you to move around our websites and use our features.
                          Examples include remembering previous actions (e.g. entered text) when
                          navigating back to a page in the same session.</p>
                          <p>These cookies help us understand how visitors interact with our websites
                          by providing information about the areas visited, the time spent on the
                          website, and any issues encountered, such as error messages. This helps
                          us improve the performance of our websites.</p>
                          <p>visitors interact with our websites by providing information about the
                          areas visited, the time spent on the website, and any issues encountered,
                          such as error messages. This helps us improve the performance of our websites.</p>
                          <p>These cookies don’t identify you as an individual. All data is collected
                          and aggregated anonymously.</p>
                          <p>These cookies allow our websites to remember the choices you make
                          (such as your user name, language or the region you are in) to provide
                          a more personalised online experience. They can also enable visitors to
                          watch videos, play games and engage with social tools, such as blogs,
                          chatrooms and forums.</p>
                          <p>These cookies are used to deliver content that is more relevant to you and
                          your interests. They may be used to deliver targeted advertising or to limit
                          the number of times you see an advertisement. They also help us measure the
                          effectiveness of advertising campaigns on Unilever and non –Unilever websites.
                          We may use these cookies to remember websites you have visited and we may share
                          this information with other parties, including advertisers and our agencies.</p>
                      </td>
                      <td className={styles.tablehead3} >
                        <p>Do these cookies collect my personal data / identify me?</p>
                        <p>These cookies don’t identify you as an individual.If you do not accept
                        these cookies, it may affect the performance of the website, or parts of it.</p>
                        <p>These cookies don’t identify you as an individual. All data is collected
                        and aggregated anonymously.</p>
                        <p>The information these cookies collect may include personally identifiable
                        information that you have disclosed, such as your username or profile picture.
                        We shall always be transparent with you about what information we collect,
                        what we do with it and with whom we share it. If you do not accept these cookies,
                        it may affect the performance and functionality of the website and may restrict
                        access to content on the website.</p>
                        <p>Most types of these cookies track consumers via their IP address so may collect
                        some personal identifiable information. For more information about these cookies,
                        including the information they collect and how this is used, click here.</p>
                      </td>
                      <td className={styles.tablehead4} >
                        <p>Links to more information:</p>
                        <p>Read more</p>
                        <p>Read more</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br/></span> : null}

                <p className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'partyCookie')}>Do we use third party cookies?</p>
                {that.state.partyCookie ? <span><p className={styles.cookietxt}>We use a number of suppliers that may also
                set cookies on your device on our behalf when you visit the Unilever Sites to
                allow them to deliver the services they are providing. To get more information
                about these cookies, as well as information about how to opt-out of receiving
                such cookies, </p>
                <p className={styles.cookietxt}>When you visit the Unilever Sites you may
                receive cookies from third party websites or domains. We endeavour to identify
                these cookies before they are used so that you can decide whether or not you
                wish to accept them. More information about these cookies may be available on
                the relevant third party's website.</p></span> : null}
                <p className={styles.txtquestion} onClick={this.toggleParagraph.bind(this,'deleteCookie')}>How can I control or delete cookies?</p>
                {that.state.deleteCookie ? <span><p className={styles.cookietxt}>Most internet browsers are initially set up
                to automatically accept cookies. You can change the settings to block cookies
                or to alert you when cookies are being sent to your device. There are a number
                of ways to manage cookies. Please refer to your browser instructions or help
                screen to learn more about how to adjust or modify your browser settings.</p>
                <p className={styles.cookietxt}> If you disable the cookies that we use, this
                may impact your experience while on the Unilever Sites, for example you may not
                be able to visit certain areas of a Unilever Site or you may not receive personalised
                information when you visit a Unilever Site.</p>
                <p className={styles.cookietxt}>If you use different devices to view and access
                the Unilever Sites (e.g. your computer, smartphone, tablet etc) you will need to
                ensure that each browser on each device is adjusted to suit your cookie preferences. </p></span> : null}
                <button onClick={this.props.closeModal.bind(this)} className={styles.btnModal}>
                  <img src={CutImg} />
                </button>
              </Modal>
                )
            }
  }
}


module.exports = Footer;
