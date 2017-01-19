$(document).ready(function() {

  const URL = 'http://www.strudel.org.uk/lookUP/json/?name=';

  // get the user query
  $('form#search-form').submit(function(event) {
    event.preventDefault()
    let $input = $('input#query')
    let value = $input.val()
    // parse the user query
    let parsedInput = value.replace(/\s/g,'+')
    // interpolate query with base url
    let query = URL + parsedInput + '&callback=lk'
    // submit AJAX request
    $.ajax({
      url: query,
      dataType: 'jsonp',
      success: function(data) {
      debugger

      }




    }) // end of ajax






  })







  // display the JSON data
  // display img







})
