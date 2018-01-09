import React from 'react';

import styles from '../styles/App.css';

import uploadImg from '../img/yourpic.png';

export default class Profile extends React.Component {
  render(){
    return(
        <div className={styles.profile}>
          <div className={styles.profileDetails}>
                <div className={styles.ProfileImage}>
                    <img src={uploadImg} />
                </div>
                <div className={styles.ProfileContent}>
                    <h1>Madamala vijaya Durga </h1>
                    <div className={styles.tabelSection}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>First name </td>
                                    <td>:</td>
                                    <td>Madamala</td>
                                </tr>
                                <tr>
                                    <td>Last name </td>
                                    <td>:</td>
                                    <td>Vijaya Durga</td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td>:</td>
                                    <td>Female</td>
                                </tr>
                                <tr>
                                    <td>Birthday</td>
                                    <td>:</td>
                                    <td>00/00/00</td>
                                </tr>
                                <tr>
                                    <td>Location</td>
                                    <td>:</td>
                                    <td>United Kingdom</td>
                                </tr>
                                <tr>
                                    <td>Nationality </td>
                                    <td>:</td>
                                    <td>United Kingdom</td>
                                </tr>
                                <tr>
                                    <td>Ethnicity </td>
                                    <td>:</td>
                                    <td>Latin American</td>
                                </tr>
                                <tr>
                                    <td>Occupation</td>
                                    <td>:</td>
                                    <td>Developer</td>
                                </tr>
                                <tr>
                                    <td>Languages spoken</td>
                                    <td>:</td>
                                    <td>English</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>:</td>
                                    <td>vijaya@teampumpkin.com</td>
                                </tr>
                                <tr>
                                    <td>Phone number</td>
                                    <td>:</td>
                                    <td><b>+91 </b>- 9876543210</td>
                                </tr>
                                <tr>
                                    <td>What’s your hair type?</td>
                                    <td>:</td>
                                    <td>Straight</td>
                                </tr>
                                <tr>
                                    <td>How long is your hair?</td>
                                    <td>:</td>
                                    <td>Short</td>
                                </tr>
                                <tr>
                                    <td>What’s your current hair colour ?</td>
                                    <td>:</td>
                                    <td><b>Natural</b>- Blonde</td>
                                </tr>
                                <tr>
                                    <td>Which one is the closest to your skin tone?</td>
                                    <td>:</td>
                                    <td>Fair</td>
                                </tr>
                                <tr>
                                    <td>What condition would you say your skin is?</td>
                                    <td>:</td>
                                    <td>Natural</td>
                                </tr>
                                <tr>
                                    <td>What is your underarm condition?</td>
                                    <td>:</td>
                                    <td>Normal, Dark marks, Shaving rash, Excess sweating, 
                                    Adornments (e.g. Tattoos)</td>
                                </tr>
                                <tr>
                                    <td>What do you need to upload?</td>
                                    <td>:</td>
                                    <td><b>portrait picture</b>- <img src={uploadImg} /></td>
                                </tr>
                                <tr>
                                    <td>What do you need to upload?</td>
                                    <td>:</td>
                                    <td><b>selfie video </b>- <img src={uploadImg} /></td>
                                </tr>
                                <tr>
                                    <td>What makes you feel beautiful?</td>
                                    <td>:</td>
                                    <td>Lorem Ipsum is simply dummy text of the printing 
                                    and typesetting industry. Lorem Ipsum has been the 
                                    industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and 
                                    scrambled it to make a type specimen book.
                                    Lorem Ipsum is simply dummy text of the printing and 
                                    typesetting industry. Lorem Ipsum has been the 
                                    industry's standard dummy text ever since the 
                                    1500s, when an unknown printer took a galley of type 
                                    and scrambled it to make a type specimen book.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Do you use any Dove products at the moment?</td>
                                    <td>:</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>What's your beauty routine?</td>
                                    <td>:</td>
                                    <td>Lorem Ipsum is simply dummy text of the printing 
                                    and typesetting industry. Lorem Ipsum has been the 
                                    industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and 
                                    scrambled it to make a type specimen book.</td>
                                </tr>
                                <tr>
                                    <td>Have you ever worked as a professional model/actor?</td>
                                    <td>:</td>
                                    <td><b>Agents</b> - Lorem Ipsum is simply dummy text of the printing 
                                    and typesetting industry. Lorem Ipsum has been the 
                                    industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and 
                                    scrambled it to make a type specimen book.</td>
                                </tr>
                                <tr>
                                    <td>Do you have an agent?</td>
                                    <td>:</td>
                                    <td><b>Agents</b> - Lorem Ipsum is simply dummy text of the printing 
                                    and typesetting industry. Lorem Ipsum has been the 
                                    industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and 
                                    scrambled it to make a type specimen book.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> 
          </div>
      </div>
    );
  }
}
