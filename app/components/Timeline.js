import React from 'react';
import ReactDom from 'react-dom';
import styles from '../styles/App.css';
import Form1 from './RegisterForms/Form1';
import Form2 from './RegisterForms/Form2';
import Form3 from './RegisterForms/Form3';
import _ from 'lodash';
import Footer from './Footer';

import {FillForm} from './RegisterForms/FillForm';


export default class Timeline extends React.Component {
  constructor(props) {
    const userArr = props.route.userArr;
    super(props);
    this.handleFormFieldChange.bind(this);
    if( !userArr.length ){
      [
        [
          [{
            fieldName: 'firstName',
            firstName: null,
            isRequired: true,
            isValid: null,
            identifiedAs: 'field_2'
          },{
            fieldName: 'lastName',
            lastName: null,
            isRequired: true,
            isValid: null,
            identifiedAs: 'field_3'
          },{
            fieldName: 'gender',
            gender: null,
            isRequired: true,
            isValid: null,
            identifiedAs: 'field_10'
          },
          // {
          //   fieldName: 'dobDay',
          //   dobDay: null,
          //   isRequired: false,
          //   isValid: null,
          //   identifiedAs: 'field_36'
          // },{
          //   fieldName: 'dobMonth',
          //   dobMonth: null,
          //   isRequired: false,
          //   isValid: null,
          //   identifiedAs: 'field_36'
          // },
          {
            fieldName: 'dobYear',
            dobYear: null,
            isRequired: true,
            isValid: null,
            identifiedAs: 'field_36'
          },{
            fieldName: 'location',
            location: null,
            isRequired: true,
            isValid: null,
            identifiedAs: 'field_37'
          },{
            fieldName: 'nationality',
            nationality: null,
            isRequired: true,
            isValid: null,
            identifiedAs: 'field_38'
          },
          // {
          //   fieldName: 'ethnicity',
          //   ethnicity: null,
          //   isRequired: false,
          //   isValid: null,
          //   identifiedAs: 'field_17'
          // },
          {
            fieldName: 'occupation',
            occupation: null,
            isRequired: false,
            isValid: null,
            identifiedAs: 'field_13'
          },
          // {
          //   fieldName: 'languages',
          //   languages: null,
          //   isRequired: false,
          //   isValid: null,
          //   identifiedAs: 'field_16'
          // },
          {
            fieldName: 'email',
            email: null,
            isRequired: true,
            isValid: null,
            identifiedAs: 'field_4'
          },{
            fieldName: 'phoneNumberPrefix',
            phoneNumberPrefix: null,
            isRequired: true,
            isValid: null,
            identifiedAs: 'field_14'
          },{
            fieldName: 'phoneNumber',
            phoneNumber: null,
            isRequired: true,
            isValid: null,
            identifiedAs: 'field_14'
          }],
          [{
              fieldName: 'hairkind',
              hairkind: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_18'
            },
            {
              fieldName: 'hairlength',
              hairlength: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_19'
            },
            {
              fieldName: 'hairtype',
              hairtype: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_20'
            },{
              fieldName: 'haircolor',
              haircolor: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_21'
            },{
              fieldName: 'tone',
              tone: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_22'
            },{
              fieldName: 'skin',
              skin: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_23'
            },{
              fieldName: 'underarm',
              underarm: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_24'
            }],
            [{
              fieldName: 'what_makes_you_feel_beautiful',
              what_makes_you_feel_beautiful: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_25'
            },
            {
              fieldName: 'moments',
              moments: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_26'
            },
            {
              fieldName: 'beauty_routine',
              beauty_routine: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_27'
            },
            {
              fieldName: 'professional_model',
              professional_model: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_29'
            },
            {
              fieldName: 'professional_exp',
              professional_exp: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_30'
            },
            {
              fieldName: 'agent_type',
              agent_type: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_31'
            },
            {
              fieldName: 'agents_details',
              agents_details: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_32'
            },
            {
              fieldName: 'termNc',
              termNc: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_33'
            },
            {
              fieldName: 'eighteenPlus',
              eighteenPlus: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_35'
            },
            {
              fieldName: 'subscribeDove',
              subscribeDove: null,
              isRequired: false,
              isValid: null,
              identifiedAs: 'field_34'
            },
            {
              fieldName: 'video_id',
              video_id: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'video_id',
              videoId: null,
              videoFileName: '',
              isVideoUploaded: null
            },
            {
              fieldName: 'imageUpload',
              imageUpload: null,
              isRequired: true,
              isValid: null,
              identifiedAs: 'field_15',
              isImageUploaded: null,
              imageFileName: '',
              imagePreview: '',
              uploadLink: null
            },
            {
              fieldName: 'videoUrl',
              videoUrl: null,
              isRequired: false,
              isValid: null,
              identifiedAs: 'field_39',
            }]]
      ].forEach( v => userArr.push(v) );
    }
    this.state={
      tab1: true,
      tab2: false,
      tab3: false,
      headerContent: 'Personal information',
      headerContent1: 'The first step? Provide your personal information.',
      userArr: userArr,
      errorMessage: null,
      errorMessage2: null,
      currentStage: 'tab1',
      isForm1Validated: false,
      isForm2Validated: false,
      isForm3Validated: false
    }
  }
  isActive(value){
    if(value == this.state.currentStage)
      return styles['btnPrimary'];
  }
  changeTab(node){
    let that = this;
      if(node == 'tab1'){
        that.setState({
          tab1: true,
          tab2: false,
          tab3: false,
          headerContent: 'Personal information',
          headerContent1: 'The first step? Provide your Personal information.',
          currentStage: 'tab1'
        })
      } else if(node == 'tab2'){
        if(that.state.isForm1Validated){
          that.setState({
            tab1: false,
            tab2: true,
            tab3: false,
            headerContent: 'Casting information',
            headerContent1: 'The second step? Fill out your quick casting profile.',
            currentStage: 'tab2'
          })
        }
      } else if(node == 'tab3'){
        if(that.state.isForm2Validated){
        that.setState({
          tab1: false,
          tab2: false,
          tab3: true,
          headerContent: 'Upload and submit',
          headerContent1: 'The last step? Tell us more about yourself.',
          currentStage: 'tab3'
        })
      }
      }
  }
  handleTabChange(node,event){
    let that = this;
    var p = Promise.resolve(that.validateForm());
    p.then(function(v) {
      if(that.state.isForm1Validated){
        if(node=='tab1'){
          that.setState({
            tab1: true,
            tab2: false,
            tab3: false,
            headerContent: 'Personal information',
            headerContent1: 'The first step? Provide your personal information.',
            currentStage: 'tab1'
          })
        }
        else if (node == 'tab2') {
          if(that.state.isForm1Validated){
            that.setState({
              tab1: false,
              tab2: true,
              tab3: false,
              headerContent: 'Casting information',
              headerContent1: 'The second step? Fill out your quick casting profile.',
              currentStage: 'tab2'
            })
          }
        } else if (node == 'tab3') {
          if(that.state.isForm2Validated){
            that.setState({
              tab1: false,
              tab2: false,
              tab3: true,
              headerContent: 'Upload and submit',
              headerContent1: 'The last step? Tell us more about yourself.',
              currentStage: 'tab3'
            })
          }
        }
      }
    });
  }
  validateForm(){
    let that = this;
    let userArr = that.state.userArr;
    let formVal;
    let isFormValid = true;
    $('#forms-wrapper').removeClass('scroll-done');
    if(this.state.currentStage == 'tab1'){
      formVal = 0;
    } else if(this.state.currentStage == 'tab2'){
      formVal = 1;
    } else if(this.state.currentStage == 'tab3'){
      formVal = 2;
    }
    let count = 0;
    let arrLength = this.state.userArr[0][formVal].length;
    for(var i=0; i<this.state.userArr[0][formVal].length; i++){
      let keyName = this.state.userArr[0][formVal][i].fieldName;
      if(userArr[0][formVal][i].isRequired){
        if(userArr[0][formVal][i][keyName]){
          if(keyName == 'email'){
            // let re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
            let re = /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
            if(re.test(userArr[0][formVal][i][keyName])){
              userArr[0][formVal][i].isValid = true;
              that.setState({userArr});
              count++;
            } else{
              userArr[0][formVal][i].isValid = false;
              that.setState({userArr});
              that.setState({
                isForm1Validated: false,
              });
            }
          } else {
            userArr[0][formVal][i].isValid = true;
            that.setState({userArr});
            count++;
          }


        } else {
          userArr[0][formVal][i].isValid = false;
          let str = 'isForm' + (formVal+1) + 'Validated';
          if(formVal == 1){
            that.setState({
              isForm2Validated: false,
              errorMessage2: 'Please enter the questions highlighted in red in order to continue to the next page.',
              errorMessage: 'Questions marked with a * are mandatory. '
            })
          }

          if(formVal == 0){
            that.setState({
              isForm1Validated: false,
            });
          }

          that.setState({userArr});
        }
      } else {
        // console.log('let it go empty value is allowed for this key');
        count++;
      }
    }
    if(count == arrLength){
      let tabNumber,tab,formValid;
      if(formVal == 0){
        tabNumber = 2;
        tab = 'tab' + tabNumber;
        formValid = 'isForm1Validated';
      } else if(formVal == 1) {
        tabNumber = 3;
        tab = 'tab' + tabNumber;
        formValid = 'isForm2Validated';
      } else if(formVal == 2){
        formValid = 'isForm3Validated';
      }

        that.setState({
          [formValid]: true,
          errorMessage: null,
          errorMessage2: null,
          currentStage: tab
        }, function stateUpdateComplete(){
            if(formVal !== 2)
              this.changeTab(tab);
        });
    }
  }
  handleFormFieldChange(event){
    var that = this;
    if(this.props){
      let userArr = this.state.userArr;
      let formVal;
      if(this.state.currentStage == 'tab1'){
        formVal = 0;
      } else if (this.state.currentStage == 'tab2') {
        formVal = 1;
      } else if(this.state.currentStage == 'tab3'){
        formVal = 2;
      }{this.state.headerContent1}
      if(event.target.name !== ""){
          for(var i=0; i< userArr[0][formVal].length; i++){
            let obj = userArr[0][formVal][i];
            if(obj.hasOwnProperty(event.target.name)){
              if(event.target.name == 'phoneNumberPrefix'){
                var reg = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
                if(!reg.test(event.target.value)){
                  event.target.value = '+' + event.target.value;
                }
              }
              userArr[0][formVal][i][event.target.name] = event.target.value;
              this.setState({userArr});
            }
          }
      }
    }
  }
  activeClassTab(value){
  if(value !== this.state.currentStage)
    return styles['inactivePTag'];
 }

    doScroll( height ){
        if ( window.hasOwnProperty('parentIFrame') ) {
            window.parentIFrame.scrollTo( 0,  height );
        }
        $(window).scrollTop( height );
    }

    componentDidUpdate(){
        const errorElements = $('#forms-wrapper .' + styles.errorState);
        if( errorElements.length && !$('#forms-wrapper').hasClass('scroll-done')){
            $('#forms-wrapper').addClass('scroll-done');
            this.doScroll( errorElements.first().position().top - 50 );
        }
    }

    componentDidMount(){
      var that = this;
      this.doScroll(0);
      var urlArr = (window.location.href).split('?');

      if(urlArr.length > 1){
        var params = urlArr[1].split('&');
        params.forEach(function( o ){
          console.log(o);
          if( o == 'f1'){
            that.automaticFormFiller(1);
          }
          if( o == 'f2'){
            that.automaticFormFiller(2);
          }
          if( o == 'f3'){
            that.automaticFormFiller(3);
          }
        });

      }
    }

    automaticFormFiller( num ){
      let that = this;
      let formFiller = new FillForm();
      let form1 = formFiller.fillForm( num );
      let userArr = that.state.userArr;
      let formNo = 0;
      if(num  == 1 )
        formNo = 0;
      if( num == 2 )
        formNo  = 1;
      if( num == 3 )
        formNo = 2;

      Object.keys(form1).forEach(function(key,index) {
              userArr[0][formNo].forEach(function( o ){
                if(o['fieldName'] == key){
                  var field = o['fieldName'];
                  o[field] = form1[key];
                }
              });

      });
      that.setState({userArr});
    }
  render(){
    return(
      <div>
        <div className={styles.registerText}>
          <h1>{this.state.headerContent}</h1>
          <p>{this.state.headerContent1}
          { this.state.tab2 ? <span className={styles.diverseText}>We are proud to be diverse</span> : ''}
          </p>

        </div>
        <div className={styles.timeLine}>
          <div className={styles.stepWizard}>
            <div className={styles.stepwizardRow}>
              <div className={styles.stepWizardStep}>
                <a onClick={this.handleTabChange.bind(this, 'tab1')} type="button"
                className={styles['btnCircle'] + " " + this.isActive('tab1') + " " + styles['btnDefault']}>1</a>
                <p className={this.activeClassTab('tab1')}>Personal <br/>information</p>
              </div>
              <div className={styles.stepWizardStep}>
                <a onClick={this.handleTabChange.bind(this, 'tab2')} type="button"
                className={styles['btnDefault'] + " " + styles['btnCircle'] + " " + this.isActive('tab2')}
                disabled="disabled">2</a>
                <p className={this.activeClassTab('tab2')}>Casting <br/>information</p>
              </div>
              <div className={styles.stepWizardStep}>
                <a onClick={this.handleTabChange.bind(this, 'tab3')} type="button"
                className={styles['btnDefault'] + " " + styles['btnCircle'] + " " + this.isActive('tab3')}
                disabled="disabled">3</a>
                <p className={this.activeClassTab('tab3')}>Upload<br/> & submit</p>
              </div>
            </div>
          </div>
        </div>
        {/*<form role="form" action="" method="post"> */}
          <div className="row setup-content" id="forms-wrapper">
            {this.state.tab1 == true ? <Form1 currentState= {this.state} changeTab={this.changeTab.bind(this)} validateForm={this.validateForm.bind(this)} handleFormFieldChange={this.handleFormFieldChange.bind(this)} doScroll={this.doScroll.bind(this)}/>: null}
            {this.state.tab2 == true ? <Form2 currentState= {this.state} changeTab={this.changeTab.bind(this)} validateForm={this.validateForm.bind(this)} handleFormFieldChange={this.handleFormFieldChange.bind(this)} doScroll={this.doScroll.bind(this)}/>: null}
            {this.state.tab3 == true ? <Form3 currentState= {this.state} changeTab={this.changeTab.bind(this)} validateForm={this.validateForm.bind(this)} handleFormFieldChange={this.handleFormFieldChange.bind(this)} doScroll={this.doScroll.bind(this)}/>: null}
          </div>
        {/*</form> */}

        <Footer />
      </div>
    )
  }
}
