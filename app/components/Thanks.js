import React from 'react';
import styles from '../styles/App.css';
import ThankuImg from '../img/thankyou.png';
import Footer from './Footer';

export default class Thanks extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    if ( window.hasOwnProperty('parentIFrame') ) {
        window.parentIFrame.scrollTo( 0,  0 );
    }
    $(window).scrollTop( 0 );
  }
  render(){
    return(
        <div>
            <div className={styles.thankYou}>
              <h2>Thank you</h2>
              <p>Thank you so much for taking part.
              You'll get an email from us shortly confirming
              that we've received your details.</p>
              <img src={ThankuImg} className={styles.thankuimg} />
              <span>Every body is beautiful</span>
          </div>
          <Footer />
      </div>
    );
  }
}
