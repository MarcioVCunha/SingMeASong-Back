<h1> API Sing me a Song </h1>

Hello friend, here is my API for the Sing me a Song project.

<h1> What does it do? </h1>

This API saves musics and links to youtube, it alsos saves the scores people give to the music, you can upvote and downvote a music too.

<h1> Technologies used</h1>

<img src='https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E' />

<img src='https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white' />

<img src='https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white' />

And axios, but i couldn't find it's badge... :(

<h1> How to use </h1>

To use this API is pretty simple, you have to call the routes on the front, the routes are:

    post music: post('/recommendations')
    upvote a music: post('/recommendations/:id/upvote') - id = music id
    downvote a music: post('/recommendations/:id/downvote') - id = music id
    get random music: get('/recommendations/random')
    get top X musics: (/recommendations/top/:amount) -  amount = number of musics

<h1> Setting up the Front </h1>

You can use my database, it's on heroku and here is the link:

https://sing-me-a-song-marcio.herokuapp.com

All you need to do is use this URL in your project, like, if you want to get a random music, all you need to do is use the axios get command with the URL and the route:

    axios.get('https://sing-me-a-song-marcio.herokuapp.com/recommendations/random')

it should return something like this = 

    {
      id: 1,
      name: 'music',
      youtubeLink: 'link',
      score: 20
    }

if you would like to post a music, send a post request:

    axios.post('https://sing-me-a-song-marcio.herokuapp.com/recommendations', body)

the body should be a object like this:

    {
      name: 'music name',
      youtubeLink: 'link'
    }

if it returns 409, it's because the music is already in the database.

<h2> Setting it in your own computer </h2>

Now, if you would like to create your own database, you have to clone this repo:

    git clone https://github.com/MarcioVCunha/SingMeASong-Back

Install al the libs i used with

    npm i

Then, you will have to create a databse using postgres, there is a dump of the databse in the 'database.sql' archive.

with the database created, you have to set the enviroment, there is an archive name .env.example, rename it to .env.test and fill all the informations.

simple change the heroku URL to http://localhost:4000 and it should work on every route.

Finally, to iniciate your server, just type

    npm start

and it should be up and running.