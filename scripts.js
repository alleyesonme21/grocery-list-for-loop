$(document).ready(function() {
  $('#grocery-list').submit(function(event) {
    event.preventDefault();
    const groceryItemsString = $('#groceries').val();

    if (groceryItemsString) {
      $('#grocery-list').toggle();
      $('#updated-grocery-list').toggle();
      const listItems = groceryItemsString.toUpperCase().split(', ').sort();
      listItems.forEach(item => {
        $('#modified-grocery-list').append(`<li>${item}</li>`)
      });
    } else alert('Please enter your grocery list items')
  })
})