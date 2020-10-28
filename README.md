<h1>Joke Generator using Markov Chain</h1>

Fetch a dad joke
GET https://icanhazdadjoke.com/j/<joke_id> fetch a specific dad joke.<br/>

Fetching a joke as JSON:<br/>
<br/>
$ curl -H "Accept: application/json" https://icanhazdadjoke.com/j/R7UfaahVfFd<br/>
{ <br/>
<br>
  "id": "R7UfaahVfFd",<br/>
  "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",<br/>
  "status": 200<br/>
  <br/>
}

## <h1>Getting Started</h1>

### Local Installation
Follow these steps to dadjoke heaven:
1. Clone this GitHub repo in the directory of your choice (`git clone https://github.com/KarlaJeanNelson/markov-dad-jokes.git` or `git clone git@github.com:KarlaJeanNelson/markov-dad-jokes.git`).
2. Navigate into the cloned directory (`cd markov-dad-jokes`).
3. Install dependencies (`npm install` or `yarn`).
4. Make sure mongo is running on your device.
5. Almost there! Back in your terminal, type `npm install` or `yarn install` (depending on which package manager you used to install dependencies).
6. Open another terminal (and `cd` to your `icanhazdadjoke` directory). Type `npm run client` or `yarn run client`.
7. The app should open in a browser window (localhost:3000).

This project was created with [React-redux](https://react-redux.js.org/).

## Dad Joke Generator using markov chain
Generate hilarious dad jokes using [Markov chains](https://en.wikipedia.org/wiki/Markov_chain)! The generator is seeded with jokes fetched from the wonderful and illustrious [icanhazdadjoke API](https://icanhazdadjoke.com/api).



### Prerequisites
To run locally, the following applications must be installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/download-center/community)


