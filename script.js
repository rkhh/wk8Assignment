//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;


/* reusable function below for displaying just the author name and year the speech was written. */
function getAuthorAndYearString(aName, sYear) {
  document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + (aName) + ' in ' + (sYear) + '.' + '<br>' + '<br>';
};

/* reusable function below for BCE true or false statement */
function displayBCEString(BCE){
    if([BCE] === true){
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era.' + '<br>' + '<br>';
  }else{
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.' + '<br>' + '<br>';
  }
};

/* reusable function below for which speeches are oldest and newest */
function getOldestOrYoungestString(sYear){
  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
    }
    if(sYear === oldest){
    document.getElementById("ConsoleDisplay").innerHTML += 'This is the oldest speech on the page.' + '<br>' + '<br>';
    }
    if(sYear === newest){
    document.getElementById("ConsoleDisplay").innerHTML += 'This is the most recent speech on the page.' + '<br>' + '<br>';
    }
};

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});


/* Below is nav code */

/* Churchill */
document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  getAuthorAndYearString(speechesArray[0].author, speechesArray[0].year);
  displayBCEString(speechesArray[0].yearIsBCE);
  getOldestOrYoungestString(speechesArray[0].year);
});

/* Ghandi */
document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  getAuthorAndYearString(speechesArray[1].author, speechesArray[1].year);
  displayBCEString(speechesArray[1].yearIsBCE);
  getOldestOrYoungestString(speechesArray[1].year);
});

/* Demosthenes */
document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  getAuthorAndYearString(speechesArray[2].author, speechesArray[2].year);
  displayBCEString(speechesArray[2].yearIsBCE);
  getOldestOrYoungestString(speechesArray[2].year);
});