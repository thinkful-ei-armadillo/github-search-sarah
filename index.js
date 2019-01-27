//search github users
// trigger call to github's API
// repos must appear and have link to URL
//make multiple searches and see only results for current search


'use strict';

//no API_KEY needed for GitHub
const BASE_URL= "https://api.github.com/users"

function displaySearchResults(responseJson){
// loop through responseJson to pull info, put in <ul> as <li>s    
    const searchResults =[];
    for(let i=0; i < responseJson.length; i++){
        searchResults.push( `<ul id="results"> 
        <li>Name : ${responseJson[i].name}</li>
        <li>Description: ${responseJson[i].description}
        <li> URL: <a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a></li>
        </ul>`)
    }
    //put html of the array in the div
$('.search-results').html(searchResults);
}

function fetchSearchResults(url){
    // get URL and then use JSON to make asynch requests   
       fetch(url)
       .then(response => response.json() 
       .then (responseJson => displaySearchResults(responseJson)))
       .catch(error => alert('fetchSearchResults is not working.'));
        // console.log(responseJson);
   }

function createSearchURL(users) {
    //create URLs for users.
    //split at the spaces and then join with & so it can be read as URL    
        const queryString= users.split(' ').join();
    //create the full URL by building on the BASE_URL and adding the query string and repos     
        const fullURL= `${BASE_URL}/${queryString}/repos`;
    //put the fullURL through fetchResults
    fetchSearchResults(fullURL);
    
    console.log(fullURL);
    }


function renderForm(){
    //when the submit button is pressed, get the value of the form 
     $('.user-search-form').submit(function(event){
         event.preventDefault();
         const users= $('.user-search-input').val();
         createSearchURL(users);

    // console.log(fullURL);
     })
 }

function main(){
 // the function to run all functions   
    renderForm();
}
//run the function to run all functions
$(main);