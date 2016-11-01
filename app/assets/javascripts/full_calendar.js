var initialize_calendar = function() {
  $(.calendar).each(function() {
    var $cal = $(this);
    $cal.fullCalendar({});
  });
}

$(document).on('turbolinks:load', initialize_calendar)
