$(document).ready(function() {

  const URL = 'http://www.strudel.org.uk/lookUP/json/?name=';

  // get the user query
  $('form#search-form').submit(function(event) {
    event.preventDefault()
    let $input = $('input#query')
    let value = $input.val()
    // parse the user query
    let parsedInput = value.replace(/\s/g,'+')
    $input.val('')
    // interpolate query with base url
    let query = URL + parsedInput + '&callback=lk'
    // submit AJAX request
    $.ajax({
      url: query,
      dataType: 'jsonp',
      success: function(data) {
        let imageResult = data.image.src
      // check for Earth

      // check for bad data
      // bad data: no http
        if (imageResult.substring(0, 4) !== "http") {
          imageResult = "http:" + imageResult
        }

        // bad data: if mars
        if (value.includes('mars')) {
          imageResult = 'http://nssdc.gsfc.nasa.gov/planetary/mars/image/mars.gif'
        }





      $('div#result').append(`<img src=${imageResult}>`)
      }




    }) // end of ajax






  })







  // display the JSON data
  // display img







})
