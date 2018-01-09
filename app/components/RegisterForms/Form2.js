import React from 'react';

import styles from '../../styles/App.css';
import InfoImg from '../../img/infogray.png';
import ReactTooltip from 'react-tooltip';

export default class Form2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          hairkind: false,
          haircolor: false,
          tone: false
        };
        this.onChangeRadio = this.onChangeRadio.bind(this);
        this.getCheckboxes = this.getCheckboxes.bind(this);
        this.fetchCheckboxVal = this.fetchCheckboxVal.bind(this);
    }
    getCheckboxes(e){
      let arr = [];
      $("input:checkbox[name=underarm]:checked").each(function(){
          arr.push($(this).val());
      });
      if(arr.length == 0){
        e.target.value = null;
      } else {
        e.target.value = arr.join();
      }
      this.props.handleFormFieldChange(e);
    }
    fetchCheckboxVal(name){
      let userArr = this.props.currentState.userArr[0][1];
      var checkedItemArray = [];
      for(var i=0; i<userArr.length; i++){
        if(userArr[i][name] !== "" && userArr[i][name] !== " " && userArr[i][name]){
          checkedItemArray = userArr[i][name].split(',');
          // return userArr[i][name];
        }
      }
      for(var i=0; i< checkedItemArray.length; i++){
        document.getElementById(checkedItemArray[i]+'u').checked = true;
      }
      // checkedItemArray.map(function(val, index){
      //   ['Normal','Dark marks','Shaving rash','Excess sweating','Adornments (e.g. Tattoos)'].map(function(v){
      //     console.log('v:- ',v,'val:- ',val);
      //     if(v == val){
      //       console.log('ture');
      //       return true;
      //     } else {
      //       return false;
      //     }
      //   })
      // })
    }

    componentDidUpdate(){
    }
    onChangeRadio(e){
      let that = this;
      this.props.handleFormFieldChange(e);
      ['hairkind','haircolor','tone'].map(function(v){
        if(v == e.target.name){
          that.setState({
            [e.target.name]: true
          })
        }
      })
    }
    continueButton(event){
      event.preventDefault();
      // this.props.changeTab('tab3');
    }
    isValid(field){
      let userArr = this.props.currentState.userArr[0][1];
      for(var i=0; i<userArr.length; i++){
        let key = userArr[i].fieldName;
        if(key == field){
          if(userArr[i].isValid == null){
            return false;
          } else{
            return !userArr[i].isValid;
          }
        }
      }
    }
    fetchValue(field){
      var that = this;
      let userArr = this.props.currentState.userArr[0][1];
      var obj = {}
      for(var i=0; i<userArr.length; i++){
        if(userArr[i][field] !== "" && userArr[i][field] !== " " && userArr[i][field]){
          if(field == 'hairkind' || field == 'haircolor' || field == 'tone'){
            obj[field] = true;
              return userArr[i][field];
          } else {
            return userArr[i][field];
          }
        }
      }
    }
    componentDidMount() {
      this.props.doScroll(0);
      document.body.scrollTop = 0;
      this.fetchCheckboxVal('underarm');
      if(this.fetchValue('hairkind') && this.fetchValue('haircolor') && this.fetchValue('tone')){
        this.setState({
          hairkind: true,
          tone: true,
          haircolor: true
        })
      }
    }
    render(){
      let hairkind = [['straight','Straight','hairkind'],['wavy','Wavy','hairkind'],
      ['curly','Curly','hairkind'],['afroCurls','Afro curls','hairkind']];
      let hairColor = [['blonde','haircolor','Blonds'],['brown','haircolor','Brown'],['darkBrown','haircolor','Dark brown'],
      ['black','haircolor','Black'],['red','haircolor','Red'],['grey','haircolor','Grey'],['other','haircolor','Other']];
      let skinTone = [['fair','tone','Fair'],['light','tone','Light'],['medium','tone','Medium'],
      ['deep','tone','Deep'],['dark','tone','Dark']];
      // const raidoWrapperClass = styles.choicesSection +" "+ (this.state.hairkind ? styles['dirty'] : '');
      const raidoWrapperClass1 = styles.choicesSection +" "+ (this.state.haircolor ? styles['dirty'] : '');
        return(
            <div>
              <label className={styles['errorMsg']}>{this.props.currentState.errorMessage}<br />{this.props.currentState.errorMessage2}</label>

                <div className={styles.formSecond}>
                    <div className={styles.formSecondFst}>
                        <div className={styles.formGroup}>
                            <label htmlFor="hairkind" className={styles.formLabel + " " + (this.isValid('hairkind') ? styles['errorState'] : null)}>
                            What’s your hair type?
                            <b>*</b>
                            </label>
                            <div className={styles.choicesSection + ' ' + (this.state.hairkind ? styles['dirty'] : '')}>
                                {
                                    [['straight','Straight','straightRadio'],['wavy','Wavy','wavyRadio'],
                                    ['curly','Curly','curlyRadio'],['afroCurls','Afro curls','afroCurlsRadio']
                                    ].map(([id, value, className], i) => (
                                         <span className={styles.choicesTopImg} key={'hairkind'+i}>
                                            <input type="radio" name="hairkind"
                                            onChange={this.onChangeRadio} value={value}
                                            id={id} checked={value==this.fetchValue('hairkind')} />
                                            <label htmlFor={id} className={styles['labelRadio']+" "+ styles[className]} ></label>
                                            <label className={styles.straightLabel} htmlFor={id} >{value}</label>
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={styles.formSecondScnd}>
                        <div className={styles.formGroup}>
                            <label htmlFor="gender"
                            className={styles.formLabel + " " + (this.isValid('hairlength') ? styles['errorState'] : null)}>
                            How long is your hair?
                            <b>*</b></label>
                            <div className={styles.formCheck}>
                            {
                              [['hairlength','Short'],['hairlength','Medium'],['hairlength','Long']].map(([type, value], i) =>(
                                <span key={'hairlength'+i}>
                                  <input type="radio" name="hairlength"
                                  onChange={this.props.handleFormFieldChange.bind(this)}
                                  value={value} checked={value==this.fetchValue('hairlength')}
                                  id={value}/>
                                  <label htmlFor={value}>{value}</label>
                                </span>
                              ))
                            }
                            </div>
                        </div>
                    </div>
                    <div className={styles.formSecondThird}>
                        <div className={styles.formGroup}>
                            <label htmlFor="gender" className={styles.formLabel + " " + (this.isValid('hairtype') || this.isValid('haircolor') ? styles['errorState'] : null) }>
                            <small>What’s your current</small> <small>hair colour?</small>

                            <b>*</b> <a data-tip="Please select the colour that your hair is at the moment, and tell us if that colour is natural or dyed."> <img src={InfoImg} /> </a>
                            <ReactTooltip place="top" type="dark" effect="float"/></label>
                            <div className={styles.formCheck}>
                            {
                              [['hairtype','Natural'],['hairtype','Dyed']].map(([type, value], i) => (
                                <span key={'hairtype'+i}>
                                  <input type="radio" name="hairtype" value={value}
                                  onChange={this.onChangeRadio}
                                  checked={value==this.fetchValue('hairtype')}
                                  id={value}
                                  />
                                  <label htmlFor={value} className={this.isValid('hairtype') ? styles['errorState'] : null}>{value}</label>
                                </span>
                              ))
                            }
                            </div>
                            <div className={styles.choicesSection + ' ' + (this.state.haircolor ? styles['dirty'] : '')}>
                              {
                                [['blonde','Blonde','blondeRadio'],['brown','Brunette','brownRadio'],['darkBrown','Dark Brown','darkBrownRadio'],
                                    ['black','Black','blackRadio'],['red','Red','redRadio'],
                                    ['grey','Grey','greyRadio'],['other','Others','otherRadio']
                                    ].map(([id, value, className], i) => (
                                         <span className={styles.choicesMediumImg} key={'haircolorq'+i}>
                                            <input type="radio" name="haircolor" value={value}
                                            id={id} onChange={this.onChangeRadio}
                                            checked={value==this.fetchValue('haircolor')}/>
                                            <label htmlFor={id} className={styles['labelRadio']+" "+ styles[className]} ></label>
                                    <label className={styles.straightLabel+" "+(this.isValid('haircolor') ? styles['errorState'] : null)} htmlFor={id} >{value}</label>
                                        </span>
                                    ))
                              }
                            </div>
                        </div>
                    </div>
                    <div className={styles.formSecondFour}>
                        <div className={styles.formGroup}>
                            <label htmlFor="gender" className={styles.formLabel + " " + (this.isValid('tone') ? styles['errorState'] : null)}>
                           Which one is the closest to your skin tone?

                            <b>*</b>
                            <a data-tip="We only ask so that we can ensure that a diverse range of skin tones are considered."> <img src={InfoImg} /> </a>
                            <ReactTooltip place="top" type="dark" effect="float"/>
                            </label>
                            <div className={styles.choicesSection + ' ' + (this.state.tone ? styles['dirty'] : '')}>
                            {
                                [['fair','Fair','fairRadio'],['light','Light','lightRadio'],
                                ['medium','Medium','mediumRadio'],
                                    ['deep','Deep','deepRadio'],
                                    ['dark','Dark','darkRadio'],['otherskin','Others','otherRadio']
                                    ].map(([id, value, className], i) => (
                                         <span className={styles.choicesBottomImg} key={'skinTone'+i}>
                                            <input type="radio" name="tone" value={value}
                                            id={id} onChange={this.onChangeRadio}
                                            checked={value==this.fetchValue('tone')}/>
                                            <label htmlFor={id} className={styles['labelRadio']+" "+ styles[className]} ></label>
                                            <label className={styles.straightLabel} htmlFor={id}>{value}</label>
                                        </span>
                                    ))
                            }
                            </div>
                        </div>
                    </div>
                    <div className={styles.formSecondFive}>
                        <div className={styles.formGroup}>
                            <label htmlFor="gender" className={styles.formLabel + " " + (this.isValid('skin') ? styles['errorState'] : null)}>
                            What condition would you say your skin is?
                            <b>*</b>
                            <a data-tip="In the future, we might cast for a campaign about skin so it would be great to have your details on file in case you might be the right fit."> <img src={InfoImg} /> </a>
                            <ReactTooltip place="top" type="dark" effect="float"/>
                            </label>
                            <div className={styles['formCheck']+" "+styles['mobLeft']}>
                              {
                                [['Normal','skinCondition'],['Dry','skinCondition'],
                                ['Combination','skinCondition'],['Oily','skinCondition']].map(([value,id], i) =>(
                                  <span key={'skin'+i}>
                                    <input type="radio" name="skin"
                                    onChange={this.props.handleFormFieldChange.bind(this)}
                                    value={value} checked={value==this.fetchValue('skin')}
                                    id={id + i}/>
                                    <label htmlFor={id + i}>{value}</label>
                                  </span>
                                ))
                              }
                            </div>
                        </div>
                    </div>
                    <div className={styles.formSecondSix}>
                        <div className={styles.formGroup}>
                            <label htmlFor="gender" className={styles.formLabel + " " + (this.isValid('underarm') ? styles['errorState'] : null)}>
                            What is your underarm condition?
                            <b>*</b>
                            <a data-tip="In the future, we might cast for a campaign about underarms so it would be great to have your details on file in case you might be the right fit."> <img src={InfoImg} /> </a>
                            <ReactTooltip place="top" type="dark" effect="float"/>
                            <span className={styles.selectAll}>We cast women with all underarm conditions</span>
                            </label>
                            <div>
                              {
                                [['underarm','Normal'],['underarm','Looking for maximum protection'],['underarm','Shaving Rash'],['underarm','Dark Mark'],
                              ['underarm','Adorments (e.g. Tatoo)']].map(([type, value], i) =>(
                                  <div className={styles.checkBox} key={'underarm'+i}>
                                        <input type="checkbox"
                                        value={value}
                                        name={type}
                                        className={styles.checkInput}
                                        id={value + 'u'}
                                        onChange={this.getCheckboxes}
                                        />
                                        <label htmlFor={value + 'u'}>{value}</label>
                                  </div>
                                ))
                              }


                            </div>
                        </div>
                    </div>
                    <button className={styles.register} onClick={this.props.validateForm.bind(this)} >continue</button>
                </div>
            </div>
        )
    }
}
