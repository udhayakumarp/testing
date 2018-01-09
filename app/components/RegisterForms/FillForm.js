
export class FillForm{
  constructor(){

  }
  genCharArray(charA, charZ) {
      var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
      for (; i <= j; ++i) {
          a.push(String.fromCharCode(i));
      }
      return a;
  }
  getName(){
    var arr = [];
    for(var i=0; i<=Math.round(Math.random() * (9 - 1) + 1); i++){
      arr.push(this.genCharArray('a', 'z')[Math.floor(Math.random() * arr.length)])
    }
    return arr;
  }
  getGender(){
    var genderArr = ['Female','Male','Prefer not to say','Other'];
    return genderArr[Math.round(Math.random() * ((genderArr.length-1) - 1) + 1)];
  }
  getBirthday(){
    return (new Date()).getFullYear() - (18 + Math.round(Math.random() * (15 - 0) + 0));
  }

  getHairKind(){
    var arr = ['Straight','Wavy','Curly','Afro Curls'];
    return arr[Math.round(Math.random() * ((arr.length-1) - 1) + 1)]
  }

  fillForm( num ){
    var obj;
    if(num == 1){
      obj = {
        firstName       : (this.getName()).join(""),
        lastName        : (this.getName()).join(""),
        gender          : this.getGender(),
        dobYear         : this.getBirthday(),
        location        : 'India',
        nationality     : 'India',
        email           : this.genCharArray('a', 'z')[Math.floor(Math.random() * 1)]+'@gmail.com',
        phoneNumber     : Math.round(Math.random() * (10000000000 - 1) + 1),
        phoneNumberPrefix: '+91',
        occupation      : 'Software Developer'
      };
      return obj;
    }
    if(num == 2){
        obj = {
          hairkind        : this.getHairKind(),
          hairlength      : 'Short',
          hairtype        : 'Natural',
          haircolor       : 'Black',
          tone            : 'Deep',
          skin            : 'Light',
          underarm        : 'Normal'
        };
        return obj;
    }
    if(num == 3){
        obj = {
          firstName       : (this.getName()).join(""),
          lastName        : (this.getName()).join(""),
          gender          : this.getGender(),
          dobYear         : this.getBirthday(),
          location        : 'India',
          nationality     : 'India',
          email           : this.genCharArray('a', 'z')[Math.floor(Math.random() * 1)]+'@gmail.com',
          phoneNumber     : Math.round(Math.random() * (10000000000 - 1) + 1),
          phoneNumberPrefix: '+91',
          occupation      : 'Software Developer',
          hairkind        : this.getHairKind()
        };
        return obj;
    }
  }
}
