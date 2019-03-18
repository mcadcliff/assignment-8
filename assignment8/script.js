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


//DONATION BUTTON
document.getElementById('BtnDonate').addEventListener('click', function(){
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for (var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }
    
  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});



//CHURCHILL
document.getElementById('BtnChurchill').addEventListener('click', function(){

function getAuthorAndYearString(speechesArray)
    {var churchill = 'This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '<br>';}
    return churchill;
                                                         
document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(speechesArray);


function displayBCEString(speechesArray)
{if(speechesArray[0].yearIsBCE === true){
 return 'This speech took place before the common era.<br>';
 }else{
   return 'This speech took place during the common era.<br>';
  }
}

document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(speechesArray);

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

function getOldestOrYoungestString(speechesArray)
{if(speechesArray[0].year === oldest){
    return 'This is the oldest speech on the page.<br>';
  }
  if(speechesArray[0].year === newest){
   return 'This is the most recent speech on the page.<br>';
  }}
document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(speechesArray);
});



//GHANDI
document.getElementById('BtnGhandi').addEventListener('click', function(){
    
function getAuthorAndYearString(speechesArray)
    {var ghandi = 'This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + '<br>';
    return ghandi;}
    
document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(speechesArray);
    
function displayBCEString(speechesArray)
    {if(speechesArray[1].yearIsBCE === true){
    return 'This speech took place before the common era.<br>';
  }else{
   return 'This speech took place during the common era.<br>';
  }
document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(speechesArray);
     
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
function getOldestOrYoungestString(speechesArray)
     {if(speechesArray[1].year === oldest){
      return 'This is the oldest speech on the page.<br>';
  }
  if(speechesArray[1].year === newest){
    return 'This is the most recent speech on the page.<br>';}
      return 'This is neither the oldest nor the most recent speech on the page.<br>';}
     
     document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(speechesArray);
    };

    
    
    
//DEMOSTHENES    
document.getElementById('BtnDemosthenes').addEventListener('click', function(){

function getAuthorAndYearString(speechesArray)
    {var demosthenes = 'This speech was written by '+ speechesArray[2].author + ' in ' + speechesArray[2].year + '<br>';}
    return demosthenes;})
                                                         
document.getElementById('ConsoleDisplay').innerHTML = getAuthorAndYearString(speechesArray);
    
function displayBCEString(speechesArray)
{if(speechesArray[2].yearIsBCE === true){
    return 'This speech took place before the common era.<br>';
  }else{
    return 'This speech took place during the common era.<br>';
  }

 document.getElementById('ConsoleDisplay').innerHTML += displayBCEString(speechesArray);
 
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

 function getOldestOrYoungestString(speechesArray)
 {if(speechesArray[2].year === oldest){
    return 'This is the oldest speech on the page.<br>';
  }
  if(speechesArray[2].year === newest){
   return 'This is the most recent speech on the page.<br>';
  }
  document.getElementById('ConsoleDisplay').innerHTML += getOldestOrYoungestString(speechesArray);
 });