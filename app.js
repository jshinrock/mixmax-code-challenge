'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Serve assets in /public.
app.use(express.static(__dirname + '/public'));

// Allow POSTing JSON.
app.use(bodyParser.json());

// Root URL repsonds to HTTP GET, serves index.html file
app.get('/', function(req, res) {
  res.sendFile('index.html', {
    root: __dirname
  });
});

// Express Server listens on port 5000
app.listen(process.env.PORT || 5000);

// EDIT BELOW THIS LINE

// Just a sample data set. Feel free to use something else!
var mixmaxFeatures = [
  'code snippet',
  'availability',
  'table',
  'Email tracking',
  'Giphy',
  'PDF Slideshow',
  'Article',
  'SMS Me',
  'Secret Message',
  'Encryption',
  'Poll',
  'Public Poll',
  'Send Later',
  'Send Later with tracking',
  'Markdown',
  'Link Preview',
  'Yes/No',
  'Question and Answer',
  'Forms in Email',
  'Cloud hosted attachments',
  'Email templates',
  'Gists',
  'Google Maps integration'
];

/*  autocomplete function takes in a query and returns a list of data
 *  @param {String} query - User input as a string
 *  @returns {Array|Object} - Array like object that contains list of potential matches for query
 */
function autocomplete(query) {
  // This picks a random element from the mixmaxFeatures array regardless of input
  // TODO Replace this with your autocomplete function

  if (query === '') {
    return [];
  }

  const compareQueryTermToFeatures = (word) => {
    const wordStartsWithTerm = wordStartsWith(queryWord, word);
    return wordStartsWithTerm;
  };
  
  const wordStartsWith = (queryWord, word) => {
    return word.indexOf(queryWord) === 0;
  };

  const match =  mixmaxFeatures.filter( (feature) => {
    const lowerCaseFeature = feature.toLowerCase();
    const featureWords = lowerCaseFeature.split(' ');
    const queryWords = query.split(' ');    
    const found = queryWords.every( (queryWord, currentIndex) => {
      return featureWords.some( (word, i) => { 
        return wordStartsWith(queryWord, word) && i >= currentIndex;
      });
    });
    return found;
  });

  return match;
}

/*  API route for autocomplete. Responds to HTTP POST. Looks for param query in request body.
 *  @param {String} req.body.query - Data from client
 */
app.post('/query', function(req, res) {
  var query = req.body.query;
  res.json(autocomplete(query));
});
