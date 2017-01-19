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
        $('div#message').text("")
        // If we get back a message, it means there was bad data
        if (data.message) {
          // check if message contains the words 'Did you mean' get
          // the contents of the anchor tag and put it in the
          // input box
          if (data.message.includes("Did you mean")){
            let suggestion = data.message.match(/<a [^>]+>([^<]+)<\/a>/)[1]
            $input.val(suggestion)
            return
          }
          return $('div#message').append(data.message)
        }
        let imageResult = data.image.src
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
})
