import React from 'react';
import {Link} from 'react-router';

import styles from '../../styles/App.css';
import LogoImg from '../../img/header.png';
import MobileLogoImg from '../../img/headerMobile.png';
// require('react-html5video/dist/ReactHtml5Video.css');
// require('react-html5video/dist/ReactHtml5Video.js');

export const Header = (props) => {
  return(
    <div className={styles.topHeader}>
            <img src={LogoImg} />
            <img src={MobileLogoImg} />
    </div>
  );
};
