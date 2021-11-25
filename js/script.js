
/*
- Some sort of title done
- A short description telling the user what to do done 
- A Button ("start" or "go" or "search") done
- Thoughtful and delightful CSS and design
- An option for the user to interact with a random aspect of your API
(*ex. random joke/fact/picture/etc.*)
- An option for the user to search or select information from your API 
(*ex. detail page for a movie, or Pokemon, or stock information*)

Essentially, we want you to make an AJAX call to an API for data, parse 
through the data appropriately to find specific pieces of data
that a user of your application would want, and then render those pieces 
of data out in a thoughtful and delightful way. Now, your user has access
to the API data that you have parsed. Good job! Way to parse that data 
and serve it up to your user! 👏
*/

// image of rick and morty starts at 1 goes till 183
async function getRick(event) {
    event.preventDefault();
    const userInput = $('input[type="text"]').val();
    const url = `https://rickandmortyapi.com/api/episode/${userInput}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.episode)
    $("#titleR").html(data.id);
    $("#nameR").html(data.episode);
    $("#statusR").html(data.air_date);
    // $("#nameR").html(Object.entries(data))
}
$("form").on("submit", getRick);

// async function getRandomQuote() {
//     const url = `https://animechan.vercel.app/api/random`
//     const response = await fetch(url);
//     const data = await response.json();
//     $('#anime').html(data.anime);
//     $('#character').html(data.character);
//     $('#quote').html(data.quote);
// }
// $("#randomAnimeQuote").on(getRandomQuote);



// async function getNameQuote(e) {
//     e.preventDefault();
    // const userInput = $('input[type="text"]').val();
//     const url = `https://animechan.vercel.app/api/quotes/character/anime?name=naruto`
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data)
//     $("#titleR").html(data.anime);
//     $("nameR").html(data.character);
//     $("statusR").html(data.quote);
// }
// $("form").on("submit", getNameQuote);




// async function getMovieData(e) {
//     e.preventDefault();
//     const userInput = $('input[type="text"]').val();
//     const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${userInput}`;
//     const apiKey = "479098d7";
//     const response = await fetch(url);
//     const data = await response.json();

//     $('#title').html(data.Title);
//     $('#year').html(data.Year);
//     $('#rated').html(data.Rated);
// }

// $("form").on("submit", getMovieData)



// random number and image creator 
// const randomInteger = function(min,max) {
//     return Math.floor(Math.random() * (max - min +1)) + min;
// }
// const randomCharacter = randomInteger(1, 183);
// tried to create new image tag with jquery

// let imageTag = $("<img />").attr({
//     'id': 'characterPic',
//     'src': this.imageUrl,
//     'alt': 'image',
    
// }).appendTo("#randomPicContainer")
// console.log(imageUrl)

