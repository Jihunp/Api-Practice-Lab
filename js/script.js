
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

// get episode details by clicking button
async function getRick(event) {
    event.preventDefault();
    const userInput = $('input[type="text"]').val();
    const url = `https://rickandmortyapi.com/api/episode/?episode=${userInput}`;
    const response = await fetch(url);
    const data = await response.json();
    let dataArray = data.results[0];

    $("#idNum").html(dataArray.id);
    $("#epiName").html(dataArray.name);
    $("#date").html(dataArray.air_date);
    $("#epiCode").html(dataArray.episode);
}
$("form").on("submit", getRick);

// Get random anime quote by clicking button
async function getRandomQuote() {
    const url = `https://animechan.vercel.app/api/random`;
    const response = await fetch(url);
    const data = await response.json();

    $('#anime').html(data.anime);
    $('#character').html(data.character);
    $('#quote').html(data.quote);
};
$("#randomAnimeQuote").on(getRandomQuote);

//create grid
const container = $("#gridContainer");
