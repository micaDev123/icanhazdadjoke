This is I can haz dad joke API Exam project

1. Clone the project using git clone url
2. First is open your terminal and go to your project directory and type this on your cmd or terminal ##npm install or yarn install
3. run the project using npm start or yarn start.
<br/>
About the project<br/>
<br/>
This basic web application is to generate a jokes from an API which is https://icanhazdadjoke.com/api <br/>
I use react js + redux-thunk and material-react for the user interface. </br>
</br>
#Here is the avaialble API for icanhazdadjoke<br/>
<br/>
Fetch
GET https://icanhazdadjoke.com/
<br/>
<h1>Fetching a random joke as JSON:</h1>
<br/>
$ curl -H "Accept: application/json" https://icanhazdadjoke.com/ <br/>
{<br/>
<br/>
  "id": "R7UfaahVfFd",<br/>
  "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",<br/>
  "status": 200<br/>
  <br/>
}

Fetch a dad joke
GET https://icanhazdadjoke.com/j/<joke_id> fetch a specific dad joke.<br/>

Fetching a joke as JSON:<br/>

$ curl -H "Accept: application/json" https://icanhazdadjoke.com/j/R7UfaahVfFd<br/>
{
<br/>
  "id": "R7UfaahVfFd",<br/>
  "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",<br/>
  "status": 200<br/>
  <br/>
}
