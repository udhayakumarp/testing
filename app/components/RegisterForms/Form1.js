import React from 'react';
import { browserHistory } from 'react-router';

import styles from '../../styles/App.css';
import InfoImg from '../../img/infoicon.png';
import ReactTooltip from 'react-tooltip';
import Select from 'react-select';
import Form from './Form';
const LANGUAGES = [
	{ label: 'English', value: 'english' },
	{ label: 'French', value: 'french' },
	{ label: 'Portuguese', value: 'portuguese' },
	{ label: 'Spanish', value: 'spanish' },
	{ label: 'Chinese', value: 'chinese' },
	{ label: 'Japanese', value: 'japanese' },
  { label: 'Hindi', value: 'hindi' },
];
export default class Form1 extends React.Component{
    constructor(props){

        super(props);
				let htmlForm = new Form();
        this.state={
          options: LANGUAGES,
    			value: [],
					form:htmlForm.form[0]
        }
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.isValid.bind(this);
        this.fetchValue.bind(this);
				this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleSelectChange (value) {
      var event = {
        target: {}
      };
      event['target']['name'] = 'languages';
      event['target']['value'] = value;
      this.props.handleFormFieldChange(event);
  		this.setState({ value });
      // onChange={this.props.handleFormFieldChange.bind(this)}
  	}
		componentDidMount(){
			if ( window.hasOwnProperty('parentIFrame') ) {
          window.parentIFrame.scrollTo( 0,  0 );
      }
				let str = this.fetchValue('languages');
				if(str){
					let newArr = str.split(',');
					let arrayvar = this.state.value.slice();
					let len = newArr.length;
					for(var i=0; i<len; i++){
						arrayvar.push(newArr[i]);
					}
					this.setState({ value: arrayvar })
				}
		}
    isValid(field){
      let userArr = this.props.currentState.userArr[0][0];
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
    continueButton(event){ }
    handleChange(event){ }
    fetchValue(field){
      let userArr = this.props.currentState.userArr[0][0];
      for(var i=0; i<userArr.length; i++){
        if(userArr[i][field] !=="" && userArr[i][field] !== " " && userArr[i][field]){
          return userArr[i][field];
        }
      }
    }
    handleKeyPress(e) {
        var a = [];
        var k = e.which;
				var regex = new RegExp("^[0-9a-zA-Z \b]+$");
        for (var i = 48; i < 58; i++){
					if(/[a-z0-9]/i.test(String.fromCharCode(e.charCode || e.keyCode))
                    || !!(!e.charCode && ~[8,37,39,46].indexOf(e.keyCode))){
											a.push(i);
										}
				}
        if (!(a.indexOf(k)>=0))
            e.preventDefault();
    }
    render(){
      var that = this;
      let days = [];
      let months = [];
      let years = [];
      let minOffset = 18, maxOffset = 100; // Change to whatever you want
      let thisYear = (new Date()).getFullYear();
      for(var i=1; i<= 31; i++){
          days.push(<option value={i} key={'dobDay'+ i} >{i}</option>);
      }
      for(var i=1; i<= 12; i++){
        if(i.toString().length == 1 ){
          i = '0'+i
        }
          months.push(<option value={i} key={'dobMonth'+ i} >{i}</option>);
      }
      for (var i = minOffset; i <= maxOffset; i++) {
          var year = thisYear - i;
          years.push(<option value={year} key={'dobYear'+ i} >{year}</option>);
      }
				return(
            <div>
                <div className={styles.formOne}>
									{
										this.state.form.map(function(item, i){

												return(
													<div className={styles.formGroup} key={i}>
														{item.name !== 'birthday' && item.name !== 'phoneNumber' && item.name !== 'phoneNumberPrefix' ? <label htmlFor={item.id}
																													className={styles.formLabel + " " + (that.isValid(item.name) ? styles['errorState'] : null)}
																												>
																												{item.label}
																												{item.required ? <b>*</b> : null}
																												{item.toolTipShow ? <a
																													data-tip={item.toolTipMsg}>
																													<img src={InfoImg} />
																 												 <ReactTooltip place="top"
																												  type="dark"
																													effect="float"/>
																												</a>: null}
														</label> : null}

														{item.name == 'phoneNumber' ? <label htmlFor={item.id}
																													className={styles.formLabel + " " + (that.isValid(item.name) || that.isValid('phoneNumberPrefix') ? styles['errorState'] : null)}
																												>
																												{item.label}
																												{item.required ? <b>*</b> : null}
																												{item.toolTipShow ? <a
																													data-tip={item.toolTipMsg}>
																													<img src={InfoImg} />
																 												 <ReactTooltip place="top"
																												  type="dark"
																													effect="float"/>
																												</a>: null}
														</label> : null}

															{item.type == 'text' ? <input
																type={item.type}
																className={styles.formControl}
																id={item.id}
																name={item.name}
																onChange={that.props.handleFormFieldChange.bind(that)}
																value={that.fetchValue(item.name)}
			                        /> : null}
															{item.type == 'radio' ? <div className={styles['formCheck']+" "+styles['textLeft']}>
															{
																item.genderInputs.map(([text, value], i) => (
																	i == 3 ? <span key={'gender' + i}>
																			<br></br><input
																				id={value}
																				type="radio"
																				name={text}
																				value={value}
																				onChange={that.props.handleFormFieldChange.bind(that)}
																				checked={value==that.fetchValue('gender')}
																				/>
																			<label htmlFor={value}>{value}</label>

																			</span>: 	<span key={'gender' + i}>
																					<input
																						id={value}
																						type="radio"
																						name={text}
																						value={value}
																						onChange={that.props.handleFormFieldChange.bind(that)}
																						checked={value==that.fetchValue('gender')}
																						/>
																					<label htmlFor={value}>{value}</label>
																					</span>


																	))
																}
																</div> : null}
																{item.type == 'select' && item.name == 'birthday' ? <div className={styles.formGroup} key={i}>
						                        <label htmlFor={item.id}
																		className={styles.formLabel +" "+ (that.isValid('dobYear') ? styles['errorState'] : null)}

																		>{item.label}
																		{item.required ? <b>*</b> : null}

						                        <a data-tip={item.toolTipMsg}> <img src={InfoImg} /> </a>
						                        <ReactTooltip place="top" type="dark" effect="float"/>

						                        </label>
						                        <div className={styles.formFull}>
						                            {/*
																				<select
																					className={styles.formSelect}
																					name="dobDay"
																					onChange={that.props.handleFormFieldChange.bind(that)}
																					value={that.fetchValue('dobDay')}
						                              >
						                              <option value="" key={'dobDaydefault'}>Day</option>
						                              {days}
						                            </select>
						                            <select
																					className={styles.formSelect}
																					name="dobMonth"
																					onChange={that.props.handleFormFieldChange.bind(that)}
																					value={that.fetchValue('dobMonth')}
						                              >
						                                <option value="" key={'dobMonthdefault'}>Month</option>
					                                {months}
					                            </select>
																				 */}
					                            <select
																				className={styles.formSelect+" "+styles['formSeclectIe']}
																				name="dobYear"
																				onChange={that.props.handleFormFieldChange.bind(that)}
																				value={that.fetchValue('dobYear')}
					                             >
					                                <option value="" key={'dobYeardefault'}>Year</option>
					                                {years}
					                            </select>
					                        </div>
					                    </div> : null}
															{item.type == 'select' && item.name !== 'birthday' ? <select
																className={styles.formControl+" "+styles['formSeclectIe']}
																id={item.id}
																name={item.name}
																onChange={that.props.handleFormFieldChange.bind(that)}
																value={that.fetchValue(item.name)}
			                          >
																{
																	item.input.map(function(v, index){
																		return (
																			<option value={v.value} key={'opt'+index}>{v.label}</option>
																		)
																	})
																}
			                        </select> : null}
															{item.name == 'languages' ? <Select style={{textAlign : 'left'}}
																className={styles.multiSelect} multi simpleValue
			                          name="languages"
			                          value={that.state.value} placeholder="Select your languages"
			                          options={that.state.options}
			                          onChange={that.handleSelectChange}
			                          /> : null}
															{item.name == 'phoneNumber' ? <div className={styles.formFull}>
																<input type="tel"
																	className={styles.formInput+" "+styles['phoneCode']}
																	id="phoneNumberPrefix"
																	name="phoneNumberPrefix"
																	maxLength={4}
																	onKeyPress={that.handleKeyPress}
																	onChange={that.props.handleFormFieldChange.bind(that)}
																	value={(that.fetchValue('phoneNumberPrefix') == undefined ? '+' : that.fetchValue('phoneNumberPrefix') )}
																	/>
				                        <input type="tel"
																	className={styles.formInput}
																	id="phoneNumber"
																	name="phoneNumber"
				                        	placeholder="Enter phone number"
																	maxLength={10}
																	onKeyPress={that.handleKeyPress}
																	onChange={that.props.handleFormFieldChange.bind(that)}
																	value={that.fetchValue('phoneNumber')}
																 />
			                        </div> : null}

			                    </div>
												)
										})
									}
                    <button className={styles.register} onClick={this.props.validateForm.bind(this)} >continue</button>
                </div>
            </div>
        )
    }
}
