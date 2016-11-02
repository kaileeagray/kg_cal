$(function() {
  initializeCalendar();
  cacheDOM();
  initializeRightCalendar();
  initializeLeftCalendar();
  $.getScript("js/events.js", function(){
  });
  $('#datePicker')
    .datepicker({
        format: 'mm/dd/yyyy'
    })
    .on('changeDate', function(e) {
        // Revalidate the date field
        $('#eventForm').formValidation('revalidateField', 'date');
    });
});

/* --------------------------initialize calendar-------------------------- */
var initializeCalendar = function() {
  $('.calendar').fullCalendar({
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      // create events
      events: events(),
      eventBackgroundColor: '#337ab7'
    });
}

/*--------------------------global variables (change)--------------------------*/
var cacheDOM = function() {
  $cal = $('.calendar');
  $cal1 = $('#calendar1');
  $cal2 = $('#calendar2');
}

/* -------------------manage cal2 (right pane)------------------- */
var initializeRightCalendar = function()  {
  $cal2.fullCalendar('changeView', 'agendaDay');

  $cal2.fullCalendar('option', {
      header: {
          center: '',
          right: 'prev,next today'
      },
      selectable: true,
      selectHelper: true,
      select: function(start, end) {
        newEvent(start, end);
      },
      eventClick: function(calEvent, jsEvent, view) {
        editEvent(calEvent, jsEvent, view);
      }
  });
}

/* -------------------manage cal1 (left pane)------------------- */
var initializeLeftCalendar = function() {
  $cal1.fullCalendar('option', {
      header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek'
      },
      navLinks: false,
      dayClick: function(date) {
          cal2GoTo(date);
      },
      eventClick: function(calEvent) {
          cal2GoTo(calEvent.start);
      }
  });
}

/* -------------------moves right pane to date------------------- */
var cal2GoTo = function(date) {
    $cal2.fullCalendar('gotoDate', date);
}


/*Form to input or edit event data*/
var newEvent = function(start, end) {
  var title = prompt('Appointment Info:');
  var eventData;
  if (title) {
      eventData = {
          title: title,
          start: start,
          end: end
      };
      $cal.fullCalendar('renderEvent', eventData, true); // stick? = true
  }
}

var editEvent = function(calEvent, jsEvent, view) {
  if (calEvent.allDay) {
      var cal1Event = getCal1Event(calEvent._id);
  } else {
      var cal1Event = calEvent;
  }
  var title = prompt('Edit Appointment Info:', calEvent.title, {
      buttons: {
          Ok: true,
          Cancel: false
      }
  });
  if (title) {
      calEvent.title = title;
      cal1Event.title = title;
      $cal2.fullCalendar('updateEvent', calEvent);
      $cal1.fullCalendar('updateEvent', cal1Event);
  }
}

/* full calendar gives all day events given different ids in month/week view
  and day view. create/edit event in day (right) view, so correct for
  id change to update in month/week (left)
*/
var getCal1Event = function(cal2Id) {
    var num = cal2Id.slice(-1) - 5;
    var id = "_fc" + num;
    return $cal1.fullCalendar('clientEvents', id)[0];
}
