'use strict';

const BASE_URL= "https://api.github.com/users"



function renderForm(){
    $('.user-search-form').submit(function(event){
        event.preventDefault();
        const user= $('.search-form-input').val();
        fetchSearchResults(fullURL);
    console.log(fullURL);
    })
}

function fetchSearchResults(url){
 // get URL and then use JSON to make asynch requests   
    fetch(url)
    .then(response => response.json() )
    .then (responseJson => displaySearchResults(responseJson)
    )
   
    .catch(error => alert(` fetchSearchResults is not working.`))
     console.log(responseJson);
}


function main(){
 // the function to run all functions   
    renderForm();
}
//run the function to run all functions
$(main);