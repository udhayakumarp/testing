import React from 'react';
import { browserHistory, Link } from 'react-router';
import Modal from './Modal';
import styles from '../styles/App.css';
import Madeleine from '../img/madeleine.png';
import Footer from './Footer';

class LandingPage extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div>
          <h1>Join Dove Casting</h1>
          <h6>
            Welcome to the Dove casting page. For over a decade, Dove has been
            championing real beauty, celebrating it in all forms – all shapes,
            all sizes, and all ethnicities. Dove is proud to feature real
            women cast from real life. These unique women tell their own
            personal stories to inspire and empower others. Now, we’re opening
            up casting online so you can be a part of our future campaigns.
            Do you want to join our cast? Let’s get started… <Link to="/timeline" >
            Register now </Link>
          </h6>
          <img src={Madeleine} className={styles.imageMadeleine} />
          <h5>What to expect</h5>
          <p className={styles.registerFont}>First things first, you are required to be 18 years old or
          older to register. If you are, follow a quick three step process:</p>
          <ul>
          <li>Fill in some personal information</li>
          <li>Complete a casting profile</li>
          <li>Upload a portrait picture and selfie video
              <span className={styles.bestText}>(it's best to have these to hand
              before you begin).</span>
          </li>
          </ul>
          <p className={styles.paddMarg}>After you’ve registered you’ll be added to our
          casting pool so we can get in touch with you.</p>
          <p className={styles.ptagFont}><span>Don't worry if you don't hear from us for a while -
          with each campagin we look for women</span>
          <span>that fit different profiles and if you're a match, we'll be in touch.</span></p>
          <p className={styles.ptagFont}><span>In the meantime, you can receive regular updates about Dove,
          our opportunities and </span><span>campaigns.</span></p>
      </div>
    );
  }
};


export class Home extends React.Component {
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
  afterOpenModal(){
  }
  closeModal(){
    this.setState({
      modalIsOpen: false,
      privacyModalIsOpen: false,
      cookieModalIsOpen: false
    });
  }
  componentDidMount(){
    document.body.scrollTop = 0;

  }
  componentWillReceiveProps(){
    console.log('will');
  }

  showModal(){
    this.refs.modal.show();
  }
  hideModal(){
    this.refs.modal.hide();
  }
  render(){
    return(
      <div>
        <div className={styles.landingInfo}>
            <LandingPage />
            <Link to="/timeline" ><button>register</button></Link>
        </div>
        <Footer />
      </div>
    );
  }
}
