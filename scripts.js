$(document).ready(function() {
  $('#grocery-list').submit(function(event) {
    event.preventDefault();
    const groceryItemsString = $('#groceries').val();

    if (groceryItemsString) {
      
    } else alert('Please enter your grocery list items')
  })
})