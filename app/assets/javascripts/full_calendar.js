

$(document).ready(function() {
    var $cal = $('.calendar');
    $cal.fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      // select multiple days and have a callback when clicked
      selectable: true,
      // show a bar as we drag along days
      selectHelper: true,
      // make changes and add events to calendar
      editable: true,
      // if a day has more than can be displayed, to show (+ 2 more)
      eventLimit: true,

      select: function(start, end) {
        $.getScript('/events/new', function() {
          $('#event_date_range').val(moment(start).format("MM/DD/YYY HH:mm") + ' - ' + moment(end).format("MM/DD/YYY HH:mm"));
          date_range_picker();
          $('.start_hidden').val(moment(start).format('YYYY-MM-DD HH:mm'));
          $('.end_hidden').val(moment(end).format('YYYY-MM-DD HH:mm'));
        })
      }
  });
});
