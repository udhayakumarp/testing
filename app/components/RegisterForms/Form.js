class Form {
  constructor() {
    this.form = [
      [{
        label               : "First name",
        id                  : "firstName",
        name                : "firstName",
        type                : "text",
        required            : true,
        toolTipShow         : false,
        toolTipMsg          : "Nothing"
      },
      {
        label               : "Last name",
        id                  : "lastName",
        name                : "lastName",
        type                : "text",
        required            : true,
        toolTipShow         : false,
        toolTipMsg          : "Nothing"
      },
      {
        label               : "Gender",
        id                  : "gender",
        name                : "gender",
        type                : "radio",
        required            : true,
        toolTipShow         : false,
        toolTipMsg          : "Nothing",
        genderInputs        : [['gender','Female'],['gender','Male'],['gender','Prefer not to say'],['gender','Other']]
      },
      {
        label               : "Year of Birth",
        id                  : "birthday",
        name                : "birthday",
        type                : "select",
        toolTipShow         : true,
        toolTipMsg          : "This helps us ensure that we choose a range of ages to give everyone a fair chance.",
        required            : true,
      },
      {
        label               : "Location",
        id                  : "location",
        name                : "location",
        type                : "select",
        required            : true,
        toolTipShow         : false,
        toolTipMsg          : "Nothing",
        input               : [{
                              "label": "Select location",
                              "value": ""
                            },{
                              "label": "NA (North America)",
                              "value": "NA (North America)"
                            },{
                              "label": "EU (European)",
                              "value": "EU (European)"
                            },{
                              "label": "Latam (Latin America)",
                              "value": "Latam (Latin America)"
                            },{
                              "label": "SEA (Southeast Asia)",
                              "value": "SEA (Southeast Asia)"
                            },{
                              "label": "SA (South Asia)",
                              "value": "SA (South Asia)"
                            },{
                              "label": "NAMET (North Africa, Middle East, Turkey)",
                              "value": "NAMET (North Africa, Middle East, Turkey)"
                            },{
                              "label": "China",
                              "value": "China"
                            },{
                              "label": "Others",
                              "value": "Others"
                            }]
      },
      {
        label               : "Citizenship",
        id                  : "nationality",
        name                : "nationality",
        type                : "select",
        required            : true,
        toolTipShow         : false,
        toolTipMsg          : "",
        input               : [{
                              "label": "Select citizenship",
                              "value": ""
                            },{
	"label": "Afghan",
	"value": "Afghan"
}, {
	"label": "Albanian",
	"value": "Albanian"
}, {
	"label": "Algerian",
	"value": "Algerian"
}, {
	"label": "American",
	"value": "American"
}, {
	"label": "Andorran",
	"value": "Andorran"
}, {
	"label": "Angolan",
	"value": "Angolan"
}, {
	"label": "Antiguans",
	"value": "Antiguans"
}, {
	"label": "Argentinean",
	"value": "Argentinean"
}, {
	"label": "Armenian",
	"value": "Armenian"
}, {
	"label": "Australian",
	"value": "Australian"
}, {
	"label": "Austrian",
	"value": "Austrian"
}, {
	"label": "Azerbaijani",
	"value": "Azerbaijani"
}, {
	"label": "Bahamian",
	"value": "Bahamian"
}, {
	"label": "Bahraini",
	"value": "Bahraini"
}, {
	"label": "Bangladeshi",
	"value": "Bangladeshi"
}, {
	"label": "Barbadian",
	"value": "Barbadian"
}, {
	"label": "Barbudans",
	"value": "Barbudans"
}, {
	"label": "Batswana",
	"value": "Batswana"
}, {
	"label": "Belarusian",
	"value": "Belarusian"
}, {
	"label": "Belgian",
	"value": "Belgian"
}, {
	"label": "Belizean",
	"value": "Belizean"
}, {
	"label": "Beninese",
	"value": "Beninese"
}, {
	"label": "Bhutanese",
	"value": "Bhutanese"
}, {
	"label": "Bolivian",
	"value": "Bolivian"
}, {
	"label": "Bosnian",
	"value": "Bosnian"
}, {
	"label": "Brazilian",
	"value": "Brazilian"
}, {
	"label": "British",
	"value": "British"
}, {
	"label": "Bruneian",
	"value": "Bruneian"
}, {
	"label": "Bulgarian",
	"value": "Bulgarian"
}, {
	"label": "Burkinabe",
	"value": "Burkinabe"
}, {
	"label": "Burmese",
	"value": "Burmese"
}, {
	"label": "Burundian",
	"value": "Burundian"
}, {
	"label": "Cambodian",
	"value": "Cambodian"
}, {
	"label": "Cameroonian",
	"value": "Cameroonian"
}, {
	"label": "Canadian",
	"value": "Canadian"
}, {
	"label": "Cape Verdean",
	"value": "Cape Verdean"
}, {
	"label": "Central African",
	"value": "Central African"
}, {
	"label": "Chadian",
	"value": "Chadian"
}, {
	"label": "Chilean",
	"value": "Chilean"
}, {
	"label": "Chinese",
	"value": "Chinese"
}, {
	"label": "Colombian",
	"value": "Colombian"
}, {
	"label": "Comoran",
	"value": "Comoran"
}, {
	"label": "Congolese",
	"value": "Congolese"
}, {
	"label": "Costa Rican",
	"value": "Costa Rican"
}, {
	"label": "Croatian",
	"value": "Croatian"
}, {
	"label": "Cuban",
	"value": "Cuban"
}, {
	"label": "Cypriot",
	"value": "Cypriot"
}, {
	"label": "Czech",
	"value": "Czech"
}, {
	"label": "Danish",
	"value": "Danish"
}, {
	"label": "Djibouti",
	"value": "Djibouti"
}, {
	"label": "Dominican",
	"value": "Dominican"
}, {
	"label": "Dutch",
	"value": "Dutch"
}, {
	"label": "Dutchman",
	"value": "Dutchman"
}, {
	"label": "Dutchwoman",
	"value": "Dutchwoman"
}, {
	"label": "East Timorese",
	"value": "East Timorese"
}, {
	"label": "Ecuadorean",
	"value": "Ecuadorean"
}, {
	"label": "Egyptian",
	"value": "Egyptian"
}, {
	"label": "Emirian",
	"value": "Emirian"
}, {
	"label": "Equatorial Guinean",
	"value": "Equatorial Guinean"
}, {
	"label": "Eritrean",
	"value": "Eritrean"
}, {
	"label": "Estonian",
	"value": "Estonian"
}, {
	"label": "Ethiopian",
	"value": "Ethiopian"
}, {
	"label": "Fijian",
	"value": "Fijian"
}, {
	"label": "Filipino",
	"value": "Filipino"
}, {
	"label": "Finnish",
	"value": "Finnish"
}, {
	"label": "French",
	"value": "French"
}, {
	"label": "Gabonese",
	"value": "Gabonese"
}, {
	"label": "Gambian",
	"value": "Gambian"
}, {
	"label": "Georgian",
	"value": "Georgian"
}, {
	"label": "German",
	"value": "German"
}, {
	"label": "Ghanaian",
	"value": "Ghanaian"
}, {
	"label": "Greek",
	"value": "Greek"
}, {
	"label": "Grenadian",
	"value": "Grenadian"
}, {
	"label": "Guatemalan",
	"value": "Guatemalan"
}, {
	"label": "Guinea-Bissauan",
	"value": "Guinea-Bissauan"
}, {
	"label": "Guinean",
	"value": "Guinean"
}, {
	"label": "Guyanese",
	"value": "Guyanese"
}, {
	"label": "Haitian",
	"value": "Haitian"
}, {
	"label": "Herzegovinian",
	"value": "Herzegovinian"
}, {
	"label": "Honduran",
	"value": "Honduran"
}, {
	"label": "Hungarian",
	"value": "Hungarian"
}, {
	"label": "I-Kiribati",
	"value": "I-Kiribati"
}, {
	"label": "Icelander",
	"value": "Icelander"
}, {
	"label": "Indian",
	"value": "Indian"
}, {
	"label": "Indonesian",
	"value": "Indonesian"
}, {
	"label": "Iranian",
	"value": "Iranian"
}, {
	"label": "Iraqi",
	"value": "Iraqi"
}, {
	"label": "Irish",
	"value": "Irish"
}, {
	"label": "Israeli",
	"value": "Israeli"
}, {
	"label": "Italian",
	"value": "Italian"
}, {
	"label": "Ivorian",
	"value": "Ivorian"
}, {
	"label": "Jamaican",
	"value": "Jamaican"
}, {
	"label": "Japanese",
	"value": "Japanese"
}, {
	"label": "Jordanian",
	"value": "Jordanian"
}, {
	"label": "Kazakhstani",
	"value": "Kazakhstani"
}, {
	"label": "Kenyan",
	"value": "Kenyan"
}, {
	"label": "Kittian and Nevisian",
	"value": "Kittian and Nevisian"
}, {
	"label": "Kuwaiti",
	"value": "Kuwaiti"
}, {
	"label": "Kyrgyz",
	"value": "Kyrgyz"
}, {
	"label": "Laotian",
	"value": "Laotian"
}, {
	"label": "Latvian",
	"value": "Latvian"
}, {
	"label": "Lebanese",
	"value": "Lebanese"
}, {
	"label": "Liberian",
	"value": "Liberian"
}, {
	"label": "Libyan",
	"value": "Libyan"
}, {
	"label": "Liechtensteiner",
	"value": "Liechtensteiner"
}, {
	"label": "Lithuanian",
	"value": "Lithuanian"
}, {
	"label": "Luxembourger",
	"value": "Luxembourger"
}, {
	"label": "Macedonian",
	"value": "Macedonian"
}, {
	"label": "Malagasy",
	"value": "Malagasy"
}, {
	"label": "Malawian",
	"value": "Malawian"
}, {
	"label": "Malaysian",
	"value": "Malaysian"
}, {
	"label": "Maldivan",
	"value": "Maldivan"
}, {
	"label": "Malian",
	"value": "Malian"
}, {
	"label": "Maltese",
	"value": "Maltese"
}, {
	"label": "Marshallese",
	"value": "Marshallese"
}, {
	"label": "Mauritanian",
	"value": "Mauritanian"
}, {
	"label": "Mauritian",
	"value": "Mauritian"
}, {
	"label": "Mexican",
	"value": "Mexican"
}, {
	"label": "Micronesian",
	"value": "Micronesian"
}, {
	"label": "Moldovan",
	"value": "Moldovan"
}, {
	"label": "Monacan",
	"value": "Monacan"
}, {
	"label": "Mongolian",
	"value": "Mongolian"
}, {
	"label": "Moroccan",
	"value": "Moroccan"
}, {
	"label": "Mosotho",
	"value": "Mosotho"
}, {
	"label": "Motswana",
	"value": "Motswana"
}, {
	"label": "Mozambican",
	"value": "Mozambican"
}, {
	"label": "Namibian",
	"value": "Namibian"
}, {
	"label": "Nauruan",
	"value": "Nauruan"
}, {
	"label": "Nepalese",
	"value": "Nepalese"
}, {
	"label": "Netherlander",
	"value": "Netherlander"
}, {
	"label": "New Zealander",
	"value": "New Zealander"
}, {
	"label": "Ni-Vanuatu",
	"value": "Ni-Vanuatu"
}, {
	"label": "Nicaraguan",
	"value": "Nicaraguan"
}, {
	"label": "Nigerian",
	"value": "Nigerian"
}, {
	"label": "Nigerien",
	"value": "Nigerien"
}, {
	"label": "North Korean",
	"value": "North Korean"
}, {
	"label": "Northern Irish",
	"value": "Northern Irish"
}, {
	"label": "Norwegian",
	"value": "Norwegian"
}, {
	"label": "Omani",
	"value": "Omani"
}, {
	"label": "Pakistani",
	"value": "Pakistani"
}, {
	"label": "Palauan",
	"value": "Palauan"
}, {
	"label": "Panamanian",
	"value": "Panamanian"
}, {
	"label": "Papua New Guinean",
	"value": "Papua New Guinean"
}, {
	"label": "Paraguayan",
	"value": "Paraguayan"
}, {
	"label": "Peruvian",
	"value": "Peruvian"
}, {
	"label": "Polish",
	"value": "Polish"
}, {
	"label": "Portuguese",
	"value": "Portuguese"
}, {
	"label": "Qatari",
	"value": "Qatari"
}, {
	"label": "Romanian",
	"value": "Romanian"
}, {
	"label": "Russian",
	"value": "Russian"
}, {
	"label": "Rwandan",
	"value": "Rwandan"
}, {
	"label": "Saint Lucian",
	"value": "Saint Lucian"
}, {
	"label": "Salvadoran",
	"value": "Salvadoran"
}, {
	"label": "Samoan",
	"value": "Samoan"
}, {
	"label": "San Marinese",
	"value": "San Marinese"
}, {
	"label": "Sao Tomean",
	"value": "Sao Tomean"
}, {
	"label": "Saudi",
	"value": "Saudi"
}, {
	"label": "Scottish",
	"value": "Scottish"
}, {
	"label": "Senegalese",
	"value": "Senegalese"
}, {
	"label": "Serbian",
	"value": "Serbian"
}, {
	"label": "Seychellois",
	"value": "Seychellois"
}, {
	"label": "Sierra Leonean",
	"value": "Sierra Leonean"
}, {
	"label": "Singaporean",
	"value": "Singaporean"
}, {
	"label": "Slovakian",
	"value": "Slovakian"
}, {
	"label": "Slovenian",
	"value": "Slovenian"
}, {
	"label": "Solomon Islander",
	"value": "Solomon Islander"
}, {
	"label": "Somali",
	"value": "Somali"
}, {
	"label": "South African",
	"value": "South African"
}, {
	"label": "South Korean",
	"value": "South Korean"
}, {
	"label": "Spanish",
	"value": "Spanish"
}, {
	"label": "Sri Lankan",
	"value": "Sri Lankan"
}, {
	"label": "Sudanese",
	"value": "Sudanese"
}, {
	"label": "Surinamer",
	"value": "Surinamer"
}, {
	"label": "Swazi",
	"value": "Swazi"
}, {
	"label": "Swedish",
	"value": "Swedish"
}, {
	"label": "Swiss",
	"value": "Swiss"
}, {
	"label": "Syrian",
	"value": "Syrian"
}, {
	"label": "Taiwanese",
	"value": "Taiwanese"
}, {
	"label": "Tajik",
	"value": "Tajik"
}, {
	"label": "Tanzanian",
	"value": "Tanzanian"
}, {
	"label": "Thai",
	"value": "Thai"
}, {
	"label": "Togolese",
	"value": "Togolese"
}, {
	"label": "Tongan",
	"value": "Tongan"
}, {
	"label": "Trinidadian or Tobagonian",
	"value": "Trinidadian or Tobagonian"
}, {
	"label": "Tunisian",
	"value": "Tunisian"
}, {
	"label": "Turkish",
	"value": "Turkish"
}, {
	"label": "Tuvaluan",
	"value": "Tuvaluan"
}, {
	"label": "Ugandan",
	"value": "Ugandan"
}, {
	"label": "Ukrainian",
	"value": "Ukrainian"
}, {
	"label": "Uruguayan",
	"value": "Uruguayan"
}, {
	"label": "Uzbekistani",
	"value": "Uzbekistani"
}, {
	"label": "Venezuelan",
	"value": "Venezuelan"
}, {
	"label": "Vietnamese",
	"value": "Vietnamese"
}, {
	"label": "Welsh",
	"value": "Welsh"
}, {
	"label": "Yemenite",
	"value": "Yemenite"
}, {
	"label": "Zambian",
	"value": "Zambian"
}, {
	"label": "Zimbabwean",
	"value": "Zimbabwean"
}]

// [{
//     "label": "Select citizenship",
//     "value": ""
//   },
//   {
//     "label": "Argentina",
//     "value": "Argentina"
//   },
//   {
//     "label": "Brazil",
//     "value": "Brazil"
//   },
//   {
//     "label": "Canada",
//     "value": "Canada"
//   },
//   {
//     "label": "China",
//     "value": "China"
//   },
//   {
//     "label": "India",
//     "value": "India"
//   },
//   {
//     "label": "Indonesia",
//     "value": "Indonesia"
//   },
//   {
//     "label": "Japan",
//     "value": "Japan"
//   },
//   {
//     "label": "Mexico",
//     "value": "Mexico"
//   },
//   {
//     "label": "Philippines",
//     "value": "Philippines"
//   },
//   {
//     "label": "Russia",
//     "value": "Russia"
//   },
//   {
//     "label": "Thailand",
//     "value": "Thailand"
//   },
//   {
//     "label": "United Kingdom (UK)",
//     "value": "United Kingdom (UK)"
//   },
//   {
//     "label": "United States of America (USA)",
//     "value": "United States of America (USA)"
//   },
//   {
//     "label": "Vietnam",
//     "value": "Vietnam"
//   },
//   {
//     "label": "Afghanistan",
//     "value": "Afghanistan"
//   },
//   {
//     "label": "Albania",
//     "value": "Albania"
//   },
//   {
//     "label": "Algeria",
//     "value": "Algeria"
//   },
//   {
//     "label": "Andorra",
//     "value": "Andorra"
//   },
//   {
//     "label": "Angola",
//     "value": "Angola"
//   },
//   {
//     "label": "Antigua and Barbuda",
//     "value": "Antigua and Barbuda"
//   },
//   {
//     "label": "Armenia",
//     "value": "Armenia"
//   },
//   {
//     "label": "Australia",
//     "value": "Australia"
//   },
//   {
//     "label": "Austria",
//     "value": "Austria"
//   },
//   {
//     "label": "Azerbaijan",
//     "value": "Azerbaijan"
//   },
//   {
//     "label": "Bahamas",
//     "value": "Bahamas"
//   },
//   {
//     "label": "Bahrain",
//     "value": "Bahrain"
//   },
//   {
//     "label": "Bangladesh",
//     "value": "Bangladesh"
//   },
//   {
//     "label": "Barbados",
//     "value": "Barbados"
//   },
//   {
//     "label": "Belarus",
//     "value": "Belarus"
//   },
//   {
//     "label": "Belgium",
//     "value": "Belgium"
//   },
//   {
//     "label": "Belize",
//     "value": "Belize"
//   },
//   {
//     "label": "Benin",
//     "value": "Benin"
//   },
//   {
//     "label": "Bhutan",
//     "value": "Bhutan"
//   },
//   {
//     "label": "Bolivia",
//     "value": "Bolivia"
//   },
//   {
//     "label": "Bosnia and Herzegovina",
//     "value": "Bosnia and Herzegovina"
//   },
//   {
//     "label": "Botswana",
//     "value": "Botswana"
//   },
//   {
//     "label": "Brunei",
//     "value": "Brunei"
//   },
//   {
//     "label": "Bulgaria",
//     "value": "Bulgaria"
//   },
//   {
//     "label": "Burkina Faso",
//     "value": "Burkina Faso"
//   },
//   {
//     "label": "Burundi",
//     "value": "Burundi"
//   },
//   {
//     "label": "Cabo Verde",
//     "value": "Cabo Verde"
//   },
//   {
//     "label": "Cambodia",
//     "value": "Cambodia"
//   },
//   {
//     "label": "Cameroon",
//     "value": "Cameroon"
//   },
//   {
//     "label": "Central African Republic (CAR)",
//     "value": "Central African Republic (CAR)"
//   },
//   {
//     "label": "Chad",
//     "value": "Chad"
//   },
//   {
//     "label": "Chile",
//     "value": "Chile"
//   },
//   {
//     "label": "Colombia",
//     "value": "Colombia"
//   },
//   {
//     "label": "Comoros",
//     "value": "Comoros"
//   },
//   {
//     "label": "Democratic Republic of the Congo",
//     "value": "Democratic Republic of the Congo"
//   },
//   {
//     "label": "Republic of the Congo",
//     "value": "Republic of the Congo"
//   },
//   {
//     "label": "Costa Rica",
//     "value": "Costa Rica"
//   },
//   {
//     "label": "Cote d'Ivoire",
//     "value": "Cote d'Ivoire"
//   },
//   {
//     "label": "Croatia",
//     "value": "Croatia"
//   },
//   {
//     "label": "Cuba",
//     "value": "Cuba"
//   },
//   {
//     "label": "Cyprus",
//     "value": "Cyprus"
//   },
//   {
//     "label": "Czech Republic",
//     "value": "Czech Republic"
//   },
//   {
//     "label": "Denmark",
//     "value": "Denmark"
//   },
//   {
//     "label": "Djibouti",
//     "value": "Djibouti"
//   },
//   {
//     "label": "Dominica",
//     "value": "Dominica"
//   },
//   {
//     "label": "Dominican Republic",
//     "value": "Dominican Republic"
//   },
//   {
//     "label": "Ecuador",
//     "value": "Ecuador"
//   },
//   {
//     "label": "Egypt",
//     "value": "Egypt"
//   },
//   {
//     "label": "El Salvador",
//     "value": "El Salvador"
//   },
//   {
//     "label": "Equatorial Guinea",
//     "value": "Equatorial Guinea"
//   },
//   {
//     "label": "Eritrea",
//     "value": "Eritrea"
//   },
//   {
//     "label": "Estonia",
//     "value": "Estonia"
//   },
//   {
//     "label": "Ethiopia",
//     "value": "Ethiopia"
//   },
//   {
//     "label": "Fiji",
//     "value": "Fiji"
//   },
//   {
//     "label": "Finland",
//     "value": "Finland"
//   },
//   {
//     "label": "France",
//     "value": "France"
//   },
//   {
//     "label": "Gabon",
//     "value": "Gabon"
//   },
//   {
//     "label": "Gambia",
//     "value": "Gambia"
//   },
//   {
//     "label": "Georgia",
//     "value": "Georgia"
//   },
//   {
//     "label": "Germany",
//     "value": "Germany"
//   },
//   {
//     "label": "Ghana",
//     "value": "Ghana"
//   },
//   {
//     "label": "Greece",
//     "value": "Greece"
//   },
//   {
//     "label": "Grenada",
//     "value": "Grenada"
//   },
//   {
//     "label": "Guatemala",
//     "value": "Guatemala"
//   },
//   {
//     "label": "Guinea",
//     "value": "Guinea"
//   },
//   {
//     "label": "Guinea-Bissau",
//     "value": "Guinea-Bissau"
//   },
//   {
//     "label": "Guyana",
//     "value": "Guyana"
//   },
//   {
//     "label": "Haiti",
//     "value": "Haiti"
//   },
//   {
//     "label": "Honduras",
//     "value": "Honduras"
//   },
//   {
//     "label": "Hungary",
//     "value": "Hungary"
//   },
//   {
//     "label": "Iceland",
//     "value": "Iceland"
//   },
//   {
//     "label": "Iran",
//     "value": "Iran"
//   },
//   {
//     "label": "Iraq",
//     "value": "Iraq"
//   },
//   {
//     "label": "Ireland",
//     "value": "Ireland"
//   },
//   {
//     "label": "Israel",
//     "value": "Israel"
//   },
//   {
//     "label": "Italy",
//     "value": "Italy"
//   },
//   {
//     "label": "Jamaica",
//     "value": "Jamaica"
//   },
//   {
//     "label": "Jordan",
//     "value": "Jordan"
//   },
//   {
//     "label": "Kazakhstan",
//     "value": "Kazakhstan"
//   },
//   {
//     "label": "Kenya",
//     "value": "Kenya"
//   },
//   {
//     "label": "Kiribati",
//     "value": "Kiribati"
//   },
//   {
//     "label": "Kosovo",
//     "value": "Kosovo"
//   },
//   {
//     "label": "Kuwait",
//     "value": "Kuwait"
//   },
//   {
//     "label": "Kyrgyzstan",
//     "value": "Kyrgyzstan"
//   },
//   {
//     "label": "Laos",
//     "value": "Laos"
//   },
//   {
//     "label": "Latvia",
//     "value": "Latvia"
//   },
//   {
//     "label": "Lebanon",
//     "value": "Lebanon"
//   },
//   {
//     "label": "Lesotho",
//     "value": "Lesotho"
//   },
//   {
//     "label": "Liberia",
//     "value": "Liberia"
//   },
//   {
//     "label": "Libya",
//     "value": "Libya"
//   },
//   {
//     "label": "Liechtenstein",
//     "value": "Liechtenstein"
//   },
//   {
//     "label": "Lithuania",
//     "value": "Lithuania"
//   },
//   {
//     "label": "Luxembourg",
//     "value": "Luxembourg"
//   },
//   {
//     "label": "Macedonia",
//     "value": "Macedonia"
//   },
//   {
//     "label": "Madagascar",
//     "value": "Madagascar"
//   },
//   {
//     "label": "Malawi",
//     "value": "Malawi"
//   },
//   {
//     "label": "Malaysia",
//     "value": "Malaysia"
//   },
//   {
//     "label": "Maldives",
//     "value": "Maldives"
//   },
//   {
//     "label": "Mali",
//     "value": "Mali"
//   },
//   {
//     "label": "Malta",
//     "value": "Malta"
//   },
//   {
//     "label": "Marshall Islands",
//     "value": "Marshall Islands"
//   },
//   {
//     "label": "Mauritania",
//     "value": "Mauritania"
//   },
//   {
//     "label": "Mauritius",
//     "value": "Mauritius"
//   },
//   {
//     "label": "Micronesia",
//     "value": "Micronesia"
//   },
//   {
//     "label": "Moldova",
//     "value": "Moldova"
//   },
//   {
//     "label": "Monaco",
//     "value": "Monaco"
//   },
//   {
//     "label": "Mongolia",
//     "value": "Mongolia"
//   },
//   {
//     "label": "Montenegro",
//     "value": "Montenegro"
//   },
//   {
//     "label": "Morocco",
//     "value": "Morocco"
//   },
//   {
//     "label": "Mozambique",
//     "value": "Mozambique"
//   },
//   {
//     "label": "Myanmar (Burma)",
//     "value": "Myanmar (Burma)"
//   },
//   {
//     "label": "Namibia",
//     "value": "Namibia"
//   },
//   {
//     "label": "Nauru",
//     "value": "Nauru"
//   },
//   {
//     "label": "Nepal",
//     "value": "Nepal"
//   },
//   {
//     "label": "Netherlands",
//     "value": "Netherlands"
//   },
//   {
//     "label": "New Zealand",
//     "value": "New Zealand"
//   },
//   {
//     "label": "Nicaragua",
//     "value": "Nicaragua"
//   },
//   {
//     "label": "Niger",
//     "value": "Niger"
//   },
//   {
//     "label": "Nigeria",
//     "value": "Nigeria"
//   },
//   {
//     "label": "North Korea",
//     "value": "North Korea"
//   },
//   {
//     "label": "Norway",
//     "value": "Norway"
//   },
//   {
//     "label": "Oman",
//     "value": "Oman"
//   },
//   {
//     "label": "Pakistan",
//     "value": "Pakistan"
//   },
//   {
//     "label": "Palau",
//     "value": "Palau"
//   },
//   {
//     "label": "Palestine",
//     "value": "Palestine"
//   },
//   {
//     "label": "Panama",
//     "value": "Panama"
//   },
//   {
//     "label": "Papua New Guinea",
//     "value": "Papua New Guinea"
//   },
//   {
//     "label": "Paraguay",
//     "value": "Paraguay"
//   },
//   {
//     "label": "Peru",
//     "value": "Peru"
//   },
//   {
//     "label": "Poland",
//     "value": "Poland"
//   },
//   {
//     "label": "Portugal",
//     "value": "Portugal"
//   },
//   {
//     "label": "Qatar",
//     "value": "Qatar"
//   },
//   {
//     "label": "Romania",
//     "value": "Romania"
//   },
//   {
//     "label": "Rwanda",
//     "value": "Rwanda"
//   },
//   {
//     "label": "Saint Kitts and Nevis",
//     "value": "Saint Kitts and Nevis"
//   },
//   {
//     "label": "Saint Lucia",
//     "value": "Saint Lucia"
//   },
//   {
//     "label": "Saint Vincent and the Grenadines",
//     "value": "Saint Vincent and the Grenadines"
//   },
//   {
//     "label": "Samoa",
//     "value": "Samoa"
//   },
//   {
//     "label": "San Marino",
//     "value": "San Marino"
//   },
//   {
//     "label": "Sao Tome and Principe",
//     "value": "Sao Tome and Principe"
//   },
//   {
//     "label": "Saudi Arabia",
//     "value": "Saudi Arabia"
//   },
//   {
//     "label": "Senegal",
//     "value": "Senegal"
//   },
//   {
//     "label": "Serbia",
//     "value": "Serbia"
//   },
//   {
//     "label": "Seychelles",
//     "value": "Seychelles"
//   },
//   {
//     "label": "Sierra Leone",
//     "value": "Sierra Leone"
//   },
//   {
//     "label": "Singapore",
//     "value": "Singapore"
//   },
//   {
//     "label": "Slovakia",
//     "value": "Slovakia"
//   },
//   {
//     "label": "Slovenia",
//     "value": "Slovenia"
//   },
//   {
//     "label": "Solomon Islands",
//     "value": "Solomon Islands"
//   },
//   {
//     "label": "Somalia",
//     "value": "Somalia"
//   },
//   {
//     "label": "South Africa",
//     "value": "South Africa"
//   },
//   {
//     "label": "South Korea",
//     "value": "South Korea"
//   },
//   {
//     "label": "South Sudan",
//     "value": "South Sudan"
//   },
//   {
//     "label": "Spain",
//     "value": "Spain"
//   },
//   {
//     "label": "Sri Lanka",
//     "value": "Sri Lanka"
//   },
//   {
//     "label": "Sudan",
//     "value": "Sudan"
//   },
//   {
//     "label": "Suriname",
//     "value": "Suriname"
//   },
//   {
//     "label": "Swaziland",
//     "value": "Swaziland"
//   },
//   {
//     "label": "Sweden",
//     "value": "Sweden"
//   },
//   {
//     "label": "Switzerland",
//     "value": "Switzerland"
//   },
//   {
//     "label": "Syria",
//     "value": "Syria"
//   },
//   {
//     "label": "Taiwan",
//     "value": "Taiwan"
//   },
//   {
//     "label": "Tajikistan",
//     "value": "Tajikistan"
//   },
//   {
//     "label": "Tanzania",
//     "value": "Tanzania"
//   },
//   {
//     "label": "Timor-Leste",
//     "value": "Timor-Leste"
//   },
//   {
//     "label": "Togo",
//     "value": "Togo"
//   },
//   {
//     "label": "Tonga",
//     "value": "Tonga"
//   },
//   {
//     "label": "Trinidad and Tobago",
//     "value": "Trinidad and Tobago"
//   },
//   {
//     "label": "Tunisia",
//     "value": "Tunisia"
//   },
//   {
//     "label": "Turkey",
//     "value": "Turkey"
//   },
//   {
//     "label": "Turkmenistan",
//     "value": "Turkmenistan"
//   },
//   {
//     "label": "Tuvalu",
//     "value": "Tuvalu"
//   },
//   {
//     "label": "Uganda",
//     "value": "Uganda"
//   },
//   {
//     "label": "Ukraine",
//     "value": "Ukraine"
//   },
//   {
//     "label": "United Arab Emirates (UAE)",
//     "value": "United Arab Emirates (UAE)"
//   },
//   {
//     "label": "Uruguay",
//     "value": "Uruguay"
//   },
//   {
//     "label": "Uzbekistan",
//     "value": "Uzbekistan"
//   },
//   {
//     "label": "Vanuatu",
//     "value": "Vanuatu"
//   },
//   {
//     "label": "Vatican City (Holy See)",
//     "value": "Vatican City (Holy See)"
//   },
//   {
//     "label": "Venezuela",
//     "value": "Venezuela"
//   },
//   {
//     "label": "Yemen",
//     "value": "Yemen"
//   },
//   {
//     "label": "Zambia",
//     "value": "Zambia"
//   },
//   {
//     "label": "Zimbabwe",
//     "value": "Zimbabwe"
//   }
// ]
      },
      // {
      //   label               : "Ethnicity",
      //   id                  : "ethnicity",
      //   name                : "ethnicity",
      //   type                : "select",
      //   required            : true,
      //   toolTipShow         : true,
      //   toolTipMsg          : "Tooltip Text",
      //   input               : [{label: 'Select ethnicities',
      //                           value: ""
      //                         },
      //                         {
      //                           label: 'Caucasian',
      //                           value: 'Caucasian'
      //                         },
      //                         {
      //                           label: 'African',
      //                           value: 'African'
      //                         },
      //                         {
      //                           label: 'Southeast Asian (Indo/Thai/Philippine)',
      //                           value: 'Southeast Asian (Indo/Thai/Philippine)'
      //                         },
      //                         {
      //                           label: 'East Asian (Chinese/Japanese)',
      //                           value: 'East Asian (Chinese/Japanese)'
      //                         },
      //                         {
      //                           label: 'South Asian (Indian)',
      //                           value: 'South Asian (Indian)'
      //                         },
      //                         {
      //                           label: 'Latin American',
      //                           value: 'Latin American'
      //                         },
      //                         {
      //                           label: 'Other',
      //                           value: 'Other'
      //                         }]
      // },
      {
        label               : "Occupation",
        id                  : "occupation",
        name                : "occupation",
        type                : "text",
        required            : false,
        toolTipShow         : true,
        toolTipMsg          : "We need to know more than just what you look like, give us a little insight."
      },
      // {
      //   label               : "Languages spoken",
      //   id                  : "languages",
      //   name                : "languages",
      //   type                : "lang",
      //   required            : true,
      //   toolTipShow         : true,
      //   toolTipMsg          : "Tooltip text"
      // },
      {
        label               : "Email",
        id                  : "email",
        name                : "email",
        type                : "text",
        required            : true,
        toolTipShow         : false,
        toolTipMsg          : "Tooltip text"
      },
      {
        label               : "Phone number",
        id                  : "phoneNumber",
        name                : "phoneNumber",
        type                : "un",
        required            : true,
        toolTipShow         : false,
        toolTipMsg          : "Tooltip text"
      }]
    ]
  }
}

module.exports = Form;
