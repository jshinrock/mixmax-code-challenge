// Just a bit of code to get you started. Feel free to modify!

var currentSelectedItem = null;

$('input').on('input', function() {
  $.ajax({
    method: 'post',
    url: '/query',
    contentType: 'application/json',
    data: JSON.stringify({
      query: $(this).val()
    })
  })
    .success(function(results) {
      $('.results').empty();

      results.forEach(function(result) {
        var li = $('<li>').text(result);
        $('.results').append(li);
      });
    });
});

// handle key events
$('input').on('keydown', function(e) {
    var results = $('.results > li');

    // handle "down" keypress
    if ((e.keyCode) === 40) {
        if (!currentSelectedItem || currentSelectedItem >= results.length) {
            currentSelectedItem = 0;
        }
        currentSelectedItem++;
        var selectedItem = results.get(currentSelectedItem);
        results.removeClass('red');
        $(selectedItem).addClass('red');

    }

    // handle "up" keypress
    if ((e.keyCode) === 38) {
        if (!currentSelectedItem || currentSelectedItem <= 0) {
            currentSelectedItem = results.length;
        }
        currentSelectedItem--;
        var selectedItem = results.get(currentSelectedItem);
        results.removeClass('red');
        $(selectedItem).addClass('red');
    }

    // populate input on "enter"
    if((e.keyCode) === 13) {
        var selectedItem = results.get(currentSelectedItem);
        var itemText = $(selectedItem).text();
        $('input').val(itemText);
    }
});
