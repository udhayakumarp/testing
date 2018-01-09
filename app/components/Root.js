import React from 'react';
import styles from '../styles/App.css';
import { Header } from './Header/Header';

export class Root extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    }
  componentWillReceiveProps() {

    }
  render(){
    return(
      <div className={styles.container}>
        <div className={styles.background}>
          <Header/>
          <div className={styles.content}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
