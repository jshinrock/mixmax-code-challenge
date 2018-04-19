# Mixmax Code challenge

You have 1 hour to create an autocomplete UI widget using the provided framework, working with one of us. As the user types, it should show a list of results. Just like what you'd expect from the Google Search autocomplete.

It's up to you how you want to spend your time. For example you could spend your time making a really creative UI, or you could spend time making a backend that uses an external API for data. Or perhaps both :). Just make sure you have something functional at the end of an hour.

You're allowed to pull in other front-end libraries or npm modules, but you are NOT allowed to use an autocomplete library.

We look forward to seeing what you come up with!

## Installing and running

```
npm install
npm start
```

Then load <http://localhost:5000>

## Code Layout
### Server
* `/app.js` This holds the API route for autocomplete.

### Client
* `/index.html` HTML page loaded at the root URL
* `/public/script.js` Javascript file loaded by index.html
* `/public/styles.css/` CSS file loaded by index.html
