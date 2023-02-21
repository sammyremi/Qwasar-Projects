//init auth express
const basicAuth = require('express-basic-auth')
// init express
const express = require('express')
const app = express();


frank_song = ["All Alone", "All My Tomorrows", "American Beauty Rose", "America the Beautiful", "Angel Eyes", "Around the World", "April in Paris",  "Barbara", "The Best I Ever Had", "Blue Lace", "Blue Moon", "Bonita", "Born Free", "But Beautiful", "California", "The Charm of You", "Close to You", "The Continental", "Crazy Love", "Five Hundred Guys"];
song_len = frank_song.length;

const dob = "December 12, 1915";
const birthcity = "Hoboken, New Jersey";
const wifes = "Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx";
const picture = 'https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg'


// function to get random song
function get_array(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random song
    const item = arr[randomIndex];
    return item;
}

const random_song = get_array(frank_song);
// console.log(random_song);


app.get('/', (req, res) => {
    res.send(get_array(random_song))});

app.get('/birth_date', (req, res) => res.send(dob));
app.get('/birth_city', (req, res) => res.send(birthcity));
app.get('/wives', (req, res) => res.send(wifes));
app.get('/picture', (req, res) => {
    res.redirect(301, picture);
});


// add more route
app.get('/public', (req, res) => res.send("Everybody can see this page"));


// simple auth error handling
app.get("/protected", basicAuth({
    users: {'admin':'admin'},
    unauthorizedResponse: (req) => {
        return `401 Not authorized`
    }
}), (req, res) => {
    res.send("Welcome, authenticated client");
});


// port listening
app.listen(8080, "0.0.0.0", () => {
    console.log("Listening");
});
