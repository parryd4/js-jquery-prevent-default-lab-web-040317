$(document).ready(function(){
  // call functions here
  submitForm()
})

// define functions here
function submitForm(){
  $('form').on('submit',function(e){
    var itemToAdd = $('#item').val()
    $('ol').append(`<li>${itemToAdd}</li>`)
    e.preventDefault()
  })
}
