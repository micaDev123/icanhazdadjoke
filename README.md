This is I can haz dad joke API Exam project

1. First is open your terminal and go to your project directory and type this on your cmd or terminal ##npm install or yarn install
2. run the project using npm start or yanr start.
3.

About the project

This basic web application is to generate a jokes from an API which is https://icanhazdadjoke.com/api

Here is the avaialble API for icanhazdadjoke

Fetch
GET https://icanhazdadjoke.com/

Fetching a random joke as JSON:

$ curl -H "Accept: application/json" https://icanhazdadjoke.com/
{
  "id": "R7UfaahVfFd",
  "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
  "status": 200
}

Fetch a dad joke
GET https://icanhazdadjoke.com/j/<joke_id> fetch a specific dad joke.

Fetching a joke as JSON:

$ curl -H "Accept: application/json" https://icanhazdadjoke.com/j/R7UfaahVfFd
{
  "id": "R7UfaahVfFd",
  "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
  "status": 200
}
