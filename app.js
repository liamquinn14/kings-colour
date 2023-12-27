let newColor;
let questionCombination = []
let answerCombination
let difficulty = ""

const questions = {
    red: [
        [0, 0, 0, 1],[0, 0, 1, 0,],[1, 0, 0, 0],[0, 1, 0, 0]
    ],
    blue: [
        [0, 0, 0, 1],[0, 0, 1, 0,],[1, 0, 0, 0],[0, 1, 0, 0]
    ],
    green: [
        [0, 0, 0, 1],[0, 0, 1, 0,],[1, 0, 0, 0],[0, 1, 0, 0]
    ],
    yellow: [
        [0, 0, 0, 1],[0, 0, 1, 0,],[1, 0, 0, 0],[0, 1, 0, 0]
    ],
    black: [
      [0, 0, 0, 1],[0, 0, 1, 0,],[1, 0, 0, 0],[0, 1, 0, 0]
    ],
    white: [
        [0, 0, 0, 1],[0, 0, 1, 0,],[1, 0, 0, 0],[0, 1, 0, 0]
    ],
};

let easyCountries = ["United Kingdom", "Spain", "France", "Germany", "Switzerland", "Italy", "Canada", "Japan", "China", "England", "Belgium", "Russia", "United States", "Australia", "New Zealand", "North Korea", "South Korea", "Turkey", "Denmark", "Austria", "Czech Republic", "Senegal", "Morocco", "Cameroon", "Wales", "Egypt", "Mexico", "Ireland", "Scotland", "Sweden", "Ukraine", "India", "Nigeria", "Brazil", "Argentina", "Norway", "Iceland", "Hungary", "Netherlands", "Poland", "Portugal", "Romania", "Serbia"]

let normalCountries = ["United Kingdom", "Spain", "France", "Germany", "Switzerland", "Italy", "Canada", "Japan", "China", "England", "Belgium", "Russia", "United States", "Ghana", "Bangladesh", "Cameroon", "South Africa", "Algeria", "Tunisia", "Egypt", "Wales", "Morocco", "Kenya", "Australia", "New Zealand", "Ecuador", "Mexico", "Peru", "Cuba", "Puerto Rico", "Turkey", "Denmark", "North Korea", "South Korea", "Croatia", "Czech Republic", "Austria", "Thailand", "Malaysia", "Iran", "Iraq", "Colombia","Ireland", "Scotland", "Sweden", "Ukraine", "India", "Nigeria", "Brazil", "Jamaica", "Uruguay", "Saudi Arabia", "Kazakhstan", "Cyprus", "Israel", "Argentina", "Finland", "Estonia", "Ivory Coast", "Bosnia & Herzegovina", "United Arab Emirates", "Ethiopia", "Norway", "Senegal", "Iceland", "Portugal", "Hungary", "Netherlands", "Poland",  "Romania", "Serbia", "Lithuania", "Luxembourg", "Latvia", "Monaco", "Moldova", "Montenegro", "Slovakia", "Slovenia"]

let hardCountries = ["Ghana", "Bangladesh", "Cameroon", "South Africa", "Algeria", "Tunisia", "Morocco", "Kenya", "Ecuador", "Mexico", "Peru", "Cuba", "Turkey", "Denmark", "North Korea", "South Korea", "Croatia", "Czech Republic", "Austria", "Thailand", "Malaysia", "Iran", "Iraq", "Senegal", "Uganda", "Zimbabwe","Colombia", "Puerto Rico", "Namibia", "United Arab Emirates", "Philippines", "Haiti", "Dominican Republic", "Albania", "Yemen", "Jamaica", "Uruguay", "Saudi Arabia", "Kazakhstan", "Cyprus", "Finland", "Estonia", "Ivory Coast", "Somalia", "Rwanda", "Botswana", "Niger", "Gabon", "Sierra Leone", "Somalia", "Tanzania", "Guatemala", "Bosnia & Herzegovina", "Ethiopia", "Hungary", "Lithuania", "Luxembourg", "Latvia", "Monaco", "Moldova", "Montenegro", "Malta", "Slovakia", "Slovenia"]

let insaneCountries = ["Cameroon", "Algeria", "Kenya", "Ecuador", "Peru", "Cuba", "Puerto Rico", "Malaysia", "Democratic Republic of Congo", "Hong Kong", "Singapore", "Mali", "Malawi", "Namibia", "Zambia", "Angola", "Burkina Faso", "Burundi", "Benin", "Central African Republic", "Cape Verde", "Eritrea", "Ethiopia", "Gambia", "Guinea", "Liberia", "Libya", "Madagascar", "Mauritania", "Mauritius", "Seychelles", "Sudan", "South Sudan", "Eswatini", "Chad", "Togo", "Uganda", "Zimbabwe", "Chile", "Costa Rica", "Dominican Republic", "Ecuador", "Grenada", "Guyana", "Haiti", "Panama", "Peru", "Suriname", "Trinidad & Tobago", "Venezuela", "United Arab Emirates", "Afghanistan", "Azerbaijan", "Bahrain", "Brunei", "Hong Kong", "Indonesia", "Jordan", "Kyrgyzstan", "Cambodia", "Kuwait", "Laos", "Lebanon", "Sri Lanka", "Myanmar", "Mongolia", "Malaysia", "Nepal", "Oman", "Philippines", "Syria", "Thailand", "Tajikistan", "Turkmenistan", "Taiwan", "Vietnam", "Yemen", "Andorra", "Albania", "Armenia", "Georgia","Djibouti", "Somalia", "Lesotho", "Botswana", "Niger", "Gabon", "Sierra Leone", "Tanzania", "Barbados", "Bahamas", "Guatemala", "Honduras", "Nicaragua", "Malta", "El Salvador", "Kazakhstan", "Uzbekistan", "San Marino", "Tonga", "Kiribati", "Sao Tome & Principe"]

let allCountries = ["China", "Democratic Republic of Congo", "United Kingdom", "Spain", "France", "Germany", "Switzerland", "Hong Kong", "Italy", "Canada", "Singapore", "Mali", "Malawi", "Norway", "Japan", "Ghana", "Bangladesh", "Cameroon", "South Africa", "Namibia", "Zambia", "Algeria", "Tunisia", "Egypt", "Angola", "Burkina Faso", "Burundi", "Benin", "Central African Republic", "Cape Verde", "Eritrea", "Ethiopia", "Gambia", "Guinea", "Kenya", "Liberia", "Libya", "Morocco", "Madagascar", "Mauritania", "Mauritius", "Seychelles", "Sudan", "South Sudan", "Senegal", "Eswatini", "Chad", "Togo", "Uganda", "Zimbabwe", "Chile", "Colombia", "Costa Rica", "Dominican Republic", "Ecuador", "Grenada", "Guyana", "Haiti", "Mexico", "Panama", "Peru", "Puerto Rico", "Suriname", "Trinidad & Tobago", "United States", "Venezuela", "United Arab Emirates", "Afghanistan", "Azerbaijan", "Bahrain", "Brunei", "Hong Kong", "Indonesia", "Iraq", "Iran", "Jordan", "Kyrgyzstan", "Cambodia", "North Korea", "South Korea", "Kuwait", "Laos", "Lebanon", "Sri Lanka", "Myanmar", "Mongolia", "Malaysia", "Nepal", "Oman", "Philippines", "Russia", "Syria", "Thailand", "Tajikistan", "Turkmenistan", "Turkey", "Taiwan", "Vietnam", "Yemen", "Andorra", "Albania", "Armenia", "Austria", "Belgium", "Bulgaria", "Belarus", "Czech Republic", "Denmark", "Georgia", "Croatia", "Djibouti", "Ireland", "Scotland", "Israel", "Somalia", "Brazil", "Rwanda", "Finland", "Estonia", "Sweden", "Lesotho", "Botswana", "Niger", "Nigeria", "India", "Pakistan", "Ivory Coast", "Gabon", "Sierra Leone", "Tanzania", "Argentina", "Barbados", "Bahamas", "Guatemala", "Honduras", "Uruguay", "Jamaica", "Nicaragua", "El Salvador", "Kazakhstan", "Saudi Arabia", "Uzbekistan", "Bosnia & Herzegovina", "Cyprus", "Iceland", "Australia", "New Zealand", "Hungary", "Liechtenstein", "Lithuania", "Luxembourg", "Latvia", "Monaco", "Moldova", "Montenegro", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Serbia", "Slovakia", "Slovenia", "San Marino", "Tonga", "Kiribati", "Sao Tome & Principe"]

const countries = {
  easy: {
    redCountries: ["United Kingdom", "Spain", "France", "Germany", "Switzerland", "Italy", "Canada", "Japan", "China", "England", "Belgium", "Russia", "United States", "Australia", "New Zealand", "North Korea", "South Korea", "Turkey", "Denmark", "Austria", "Czech Republic", "Senegal", "Morocco", "Cameroon", "Wales", "Egypt", "Mexico", "Norway", "Iceland", "Portugal", "Hungary", "Netherlands", "Poland", "Romania", "Serbia"],
    nonRedCountries: ["Ireland", "Scotland", "Sweden", "Ukraine", "India", "Nigeria", "Brazil", "Argentina"],
    blueCountries: ["United Kingdom", "France", "Russia", "United States", "Australia", "New Zealand", "North Korea", "South Korea", "Czech Republic", "Scotland", "Sweden", "Ukraine", "Brazil", "Argentina", "Norway", "Iceland", "Netherlands", "Romania", "Serbia", "India"],
    nonBlueCountries: ["Spain", "Germany", "Switzerland", "Italy", "Canada", "Japan", "China", "England", "Belgium", "Turkey", "Denmark", "Austria", "Senegal", "Morocco", "Cameroon", "Wales", "Egypt", "Mexico", "Ireland", "Nigeria", "Hungary", "Poland", "Portugal"],
    greenCountries: ['Italy','Senegal','Cameroon','Mexico','Ireland','India','Nigeria','Brazil','Hungary','Portugal'],
    nonGreenCountries: ['United Kingdom','Spain','France','Germany','Switzerland','Canada','Japan','China','Belgium','Russia','United States','Australia','New Zealand','North Korea','South Korea','Turkey','Denmark','Austria','Czech Republic','Morocco','Egypt','Scotland','Sweden','Argentina','Norway','Iceland','Netherlands','Poland','Romania','Serbia'],
    yellowCountries: [ 'Spain','Germany','China','England','Belgium','Senegal','Cameroon','Wales','Sweden','Ukraine','Brazil','Argentina','Portugal','Romania','Serbia'],
    nonYellowCountries: [ 'United Kingdom','France','Switzerland','Italy','Canada','Japan','Russia','United States','Australia','New Zealand','North Korea','South Korea','Turkey','Denmark','Austria','Czech Republic','Morocco','Egypt','Mexico','Ireland','Scotland','India','Nigeria','Norway','Iceland','Hungary','Netherlands','Poland' ],
    whiteCountries: ['United Kingdom','France','Switzerland','Italy','Canada','Japan','Russia','United States','Australia','New Zealand','North Korea','South Korea','Turkey','Denmark','Austria','Czech Republic','Egypt','Mexico','Ireland','Scotland','India','Nigeria','Brazil','Argentina','Norway','Iceland','Hungary','Netherlands','Poland','Portugal','Serbia'],
    nonWhiteCountries: ['Spain','Germany','China','Belgium','Senegal','Morocco','Cameroon','Sweden','Romania'],
    blackCountries: ['Germany', 'Belgium', 'South Korea', 'Egypt', "Jamaica", "Albania", "Ghana", "Kenya", "Iraq", "Tanzania", "South Africa"],
    nonBlackCountries: ['United Kingdom','Spain','France','Switzerland','Italy','Canada','Japan','China','Russia','United States','Australia','New Zealand','North Korea','Turkey','Denmark','Austria','Czech Republic','Senegal','Morocco','Cameroon','Mexico','Ireland','Scotland','Sweden','India','Nigeria','Brazil','Argentina','Norway','Iceland','Hungary','Netherlands','Poland','Portugal','Romania','Serbia']
  },
  normal: {
    redCountries: ["United Kingdom", "Spain", "France", "Germany", "Switzerland", "Italy", "Canada", "Japan", "China", "England", "Belgium", "Russia", "United States", "Ghana", "Bangladesh", "Cameroon", "South Africa", "Algeria", "Tunisia", "Egypt", "Wales", "Morocco", "Kenya", "Australia", "New Zealand", "Ecuador", "Mexico", "Peru", "Cuba", "Puerto Rico", "Turkey", "Denmark", "North Korea", "South Korea", "Croatia", "Czech Republic", "Austria", "Thailand", "Malaysia", "Iran", "Iraq", "Colombia", "United Arab Emirates", "Ethiopia", "Norway", "Senegal", "Portugal", "Hungary", "Netherlands", "Poland", "Romania", "Serbia"],
    nonRedCountries: ["Ireland", "Scotland", "Sweden", "Ukraine", "India", "Nigeria", "Brazil", "Jamaica", "Uruguay", "Saudi Arabia", "Kazakhstan", "Cyprus", "Israel", "Argentina", "Finland", "Estonia", "Ivory Coast", "Bosnia & Herzegovina"],
    blueCountries: ["United Kingdom", "France", "Russia", "United States", "South Africa", "Australia", "New Zealand", "Ecuador", "Cuba", "Puerto Rico", "North Korea", "South Korea", "Croatia", "Czech Republic", "Thailand", "Malaysia", "Colombia", "Scotland", "Sweden", "Ukraine", "Brazil", "Uruguay", "Kazakhstan", "Israel", "Argentina", "Finland", "Estonia", "Bosnia & Herzegovina", "Ethiopia", "Norway", "Iceland", "Netherlands", "Romania", "Serbia", "Luxembourg", "Moldova", "Slovakia", "Slovenia", "India"],
    nonBlueCountries: ["Spain", "Germany", "Switzerland", "Italy", "Canada", "Japan", "China", "England", "Belgium", "Ghana", "Bangladesh", "Cameroon", "Algeria", "Tunisia", "Egypt", "Wales", "Morocco", "Kenya", "Mexico", "Peru", "Turkey", "Denmark", "Austria", "Iran", "Iraq", "Ireland", "Nigeria", "Jamaica", "Saudi Arabia", "Cyprus", "Ivory Coast", "United Arab Emirates", "Senegal", "Portugal", "Hungary", "Poland",  "Romania", "Lithuania", "Latvia", "Monaco", "Montenegro"],
    greenCountries: [ 'Italy','Ghana','Bangladesh','Cameroon','South Africa','Algeria','Kenya','Ecuador','Mexico','Iran','Iraq','Ireland','India','Nigeria','Brazil','Jamaica','Saudi Arabia','Ivory Coast','United Arab Emirates','Ethiopia','Senegal','Portugal','Hungary','Lithuania' ],
    nonGreenCountries: ['United Kingdom','Spain','France','Germany','Switzerland','Canada','Japan','China','Belgium','Russia','United States','Tunisia','Egypt','Morocco','Australia','New Zealand','Peru','Puerto Rico','Turkey','Denmark','North Korea','South Korea','Croatia','Czech Republic','Austria','Thailand','Malaysia','Colombia','Scotland','Sweden','Uruguay','Kazakhstan','Cyprus','Israel','Argentina','Finland','Estonia','Bosnia & Herzegovina','Norway','Iceland','Netherlands','Poland','Romania','Serbia','Luxembourg','Latvia','Monaco','Moldova','Montenegro','Slovakia','Slovenia'],
    yellowCountries: ['Spain','Germany','China','Belgium','Ghana','Cameroon','South Africa','Ecuador','Malaysia','Colombia','Sweden','Brazil','Jamaica','Uruguay','Kazakhstan','Cyprus','Argentina','Bosnia & Herzegovina','Ethiopia','Senegal','Portugal','Romania','Serbia','Lithuania','Moldova','Montenegro'],
    nonYellowCountries: ['United Kingdom','France','Switzerland','Italy','Canada','Japan','Russia','United States','Bangladesh','Algeria','Tunisia','Egypt','Morocco','Kenya','Australia','New Zealand','Mexico','Peru','Puerto Rico','Turkey','Denmark','North Korea','South Korea','Croatia','Czech Republic','Austria','Thailand','Iran','Iraq','Ireland','Scotland','India','Nigeria','Saudi Arabia','Israel','Finland','Estonia','Ivory Coast','United Arab Emirates','Norway','Iceland','Hungary','Netherlands','Poland','Luxembourg','Latvia','Monaco','Slovakia','Slovenia'],
    whiteCountries: ['United Kingdom','France','Switzerland','Italy','Canada','Japan','Russia','United States','South Africa','Algeria','Tunisia','Egypt','Kenya','Australia','New Zealand','Mexico','Peru','Puerto Rico','Turkey','Denmark','North Korea','South Korea','Croatia','Czech Republic','Austria','Thailand','Malaysia','Iran','Iraq','Ireland','Scotland','India','Nigeria','Brazil','Uruguay','Saudi Arabia','Cyprus','Israel','Argentina','Finland','Estonia','Ivory Coast','Bosnia & Herzegovina','United Arab Emirates','Norway','Iceland','Portugal','Hungary','Netherlands','Poland','Serbia','Luxembourg','Latvia','Monaco','Slovakia','Slovenia'],
    nonWhiteCountries: ['Spain','Germany','China','Belgium','Ghana','Bangladesh','Cameroon','Morocco','Ecuador','Colombia','Sweden','Jamaica','Kazakhstan','Ethiopia','Senegal','Romania','Lithuania','Moldova','Montenegro'],
    blackCountries: ['Germany','Belgium','Ghana','South Africa','Egypt','Kenya','South Korea','Iraq','Jamaica','Estonia','United Arab Emirates', 'Albania', 'Tanzania', 'Barbados', 'Angola', 'Uganda'],
    nonBlackCountries: [ 'United Kingdom','Spain','France','Switzerland','Italy','Canada','Japan','China','Russia','United States','Bangladesh','Cameroon','Algeria','Tunisia','Morocco','Australia','New Zealand','Ecuador','Mexico','Peru','Puerto Rico','Turkey','Denmark','North Korea','Croatia','Czech Republic','Austria','Thailand','Malaysia','Iran','Colombia','Ireland','Scotland','Sweden','India','Nigeria','Brazil','Uruguay','Saudi Arabia','Kazakhstan','Cyprus','Israel','Argentina','Finland','Ivory Coast','Bosnia & Herzegovina','Ethiopia','Norway','Senegal','Iceland','Portugal','Hungary','Netherlands','Poland','Romania','Serbia','Lithuania','Luxembourg','Latvia','Monaco','Moldova','Montenegro','Slovakia','Slovenia'],
  },
  hard: {
    redCountries: ["Ghana", "Bangladesh", "Cameroon", "South Africa", "Algeria", "Tunisia", "Morocco", "Kenya", "Australia", "New Zealand", "Ecuador", "Mexico", "Peru", "Cuba", "Puerto Rico", "Turkey", "Denmark", "North Korea", "South Korea", "Croatia", "Czech Republic", "Austria", "Thailand", "Malaysia", "Iran", "Iraq", "Senegal", "Uganda", "Zimbabwe","Colombia", "Puerto Rico", "Namibia", "United Arab Emirates", "Philippines", "Haiti", "Dominican Republic", "Albania", "Yemen", "Latvia"],
    nonRedCountries: ["Jamaica", "Uruguay", "Saudi Arabia", "Kazakhstan", "Cyprus", "Finland", "Estonia", "Ivory Coast", "Somalia", "Rwanda", "Botswana", "Niger", "Gabon", "Sierra Leone", "Somalia", "Tanzania", "Guatemala", "Bosnia & Herzegovina"],
    blueCountries: ["South Africa", "Ecuador", "Cuba", "Puerto Rico", "North Korea", "South Korea", "Croatia", "Czech Republic", "Thailand", "Malaysia", "Colombia", "Namibia", "Philippines", "Haiti", "Dominican Republic", "Uruguay", "Kazakhstan", "Finland", "Estonia", "Somalia", "Rwanda", "Botswana", "Gabon", "Sierra Leone", "Tanzania", "Guatemala", "Bosnia & Herzegovina", "Ethiopia", "Luxembourg",  "Moldova", "Slovakia", "Slovenia"],
    nonBlueCountries: ["Ghana", "Bangladesh", "Cameroon", "Mexico", "Peru", "Turkey", "Denmark", "Austria", "Iran", "Iraq", "Senegal", "Uganda", "Zimbabwe", "United Arab Emirates", "Albania", "Yemen", "Jamaica", "Saudi Arabia", "Cyprus", "Ivory Coast", "Niger", "Hungary", "Lithuania", "Latvia", "Monaco", "Montenegro", "Malta"],
    greenCountries: ['Ghana','Bangladesh','Cameroon','South Africa','Algeria','Kenya','Ecuador','Mexico','Iran','Iraq','Senegal','Zimbabwe','Namibia','United Arab Emirates','Haiti','Jamaica','Saudi Arabia','Ivory Coast','Rwanda','Niger','Gabon','Sierra Leone','Tanzania','Ethiopia','Hungary','Lithuania'],
    nonGreenCountries: ['Tunisia','Morocco','Peru','Turkey','Denmark','North Korea','South Korea','Croatia','Czech Republic','Austria','Thailand','Malaysia','Uganda','Colombia','Puerto Rico','Philippines','Dominican Republic','Albania','Yemen','Uruguay','Kazakhstan','Cyprus','Finland','Estonia','Somalia','Botswana','Somalia','Guatemala','Bosnia & Herzegovina','Luxembourg','Latvia','Monaco','Moldova','Montenegro','Malta','Slovakia','Slovenia'],
    yellowCountries: ['Ghana','Cameroon','South Africa','Ecuador','Malaysia','Senegal','Uganda','Zimbabwe','Colombia','Jamaica','Uruguay','Kazakhstan','Cyprus','Rwanda','Gabon','Tanzania','Guatemala','Bosnia & Herzegovina','Ethiopia','Lithuania','Moldova','Montenegro'],
    nonYellowCountries: ['Bangladesh','Algeria','Tunisia','Morocco','Kenya','Mexico','Peru','Turkey','Denmark','North Korea','South Korea','Croatia','Czech Republic','Austria','Thailand','Iran','Iraq','Puerto Rico','Namibia','United Arab Emirates','Philippines','Haiti','Dominican Republic','Albania','Yemen','Saudi Arabia','Finland','Estonia','Ivory Coast','Somalia','Botswana','Niger','Sierra Leone','Somalia','Hungary','Luxembourg','Latvia','Monaco','Malta','Slovakia','Slovenia'],
    whiteCountries: [ 'South Africa','Algeria','Tunisia','Kenya','Mexico','Peru','Turkey','Denmark','North Korea','South Korea','Croatia','Czech Republic','Austria','Thailand','Malaysia','Iran','Iraq','Uganda','Zimbabwe','Puerto Rico','Namibia','United Arab Emirates','Philippines','Haiti','Dominican Republic','Yemen','Uruguay','Saudi Arabia','Cyprus','Finland','Estonia','Ivory Coast','Somalia','Botswana','Niger','Sierra Leone','Somalia','Guatemala','Bosnia & Herzegovina','Hungary','Luxembourg','Latvia','Monaco','Malta','Slovakia','Slovenia' ],
    nonWhiteCountries: ['Ghana','Bangladesh','Cameroon','Morocco','Ecuador','Senegal','Colombia','Albania','Jamaica','Kazakhstan','Rwanda','Gabon','Tanzania','Ethiopia','Lithuania','Moldova','Montenegro'],
    blackCountries: ["Germany", "Malawi", "Ghana", "South Africa", "Zambia", "Egypt", "Angola", "Kenya", "Libya", "Sudan", "South Sudan", "Eswatini", "Uganda", "Zimbabwe", "Guyana", "Trinidad & Tobago", "United Arab Emirates", "Afghanistan", "Brunei", "Iraq", "Jordan", "South Korea", "Kuwait", "Syria", "Yemen", "Albania", "Belgium", "Estonia", "Lesotho", "Botswana", "Tanzania", "Barbados", "Bahamas", "Jamaica", "Sao Tome & Principe"],
    nonBlackCountries: [ 'Bangladesh','Cameroon','Algeria','Tunisia','Morocco','Ecuador','Mexico','Peru','Turkey','Denmark','North Korea','Croatia','Czech Republic','Austria','Thailand','Malaysia','Iran','Senegal','Colombia','Puerto Rico','Namibia','Philippines','Haiti','Dominican Republic','Uruguay','Saudi Arabia','Kazakhstan','Cyprus','Finland','Ivory Coast','Somalia','Rwanda','Niger','Gabon','Sierra Leone','Somalia','Guatemala','Bosnia & Herzegovina','Ethiopia','Hungary','Lithuania','Luxembourg','Latvia','Monaco','Moldova','Montenegro','Malta','Slovakia','Slovenia' ],
  },
  insane: {
    redCountries: ["Cameroon", "Algeria", "Kenya", "Ecuador", "Peru", "Cuba", "Puerto Rico", "Malaysia", "Democratic Republic of Congo", "Hong Kong", "Singapore", "Mali", "Malawi", "Namibia", "Zambia", "Angola", "Burkina Faso", "Burundi", "Benin", "Central African Republic", "Cape Verde", "Eritrea", "Ethiopia", "Gambia", "Guinea", "Liberia", "Libya", "Madagascar", "Mauritania", "Mauritius", "Seychelles", "Sudan", "South Sudan", "Eswatini", "Chad", "Togo", "Uganda", "Zimbabwe", "Chile", "Costa Rica", "Dominican Republic", "Ecuador", "Grenada", "Guyana", "Haiti", "Panama", "Peru", "Suriname", "Trinidad & Tobago", "Venezuela", "United Arab Emirates", "Afghanistan", "Azerbaijan", "Bahrain", "Brunei", "Hong Kong", "Indonesia", "Jordan", "Kyrgyzstan", "Cambodia", "Kuwait", "Laos", "Lebanon", "Sri Lanka", "Myanmar", "Mongolia", "Malaysia", "Nepal", "Oman", "Philippines", "Syria", "Thailand", "Tajikistan", "Turkmenistan", "Taiwan", "Vietnam", "Yemen", "Andorra", "Albania", "Armenia", "Georgia", "Malta", "San Marino", "Tonga", "Kiribati", "Sao Tome & Principe"],
    nonRedCountries:["Djibouti", "Somalia", "Lesotho", "Botswana", "Niger", "Gabon", "Sierra Leone", "Somalia", "Tanzania", "Barbados", "Bahamas", "Guatemala", "Honduras", "Nicaragua", "El Salvador", "Kazakhstan", "Uzbekistan", "San Marino"],
    blueCountries: ["Ecuador", "Cuba", "Puerto Rico", "Malaysia", "Democratic Republic of Congo", "Namibia", "Central African Republic", "Cape Verde", "Eritrea", "Ethiopia", "Gambia", "Liberia", "Mauritania", "Mauritius", "Seychelles", "South Sudan", "Eswatini", "Chad", "Chile", "Costa Rica", "Dominican Republic", "Ecuador", "Haiti", "Panama", "Venezuela", "Azerbaijan", "Cambodia", "Laos",   "Mongolia", "Malaysia", "Nepal", "Philippines", "Thailand", "Taiwan", "Andorra", "Armenia", "Djibouti", "Somalia", "Lesotho", "Botswana", "Gabon", "Sierra Leone", "Tanzania", "Barbados", "Bahamas", "Guatemala", "Honduras", "Nicaragua", "El Salvador", "Kazakhstan", "Uzbekistan", "San Marino", "Kiribati"],
    nonBlueCountries: [ 'Cameroon', 'Algeria', 'Kenya', 'Peru', 'Hong Kong', 'Singapore', 'Mali', 'Malawi', 'Zambia', 'Angola', 'Burkina Faso', 'Burundi', 'Benin', 'Guinea', 'Libya', 'Madagascar', 'Sudan', 'Togo', 'Uganda', 'Zimbabwe', 'Grenada', 'Guyana', 'Peru', 'Suriname', 'Trinidad & Tobago', 'United Arab Emirates', 'Afghanistan', 'Bahrain', 'Brunei', 'Hong Kong', 'Indonesia', 'Jordan', 'Kyrgyzstan', 'Kuwait', 'Lebanon', 'Sri Lanka', 'Myanmar', 'Oman', 'Syria', 'Turkmenistan', 'Vietnam', 'Yemen', 'Albania', 'Georgia', 'Niger', 'Malta', 'Tonga', 'Sao Tome & Principe' ],
    greenCountries: ['Cameroon','Algeria','Kenya','Ecuador','Mali','Malawi','Namibia','Zambia','Burkina Faso','Burundi','Benin','Central African Republic','Eritrea','Ethiopia','Gambia','Guinea','Libya','Madagascar','Mauritania','Mauritius','Seychelles','Sudan','South Sudan','Eswatini','Togo','Zimbabwe','Ecuador','Grenada','Guyana','Haiti','Suriname','Venezuela','United Arab Emirates','Afghanistan','Azerbaijan','Jordan','Kyrgyzstan','Cambodia','Kuwait','Lebanon','Sri Lanka','Myanmar','Oman','Syria','Tajikistan','Turkmenistan','Djibouti','Lesotho','Niger','Gabon','Sierra Leone','Tanzania','Uzbekistan','San Marino','Sao Tome & Principe'],
    nonGreenCountries: ['Peru','Puerto Rico','Malaysia','Democratic Republic of Congo','Hong Kong','Singapore','Angola','Cape Verde','Liberia','Chad','Uganda','Chile','Costa Rica','Dominican Republic','Panama','Peru','Trinidad & Tobago','Bahrain','Brunei','Hong Kong','Indonesia','Laos','Mongolia','Malaysia','Nepal','Philippines','Thailand','Taiwan','Vietnam','Yemen','Andorra','Albania','Armenia','Georgia','Somalia','Botswana','Barbados','Bahamas','Guatemala','Honduras','Nicaragua','Malta','El Salvador','Kazakhstan','Tonga','Kiribati'],
    yellowCountries: ['Cameroon','Ecuador','Malaysia','Mali','Angola','Burkina Faso','Benin','Central African Republic','Cape Verde','Eritrea','Ethiopia','Guinea','Mauritania','Mauritius','Seychelles','South Sudan','Eswatini','Chad','Togo','Uganda','Zimbabwe','Ecuador','Grenada','Guyana','Suriname','Venezuela','Brunei','Kyrgyzstan','Sri Lanka','Myanmar','Mongolia','Malaysia','Tajikistan','Vietnam','Andorra','Gabon','Tanzania','Barbados','Bahamas','Guatemala','Nicaragua','El Salvador','Kazakhstan','San Marino','Kiribati','Sao Tome & Principe'],
    nonYellowCountries: ['Algeria','Kenya','Peru','Puerto Rico','Democratic Republic of Congo','Hong Kong','Singapore','Malawi','Namibia','Zambia','Burundi','Gambia','Liberia','Libya','Madagascar','Sudan','Chile','Costa Rica','Dominican Republic','Haiti','Panama','Peru','Trinidad & Tobago','United Arab Emirates','Afghanistan','Azerbaijan','Bahrain','Hong Kong','Indonesia','Jordan','Cambodia','Kuwait','Laos','Lebanon','Nepal','Oman','Philippines','Syria','Thailand','Turkmenistan','Taiwan','Yemen','Albania','Armenia','Georgia','Djibouti','Somalia','Lesotho','Botswana','Niger','Sierra Leone','Honduras','Malta','Uzbekistan','Tonga'],
    whiteCountries: ['Algeria','Kenya','Peru','Puerto Rico','Malaysia','Hong Kong','Singapore','Namibia','Burundi','Central African Republic','Cape Verde','Liberia','Libya','Madagascar','Seychelles','Sudan','South Sudan','Eswatini','Togo','Uganda','Zimbabwe','Chile','Costa Rica','Dominican Republic','Guyana','Haiti','Panama','Peru','Suriname','Trinidad & Tobago','Venezuela','United Arab Emirates','Afghanistan','Azerbaijan','Bahrain','Brunei','Hong Kong','Indonesia','Jordan','Cambodia','Kuwait','Laos','Lebanon','Myanmar','Malaysia','Nepal','Oman','Philippines','Syria','Thailand','Tajikistan','Turkmenistan','Taiwan','Yemen','Georgia','Djibouti','Somalia','Lesotho','Botswana','Niger','Sierra Leone','Guatemala','Honduras','Nicaragua','Malta','El Salvador','Uzbekistan','San Marino','Tonga','Kiribati'],
    nonWhiteCountries: ['Cameroon','Ecuador','Democratic Republic of Congo','Mali','Malawi','Zambia','Angola','Burkina Faso','Benin','Eritrea','Ethiopia','Gambia','Guinea','Mauritania','Mauritius','Chad','Ecuador','Grenada','Kyrgyzstan','Sri Lanka','Mongolia','Vietnam','Andorra','Albania','Armenia','Gabon','Tanzania','Barbados','Bahamas','Kazakhstan','Sao Tome & Principe'],
    blackCountries: ["Malawi", "Zambia", "Egypt", "Angola", "Libya", "Sudan", "South Sudan", "Eswatini", "Uganda", "Zimbabwe", "Guyana", "Trinidad & Tobago", "United Arab Emirates", "Afghanistan", "Brunei", "Iraq", "Jordan",  "Kuwait", "Syria", "Yemen", "Albania", "Estonia", "Lesotho", "Botswana", "Tanzania", "Barbados", "Bahamas", "Jamaica", "Sao Tome & Principe"],
    nonBlackCountries: [ 'Cameroon','Algeria','Ecuador','Peru','Puerto Rico','Malaysia','Democratic Republic of Congo','Hong Kong','Singapore','Mali','Namibia','Burkina Faso','Burundi','Benin','Central African Republic','Cape Verde','Eritrea','Ethiopia','Gambia','Guinea','Liberia','Madagascar','Mauritania','Mauritius','Seychelles','Chad','Togo','Chile','Costa Rica','Dominican Republic','Ecuador','Grenada','Haiti','Panama','Peru','Suriname','Venezuela','Azerbaijan','Bahrain','Hong Kong','Indonesia','Kyrgyzstan','Cambodia','Laos','Lebanon','Sri Lanka','Myanmar','Mongolia','Malaysia','Nepal','Oman','Philippines','Thailand','Tajikistan','Turkmenistan','Taiwan','Vietnam','Andorra','Armenia','Georgia','Djibouti','Somalia','Niger','Gabon','Sierra Leone','Guatemala','Honduras','Nicaragua','Malta','El Salvador','Kazakhstan','Uzbekistan','San Marino','Tonga','Kiribati' ],
  },
  allCountries: {
    redCountries: ["China", "Democratic Republic of Congo", "United Kingdom", "Spain", "France", "Germany", "Switzerland", "Hong Kong", "Italy", "Canada", "Singapore", "Mali", "Malawi", "Norway", "Japan", "Ghana", "Bangladesh", "Cameroon", "South Africa", "Namibia", "Zambia", "Algeria", "Tunisia", "Egypt", "Angola", "Burkina Faso", "Burundi", "Benin", "Central African Republic", "Cape Verde", "Eritrea", "Ethiopia", "Gambia", "Guinea", "Kenya", "Liberia", "Libya", "Morocco", "Madagascar", "Mauritania", "Mauritius", "Seychelles", "Sudan", "South Sudan", "Senegal", "Eswatini", "Chad", "Togo", "Uganda", "Zimbabwe", "Chile", "Colombia", "Costa Rica", "Dominican Republic", "Ecuador", "Grenada", "Guyana", "Haiti", "Mexico", "Panama", "Peru", "Puerto Rico", "Suriname", "Trinidad & Tobago", "United States", "Venezuela", "United Arab Emirates", "Afghanistan", "Azerbaijan", "Bahrain", "Brunei", "Hong Kong", "Indonesia", "Iraq", "Iran", "Jordan", "Kyrgyzstan", "Cambodia", "North Korea", "South Korea", "Kuwait", "Laos", "Lebanon", "Sri Lanka", "Myanmar", "Mongolia", "Malaysia", "Nepal", "Oman", "Philippines", "Russia", "Syria", "Thailand", "Tajikistan", "Turkmenistan", "Turkey", "Taiwan", "Vietnam", "Yemen", "Andorra", "Albania", "Armenia", "Austria", "Belgium", "Bulgaria", "Belarus", "Czech Republic", "Denmark", "Georgia", "Latvia", "Croatia"],
    nonRedCountries: ["Djibouti", "Ireland", "Scotland", "Israel", "Somalia", "Brazil", "Rwanda", "Finland", "Estonia", "Sweden", "Lesotho", "Botswana", "Niger", "Nigeria", "India", "Pakistan", "Ivory Coast", "Gabon", "Sierra Leone", "Somalia", "Tanzania", "Argentina", "Barbados", "Bahamas", "Guatemala", "Honduras", "Uruguay", "Jamaica", "Nicaragua", "El Salvador", "Kazakhstan", "Saudi Arabia", "Uzbekistan", "Bosnia & Herzegovina", "Cyprus"],
    blueCountries: ["Democratic Republic of Congo", "United Kingdom", "France", "Norway", "South Africa", "Namibia", "Central African Republic", "Cape Verde", "Eritrea", "Ethiopia", "Gambia", "Liberia", "Mauritania", "Mauritius", "Seychelles", "South Sudan", "Eswatini", "Chad", "Chile", "Colombia", "Costa Rica", "Dominican Republic", "Ecuador", "Haiti", "Panama", "Puerto Rico", "Suriname", "United States", "Venezuela", "Azerbaijan", "Cambodia", "North Korea", "South Korea", "Laos", "Mongolia", "Malaysia", "Nepal", "Philippines", "Russia", "Thailand", "Turkmenistan", "Taiwan", "Andorra", "Armenia", "Czech Republic", "Croatia", "Djibouti", "Scotland", "Israel", "Somalia", "Brazil", "Rwanda", "Finland", "Estonia", "Sweden", "Lesotho", "Botswana", "Gabon", "Sierra Leone", "Somalia", "Tanzania", "Argentina", "Barbados", "Bahamas", "Guatemala", "Honduras", "Uruguay", "Nicaragua", "El Salvador", "Kazakhstan", "Uzbekistan", "Bosnia & Herzegovina", "Iceland", "Australia", "New Zealand", "Liechtenstein", "Luxembourg", "Moldova", "Netherlands", "Romania", "Serbia", "Slovakia", "Slovenia", "San Marino", "Kiribati", "India"],
    nonBlueCountries: ['China','Spain','Germany','Switzerland','Hong Kong','Italy','Canada','Singapore','Mali','Malawi','Japan','Ghana','Bangladesh','Cameroon','Zambia','Algeria','Tunisia','Egypt','Angola','Burkina Faso','Burundi','Benin','Guinea','Kenya','Libya','Morocco','Madagascar','Sudan','Senegal','Togo','Uganda','Zimbabwe','Grenada','Guyana','Mexico','Peru','Trinidad & Tobago','United Arab Emirates','Afghanistan','Bahrain','Brunei','Hong Kong','Indonesia','Iraq','Iran','Jordan','Kyrgyzstan','Kuwait','Lebanon','Sri Lanka','Myanmar','Oman','Syria','Tajikistan','Turkey','Vietnam','Yemen','Albania','Austria','Belgium','Bulgaria','Belarus','Denmark','Georgia','Ireland','Niger','Nigeria','India','Pakistan','Ivory Coast','Jamaica','Saudi Arabia','Cyprus','Hungary','Lithuania','Latvia','Monaco','Montenegro','Malta','Poland','Portugal','Tonga','Sao Tome & Principe'],
    greenCountries: ["Italy", "Mali", "Malawi", "Ghana", "Bangladesh", "Cameroon", "South Africa", "Namibia", "Zambia", "Algeria", "Burkina Faso", "Burundi", "Benin", "Central African Republic", "Eritrea", "Ethiopia", "Gambia", "Guinea", "Kenya", "Libya", "Madagascar", "Mauritania", "Mauritius", "Seychelles", "Sudan", "South Sudan", "Senegal", "Eswatini", "Togo", "Zimbabwe",  "Ecuador", "Grenada", "Guyana", "Haiti", "Mexico", ,"Suriname", "Venezuela", "United Arab Emirates", "Afghanistan", "Azerbaijan", "Iraq", "Iran", "Jordan", "Kyrgyzstan", "Cambodia", "Kuwait", "Lebanon", "Sri Lanka", "Myanmar", "Oman", "Syria", "Tajikistan", "Turkmenistan", "Bulgaria", "Belarus", "Djibouti", "Ireland", "Brazil", "Rwanda", "Lesotho", "Niger", "Nigeria", "India", "Pakistan", "Ivory Coast", "Gabon", "Sierra Leone", "Tanzania", "Jamaica", "Saudi Arabia", "Uzbekistan", "Hungary", "Lithuania", "Portugal", "San Marino", "Sao Tome & Principe"],
    nonGreenCountries: [ 'China','Democratic Republic of Congo','United Kingdom','Spain','France','Germany','Switzerland','Hong Kong','Canada','Singapore','Norway','Japan','Tunisia','Egypt','Angola','Cape Verde','Liberia','Morocco','Chad','Uganda','Chile','Colombia','Costa Rica','Dominican Republic','Panama','Peru','Puerto Rico','Trinidad & Tobago','United States','Bahrain','Brunei','Hong Kong','Indonesia','North Korea','South Korea','Laos','Mongolia','Malaysia','Nepal','Philippines','Russia','Thailand','Turkey','Taiwan','Vietnam','Yemen','Andorra','Albania','Armenia','Austria','Belgium','Czech Republic','Denmark','Georgia','Croatia','Scotland','Israel','Somalia','Finland','Estonia','Sweden','Botswana','Somalia','Argentina','Barbados','Bahamas','Guatemala','Honduras','Uruguay','Nicaragua','El Salvador','Kazakhstan','Bosnia & Herzegovina','Cyprus','Iceland','Australia','New Zealand','Liechtenstein','Luxembourg','Latvia','Monaco','Moldova','Montenegro','Malta','Netherlands','Poland','Romania','Serbia','Slovakia','Slovenia','Tonga','Kiribati'],
    blackCountries: ["Germany", "Malawi", "Ghana", "South Africa", "Zambia", "Egypt", "Angola", "Kenya", "Libya", "Sudan", "South Sudan", "Eswatini", "Uganda", "Zimbabwe", "Guyana", "Trinidad & Tobago", "United Arab Emirates", "Afghanistan", "Brunei", "Iraq", "Jordan", "South Korea", "Kuwait", "Syria", "Yemen", "Albania", "Belgium", "Estonia", "Lesotho", "Botswana", "Tanzania", "Barbados", "Bahamas", "Jamaica", "Sao Tome & Principe"],
    nonBlackCountries: [ 'China','Democratic Republic of Congo','United Kingdom','Spain','France','Switzerland','Hong Kong','Italy','Canada','Singapore','Mali','Norway','Japan','Bangladesh','Cameroon','Namibia','Algeria','Tunisia','Burkina Faso','Burundi','Benin','Central African Republic','Cape Verde','Eritrea','Ethiopia','Gambia','Guinea','Liberia','Morocco','Madagascar','Mauritania','Mauritius','Seychelles','Senegal','Chad','Togo','Chile','Colombia','Costa Rica','Dominican Republic','Ecuador','Grenada','Haiti','Mexico','Panama','Peru','Puerto Rico','Suriname','United States','Venezuela','Azerbaijan','Bahrain','Hong Kong','Indonesia','Iran','Kyrgyzstan','Cambodia','North Korea','Laos','Lebanon','Sri Lanka','Myanmar','Mongolia','Malaysia','Nepal','Oman','Philippines','Russia','Thailand','Tajikistan','Turkmenistan','Turkey','Taiwan','Vietnam','Andorra','Armenia','Austria','Bulgaria','Belarus','Czech Republic','Denmark','Georgia','Croatia','Djibouti','Ireland','Scotland','Israel','Somalia','Brazil','Rwanda','Finland','Sweden','Niger','Nigeria','India','Pakistan','Ivory Coast','Gabon','Sierra Leone','Argentina','Guatemala','Honduras','Uruguay','Nicaragua','El Salvador','Kazakhstan','Saudi Arabia','Uzbekistan','Bosnia & Herzegovina','Cyprus','Iceland','Australia','New Zealand','Hungary','Liechtenstein','Lithuania','Luxembourg','Latvia','Monaco','Moldova','Montenegro','Malta','Netherlands','Poland','Portugal','Romania','Serbia','Slovakia','Slovenia','San Marino','Tonga','Kiribati'],
    yellowCountries: ["China", "Spain", "Germany", "Mali", "Ghana", "Cameroon", "South Africa", "Angola", "Burkina Faso", "Benin", "Central African Republic", "Cape Verde", "Eritrea", "Ethiopia", 
    "Guinea", "Mauritania", "Mauritius", "Seychelles", "South Sudan", "Senegal", "Eswatini", "Chad", "Togo", "Uganda", "Zimbabwe", "Colombia", "Ecuador", "Grenada", "Guyana", "Suriname", "Venezuela", "Brunei", "Kyrgyzstan", "Sri Lanka", "Myanmar", "Mongolia", "Malaysia", "Tajikistan", "Vietnam","Andorra", "Belgium", "Brazil", "Rwanda", "Sweden", "Gabon",  "Tanzania", "Argentina", "Barbados", 
    "Bahamas", "Guatemala", "Uruguay", "Jamaica", "Nicaragua", "El Salvador", "Kazakhstan",  "Bosnia & Herzegovina", "Cyprus", "Liechtenstein", "Lithuania", "Moldova", "Montenegro", "Portugal", "Romania", "Serbia", "San Marino", "Kiribati", "Sao Tome & Principe"],
    nonYellowCountries: [ 'Democratic Republic of Congo','United Kingdom','France','Switzerland','Hong Kong','Italy','Canada','Singapore','Malawi','Norway','Japan','Bangladesh','Namibia','Zambia','Algeria','Tunisia','Egypt','Burundi','Gambia','Kenya','Liberia','Libya','Morocco','Madagascar','Sudan','Chile','Costa Rica','Dominican Republic','Haiti','Mexico','Panama','Peru','Puerto Rico','Trinidad & Tobago','United States','United Arab Emirates','Afghanistan','Azerbaijan','Bahrain','Hong Kong','Indonesia','Iraq','Iran','Jordan','Cambodia','North Korea','South Korea','Kuwait','Laos','Lebanon','Nepal','Oman','Philippines','Russia','Syria','Thailand','Turkmenistan','Turkey','Taiwan','Yemen','Albania','Armenia','Austria','Bulgaria','Belarus','Czech Republic','Denmark','Georgia','Croatia','Djibouti','Ireland','Scotland','Israel','Somalia','Finland','Estonia','Lesotho','Botswana','Niger','Nigeria','India','Pakistan','Ivory Coast','Sierra Leone','Honduras','Saudi Arabia','Uzbekistan','Iceland','Australia','New Zealand','Hungary','Luxembourg','Latvia','Monaco','Malta','Netherlands','Poland','Slovakia','Slovenia','Tonga'],
    whiteCountries: ["United Kingdom", "France", "Switzerland", "Hong Kong", "Italy", "Canada", "Singapore", "Norway", "Japan", "South Africa", "Namibia", "Algeria", "Tunisia", "Egypt", "Burundi",
    "Central African Republic", "Cape Verde", "Kenya", "Liberia", "Libya", "Madagascar", "Seychelles","Sudan", "South Sudan", "Eswatini", "Togo", "Uganda", "Zimbabwe", "Chile", "Costa Rica", "Dominican Republic", "Guyana", "Haiti", "Mexico", "Panama", "Peru", "Puerto Rico", "Suriname", "Trinidad & Tobago", "United States", "Venezuela", "United Arab Emirates", "Afghanistan", "Azerbaijan", "Bahrain", "Brunei", "Hong Kong","Indonesia", "Iraq", "Iran", "Jordan", "Cambodia", "North Korea", "South Korea", "Kuwait", "Laos", "Lebanon", "Myanmar", "Malaysia", "Nepal", "Oman", "Philippines", "Russia", "Syria", "Thailand", "Tajikistan", "Turkmenistan", "Turkey", "Taiwan", "Yemen", "Austria", "Bulgaria", "Belarus", "Czech Republic", "Denmark", "Georgia", "Croatia", "Djibouti", "Ireland", "Scotland", "Israel", "Somalia", "Brazil", "Finland", "Estonia", "Lesotho", "Botswana", "Niger", "Nigeria", "India", "Pakistan", "Ivory Coast", "Sierra Leone", "Argentina", "Guatemala", "Honduras", "Uruguay", "Nicaragua", "El Salvador", "Saudi Arabia", "Uzbekistan", "Bosnia & Herzegovina", "Cyprus", "Iceland", "Australia", "New Zealand", "Hungary", "Luxembourg", "Latvia", "Monaco", "Malta", "Netherlands", "Poland", "Portugal", "Serbia", "Slovakia", "Slovenia", "San Marino", "Tonga", "Kiribati"],
    nonWhiteCountries: ['China','Democratic Republic of Congo','Spain','Germany','Mali','Malawi','Ghana','Bangladesh','Cameroon','Zambia','Angola','Burkina Faso','Benin','Eritrea','Ethiopia','Gambia','Guinea','Morocco','Mauritania','Mauritius','Senegal','Chad','Colombia','Ecuador','Grenada','Kyrgyzstan','Sri Lanka','Mongolia','Vietnam','Andorra','Albania','Armenia','Belgium','Rwanda','Sweden','Gabon','Tanzania','Barbados','Bahamas','Jamaica','Kazakhstan','Liechtenstein','Lithuania','Moldova','Montenegro','Romania','Sao Tome & Principe']
  } 
}

function handleAnswerMouseOver() {
  this.classList.add('hovered');
}

function handleQuestionMouseOut() {
  this.classList.remove('hovered');
}


function addHoverEffectListeners() {
  document.querySelectorAll('.answer').forEach(function (answer) {
    answer.addEventListener('mouseover', handleAnswerMouseOver);
  });

  document.getElementById('question').addEventListener('mouseout', handleQuestionMouseOut);
}

// Remove event listeners for hover effect
function removeHoverEffectListeners() {
  document.querySelectorAll('.answer').forEach(function (answer) {
    answer.removeEventListener('mouseover', handleAnswerMouseOver);
  });

  document.getElementById('question').removeEventListener('mouseout', handleQuestionMouseOut);
}

const backgroundColors = ["red", "blue", "green", "black", "yellow", "white"]

function startQuiz(setDifficulty) {
  difficulty = setDifficulty
  document.getElementById("intro-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  document.body.style.cssText = 'background-image: none';
  addHoverEffectListeners(); // Add hover effect listeners when quiz starts
  nextQuestion();
}

function nextQuestion() {

    do {
      newColor = getRandomColor();
    } while (!questions[newColor] || questions[newColor].length === 0);
  
  document.getElementById('question').style.backgroundColor = newColor
  addHoverEffectListeners();

  if (newColor === "black") {
    document.getElementById('question').style.color = "white"
  }

  if (newColor === "yellow") {
    document.getElementById('question').style.color = "black"
  }

  if (newColor === "white") {
    document.getElementById('question').style.color = "black"
  }

  document.body.style.backgroundColor = newColor;
  document.getElementById("question-container").style.backgroundColor = newColor;
  document.querySelector(".next-btn").style.display = "none";

  questionCombination = questions[newColor][Math.floor(Math.random() * 4)];

  let selectedWords = [];
  
  answerCombination = questionCombination.map((item) => {
    let availableWords
      if (newColor === "red") {
        availableWords = (item === 0) ? countries[difficulty].redCountries : countries[difficulty].nonRedCountries;
      availableWords = availableWords.filter(word => !selectedWords.includes(word));
      let selectedWord = availableWords[Math.floor(Math.random() * availableWords.length)];
      selectedWords.push(selectedWord);
      return selectedWord;
      } else if (newColor === "blue") {
      availableWords = (item === 0) ? countries[difficulty].blueCountries : countries[difficulty].nonBlueCountries;
      availableWords = availableWords.filter(word => !selectedWords.includes(word));
      let selectedWord = availableWords[Math.floor(Math.random() * availableWords.length)];
      selectedWords.push(selectedWord);
      return selectedWord;
      } else if (newColor === "green") {
        availableWords = (item === 0) ? countries[difficulty].greenCountries : countries[difficulty].nonGreenCountries;
      availableWords = availableWords.filter(word => !selectedWords.includes(word));
      let selectedWord = availableWords[Math.floor(Math.random() * availableWords.length)];
      selectedWords.push(selectedWord);
      return selectedWord;
      } else if (newColor === "black") {
      availableWords = (item === 0) ? countries[difficulty].blackCountries : countries[difficulty].nonBlackCountries;
      availableWords = availableWords.filter(word => !selectedWords.includes(word));
      let selectedWord = availableWords[Math.floor(Math.random() * availableWords.length)];
      selectedWords.push(selectedWord);
      return selectedWord
      } else if (newColor === "yellow") {
        availableWords = (item === 0) ? countries[difficulty].yellowCountries : countries[difficulty].nonYellowCountries;
      availableWords = availableWords.filter(word => !selectedWords.includes(word));
      let selectedWord = availableWords[Math.floor(Math.random() * availableWords.length)];
      selectedWords.push(selectedWord);
      return selectedWord;
      } else if (newColor === "white") {
      availableWords = (item === 0) ? countries[difficulty].whiteCountries : countries[difficulty].nonWhiteCountries;
      availableWords = availableWords.filter(word => !selectedWords.includes(word));
      let selectedWord = availableWords[Math.floor(Math.random() * availableWords.length)];
      selectedWords.push(selectedWord);
      return selectedWord
}});


  document.getElementById("question").textContent = newColor.toUpperCase()

  const answerButtons = document.querySelectorAll(".answer");

  for (let i = 0; i < answerCombination.length; i++) {
    answerButtons[i].textContent = answerCombination[i]
    answerButtons[i].style.backgroundColor = "black";
    answerButtons[i].style.color = "white";
    answerButtons[i].disabled = false;
    }
  }

  if(newColor === "black")
  document.querySelectorAll(".answer").forEach((button) => {
    button.style.backgroundColor = "white"
    button.style.color = "black"
  })

  if(newColor === "white")
  document.querySelectorAll(".answer").forEach((button) => {
    button.style.backgroundColor = "black"
    button.style.color = "white"
  })

document.querySelectorAll('.answer').forEach(function (answer) {
  answer.addEventListener('mouseover', handleAnswerMouseOver);
});

document.getElementById('question').addEventListener('mouseout', handleQuestionMouseOut);
  

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * backgroundColors.length);
  const color = backgroundColors[randomIndex];
  return color;
}

function checkAnswer(index) {
  const currentQuestion = questions[newColor]

  const selectedAnswerIndex = questionCombination.indexOf(1);
  const selectedAnswer = answerCombination[questionCombination.indexOf(1)]

  removeHoverEffectListeners()

  if (index === selectedAnswerIndex) {
    document.body.style.backgroundColor = "#4CAF50";
    document.getElementById("question-container").style.backgroundColor = "#4CAF50";
    document.getElementById('question').style.backgroundColor = "#4CAF50"
    document.getElementById('question').textContent = "CORRECT ✅"
  } else {
    document.body.style.backgroundColor = "#FF5733";
    document.getElementById("question-container").style.backgroundColor = "#FF5733";
    document.getElementById('question').style.backgroundColor = "#FF5733"
    document.getElementById('question').textContent = "WRONG ❌"
  }

  document.querySelectorAll(".answer").forEach((button) => {
    button.disabled = true;
    if (button.textContent === selectedAnswer) {
      button.style.backgroundColor = "#4CAF50";
    } else {
      button.style.backgroundColor = "#FF5733";
    }
  });

  document.querySelectorAll(".answer").forEach((button) => {
    if (button.textContent === "Italy") {
      button.textContent += " 🇮🇹"
    } else if (button.textContent === "Spain") {
      button.textContent += " 🇪🇸"
    } else if (button.textContent === "Brazil") {
      button.textContent += " 🇧🇷"
    } else if (button.textContent === "Rwanda") {
      button.textContent += " 🇷🇼"
    } else if (button.textContent === "France") {
      button.textContent += " 🇫🇷"
    } else if (button.textContent === "China") {
      button.textContent += " 🇨🇳"
    } else if (button.textContent === "Canada") {
      button.textContent += " 🇨🇦"
    } else if (button.textContent === "Singapore") {
      button.textContent += " 🇸🇬"
    } else if (button.textContent === "Ireland") {
      button.textContent += " 🇮🇪"
    } else if (button.textContent === "Finland") {
      button.textContent += " 🇫🇮"
    } else if (button.textContent === "Estonia") {
      button.textContent += " 🇪🇪"
    } else if (button.textContent === "Mali") {
      button.textContent += " 🇲🇱"
    } else if (button.textContent === "Malawi") {
      button.textContent += " 🇲🇼"
    } else if (button.textContent === "Germany") {
      button.textContent += " 🇩🇪"
    } else if (button.textContent === "Sweden") {
      button.textContent += " 🇸🇪"
    } else if (button.textContent === "Norway") {
      button.textContent += " 🇳🇴"
    } else if (button.textContent === "Japan") {
      button.textContent += " 🇯🇵"
    } else if (button.textContent === "Lesotho") {
      button.textContent += " 🇱🇸"
    } else if (button.textContent === "Botswana") {
      button.textContent += " 🇧🇼"
    } else if (button.textContent === "Ghana") {
      button.textContent += " 🇬🇭"
    } else if (button.textContent === "Niger") {
      button.textContent += " 🇳🇪"
    } else if (button.textContent === "Nigeria") {
      button.textContent += " 🇳🇬"
    } else if (button.textContent === "India") {
      button.textContent += " 🇮🇳"
    } else if (button.textContent === "Bangladesh") {
      button.textContent += " 🇧🇩"
    } else if (button.textContent === "Pakistan") {
      button.textContent += " 🇵🇰" 
    } else if (button.textContent === "Cameroon") {
      button.textContent += " 🇨🇲"
    } else if (button.textContent === "South Africa") {
      button.textContent += " 🇿🇦"
    } else if (button.textContent === "Namibia") {
      button.textContent += " 🇳🇦"
    } else if (button.textContent === "Zambia") {
      button.textContent += " 🇿🇲"
    } else if (button.textContent === "Algeria") {
      button.textContent += " 🇩🇿"
    } else if (button.textContent === "Tunisia") {
      button.textContent += " 🇹🇳"
    } else if (button.textContent === "Democratic Republic of Congo") {
      button.textContent += " 🇨🇩" 
    } else if (button.textContent === "Egypt") {
      button.textContent += " 🇪🇬"
    } else if (button.textContent === "Angola") {
      button.textContent += " 🇦🇴"
    } else if (button.textContent === "Burkina Faso") {
      button.textContent += " 🇧🇫"
    } else if (button.textContent === "Burundi") {
      button.textContent += " 🇧🇮"
    } else if (button.textContent === "Benin") {
      button.textContent += " 🇧🇯"
    } else if (button.textContent === "Central African Republic") {
      button.textContent += " 🇨🇫" 
    } else if (button.textContent === "Ivory Coast") {
      button.textContent += " 🇨🇮"
    } else if (button.textContent === "Cape Verde") {
      button.textContent += " 🇨🇻"
    } else if (button.textContent === "Djibouti") {
      button.textContent += " 🇩🇯"
    } else if (button.textContent === "Eritrea") {
      button.textContent += " 🇪🇷"
    } else if (button.textContent === "Ethiopia") {
      button.textContent += " 🇪🇹" 
    } else if (button.textContent === "Gabon") {
      button.textContent += " 🇬🇦"
    } else if (button.textContent === "Gambia") {
      button.textContent += " 🇬🇲"
    } else if (button.textContent === "Guinea") {
      button.textContent += " 🇬🇳"
    } else if (button.textContent === "Kenya") {
      button.textContent += " 🇰🇪"
    } else if (button.textContent === "Liberia") {
      button.textContent += " 🇱🇷" 
    } else if (button.textContent === "Libya") {
      button.textContent += " 🇱🇾"
    } else if (button.textContent === "Morocco") {
      button.textContent += " 🇲🇦" 
    } else if (button.textContent === "Madagascar") {
      button.textContent += " 🇲🇬"
    } else if (button.textContent === "Mauritania") {
      button.textContent += " 🇲🇷"
    } else if (button.textContent === "Mauritius") {
      button.textContent += " 🇲🇺"
    } else if (button.textContent === "Mozambique") {
      button.textContent += " 🇲🇿"
    } else if (button.textContent === "Seychelles") {
      button.textContent += " 🇸🇨"
    } else if (button.textContent === "Sudan") {
      button.textContent += " 🇸🇩"
    } else if (button.textContent === "Sierra Leone") {
      button.textContent += " 🇸🇱"
    } else if (button.textContent === "Senegal") {
      button.textContent += " 🇸🇳"
    } else if (button.textContent === "Somalia") {
      button.textContent += " 🇸🇴"
    } else if (button.textContent === "South Sudan") {
      button.textContent += " 🇸🇸"
    } else if (button.textContent === "Eswatini") {
      button.textContent += " 🇸🇿"
    } else if (button.textContent === "Chad") {
      button.textContent += " 🇹🇩"
    } else if (button.textContent === "Togo") {
      button.textContent += " 🇹🇬"
    } else if (button.textContent === "Tanzania") {
      button.textContent += " 🇹🇿"
    } else if (button.textContent === "Uganda") {
      button.textContent += " 🇺🇬"
    } else if (button.textContent === "Zimbabwe") {
      button.textContent += " 🇿🇼"
    } else if (button.textContent === "Argentina") {
      button.textContent += " 🇦🇷"
    } else if (button.textContent === "Barbados") {
      button.textContent += " 🇧🇧"
    } else if (button.textContent === "Bahamas") {
      button.textContent += " 🇧🇸"
    } else if (button.textContent === "Chile") {
      button.textContent += " 🇨🇱"  
    } else if (button.textContent === "Colombia") {
      button.textContent += " 🇨🇴"
    } else if (button.textContent === "Costa Rica") {
      button.textContent += " 🇨🇷"
    } else if (button.textContent === "Cuba") {
      button.textContent += " 🇨🇺"
    } else if (button.textContent === "Dominican Republic") {
      button.textContent += " 🇩🇴"
    } else if (button.textContent === "Ecuador") {
      button.textContent += " 🇪🇨"
    } else if (button.textContent === "Grenada") {
      button.textContent += " 🇬🇩"
    } else if (button.textContent === "Guatemala") {
      button.textContent += " 🇬🇹"
    } else if (button.textContent === "Guyana") {
      button.textContent += " 🇬🇾"
    } else if (button.textContent === "Honduras") {
      button.textContent += " 🇭🇳"
    } else if (button.textContent === "Haiti") {
      button.textContent += " 🇭🇹"
    } else if (button.textContent === "Jamaica") {
      button.textContent += " 🇯🇲"
    } else if (button.textContent === "Mexico") {
      button.textContent += " 🇲🇽"
    } else if (button.textContent === "Nicaragua") {
      button.textContent += " 🇳🇮"
    } else if (button.textContent === "Panama") {
      button.textContent += " 🇵🇦"
    } else if (button.textContent === "Peru") {
      button.textContent += " 🇵🇪"
    } else if (button.textContent === "Puerto Rico") {
      button.textContent += " 🇵🇷"
    } else if (button.textContent === "Suriname") {
      button.textContent += " 🇸🇷"
    } else if (button.textContent === "El Salvador") {
      button.textContent += " 🇸🇻"
    } else if (button.textContent === "Trinidad & Tobago") {
      button.textContent += " 🇹🇹"
    } else if (button.textContent === "United States") {
      button.textContent += " 🇺🇸"
    } else if (button.textContent === "Uruguay") {
      button.textContent += " 🇺🇾"
    } else if (button.textContent === "Venezuela") {
      button.textContent += " 🇻🇪"
    } else if (button.textContent === "United Arab Emirates") {
      button.textContent += " 🇦🇪"
    } else if (button.textContent === "Afghanistan") {
      button.textContent += " 🇦🇫"
    } else if (button.textContent === "Azerbaijan") {
      button.textContent += " 🇦🇿"
    } else if (button.textContent === "Bahrain") {
      button.textContent += " 🇧🇭"
    } else if (button.textContent === "Brunei") {
      button.textContent += " 🇧🇳"
    } else if (button.textContent === "Hong Kong") {
      button.textContent += " 🇭🇰"
    } else if (button.textContent === "Indonesia") {
      button.textContent += " 🇮🇩"
    } else if (button.textContent === "Israel") {
      button.textContent += " 🇮🇱"
    } else if (button.textContent === "Iraq") {
      button.textContent += " 🇮🇶"
    } else if (button.textContent === "Iran") {
      button.textContent += " 🇮🇷"
    } else if (button.textContent === "Jordan") {
      button.textContent += " 🇯🇴"
    } else if (button.textContent === "Kyrgyzstan") {
      button.textContent += " 🇰🇬"
    } else if (button.textContent === "Cambodia") {
      button.textContent += " 🇰🇭"
    } else if (button.textContent === "North Korea") {
      button.textContent += " 🇰🇵"
    } else if (button.textContent === "South Korea") {
      button.textContent += " 🇰🇷"
    } else if (button.textContent === "Kuwait") {
      button.textContent += " 🇰🇼"
    } else if (button.textContent === "Kazakhstan") {
      button.textContent += " 🇰🇿"
    } else if (button.textContent === "Laos") {
      button.textContent += " 🇱🇦"
    } else if (button.textContent === "Lebanon") {
      button.textContent += " 🇱🇧"
    } else if (button.textContent === "Sri Lanka") {
      button.textContent += " 🇱🇰"
    } else if (button.textContent === "Myanmar") {
      button.textContent += " 🇲🇲"
    } else if (button.textContent === "Mongolia") {
      button.textContent += " 🇲🇳"
    } else if (button.textContent === "Malaysia") {
      button.textContent += " 🇲🇾"
    } else if (button.textContent === "Nepal") {
      button.textContent += " 🇳🇵"
    } else if (button.textContent === "Oman") {
      button.textContent += " 🇴🇲"
    } else if (button.textContent === "Phillipines") {
      button.textContent += " 🇵🇭"
    } else if (button.textContent === "Qatar") {
      button.textContent += " 🇶🇦"
    } else if (button.textContent === "Russia") {
      button.textContent += " 🇷🇺"
    } else if (button.textContent === "Saudi Arabia") {
      button.textContent += " 🇸🇦"
    } else if (button.textContent === "Syria") {
      button.textContent += " 🇸🇾"
    } else if (button.textContent === "Thailand") {
      button.textContent += " 🇹🇭"
    } else if (button.textContent === "Tajikistan") {
      button.textContent += " 🇹🇯"
    } else if (button.textContent === "Turkmenistan") {
      button.textContent += " 🇹🇲"
    } else if (button.textContent === "Turkey") {
      button.textContent += " 🇹🇷"
    } else if (button.textContent === "Taiwan") {
      button.textContent += " 🇹🇼"
    } else if (button.textContent === "Uzbekistan") {
      button.textContent += " 🇺🇿"
    } else if (button.textContent === "Vietnam") {
      button.textContent += " 🇻🇳"
    } else if (button.textContent === "Yemen") {
      button.textContent += " 🇾🇪"
    } else if (button.textContent === "Andorra") {
      button.textContent += " 🇦🇩"
    } else if (button.textContent === "Albania") {
      button.textContent += " 🇦🇱"
    } else if (button.textContent === "Armenia") {
      button.textContent += " 🇦🇲"
    } else if (button.textContent === "Austria") {
      button.textContent += " 🇦🇹"
    } else if (button.textContent === "Bosnia & Herzegovina") {
      button.textContent += " 🇧🇦"
    } else if (button.textContent === "Belgium") {
      button.textContent += " 🇧🇪"
    } else if (button.textContent === "Bulgaria") {
      button.textContent += " 🇧🇬"
    } else if (button.textContent === "Belarus") {
      button.textContent += " 🇧🇾"
    } else if (button.textContent === "Switzerland") {
      button.textContent += " 🇨🇭"
    } else if (button.textContent === "Cyprus") {
      button.textContent += " 🇨🇾"
    } else if (button.textContent === "Czech Republic") {
      button.textContent += " 🇨🇿"
    } else if (button.textContent === "Denmark") {
      button.textContent += " 🇩🇰"
    } else if (button.textContent === "United Kingdom") {
      button.textContent += " 🇬🇧"
    } else if (button.textContent === "Georgia") {
      button.textContent += " 🇬🇪"
    } else if (button.textContent === "Croatia") {
      button.textContent += " 🇭🇷"
    } else if (button.textContent === "Hungary") {
      button.textContent += " 🇭🇺"
    } else if (button.textContent === "Iceland") {
      button.textContent += " 🇮🇸"
    } else if (button.textContent === "Liechtenstein") {
      button.textContent += " 🇱🇮"
    } else if (button.textContent === "Lithuania") {
      button.textContent += " 🇱🇹"
    } else if (button.textContent === "Luxembourg") {
      button.textContent += " 🇱🇺"
    } else if (button.textContent === "Latvia") {
      button.textContent += " 🇱🇻"
    } else if (button.textContent === "Monaco") {
      button.textContent += " 🇲🇨"
    } else if (button.textContent === "Moldova") {
      button.textContent += " 🇲🇩"
    } else if (button.textContent === "Montenegro") {
      button.textContent += " 🇲🇪"
    } else if (button.textContent === "North Macedonia") {
      button.textContent += " 🇲🇰"
    } else if (button.textContent === "Malta") {
      button.textContent += " 🇲🇹"
    } else if (button.textContent === "Netherlands") {
      button.textContent += " 🇳🇱"
    } else if (button.textContent === "Norway") {
      button.textContent += " 🇳🇴"
    } else if (button.textContent === "Poland") {
      button.textContent += " 🇵🇱"
    } else if (button.textContent === "Portugal") {
      button.textContent += " 🇵🇹"
    } else if (button.textContent === "Romania") {
      button.textContent += " 🇷🇴"
    } else if (button.textContent === "Serbia") {
      button.textContent += " 🇷🇸"
    } else if (button.textContent === "Slovenia") {
      button.textContent += " 🇸🇮"
    } else if (button.textContent === "Slovakia") {
      button.textContent += " 🇸🇰"
    } else if (button.textContent === "San Marino") {
      button.textContent += " 🇸🇲"
    } else if (button.textContent === "Ukraine") {
      button.textContent += " 🇺🇦"
    } else if (button.textContent === "England") {
      button.textContent += " 🏴󠁧󠁢󠁥󠁮󠁧󠁿"
    } else if (button.textContent === "Scotland") {
      button.textContent += " 🏴󠁧󠁢󠁳󠁣󠁴󠁿"
    } else if (button.textContent === "Wales") {
      button.textContent += " 🏴󠁧󠁢󠁷󠁬󠁳󠁿"
    } else if (button.textContent === "Australia") {
      button.textContent += " 🇦🇺"
    } else if (button.textContent === "New Zealand") {
      button.textContent += " 🇳🇿"
    } else if (button.textContent === "Tonga") {
      button.textContent += " 🇹🇴"
    } else if (button.textContent === "Kiribati") {
      button.textContent += " 🇰🇮"
  } else if (button.textContent === "Sao Tome and Principe") {
    button.textContent += "🇸🇹"
  }
})

  document.querySelector(".next-btn").style.display = "block";
}


document.querySelector(".next-btn").onclick = function() {
  nextQuestion();
};
