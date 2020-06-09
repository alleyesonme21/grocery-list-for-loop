$(document).ready(function() {
  $('#grocery-list').submit(function(event) {
    event.preventDefault();
    const groceryItemsString = $('#groceries').val();

    if (groceryItemsString) {
      $('#grocery-list').toggle();
      $('#updated-grocery-list').toggle();
      const listItems = groceryItemsString.toUpperCase().split(', ').sort();
      for (let i = 0; i <= listItems.length-1; i++){
        $('#modified-grocery-list').append(`<li>${listItems[i]}</li>`)
      };
    }
  });
});

// listItems.forEach(item => 