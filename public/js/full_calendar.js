$(function() {
  initializeCalendar();
  cacheDOM();
  initializeRightCalendar();
  initializeLeftCalendar();
});

/* --------------------------initialize calendar-------------------------- */
var initializeCalendar = function() {
  $('.calendar').fullCalendar({
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      // create events
        events: seeds
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
          right: 'prev,next today',
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


var seeds = [{
    "title": "All Day Event",
    "start": "2016-11-01"
}, {
    "title": "Long Event",
    "start": "2016-11-07",
    "end": "2016-11-10"
}, {
    "id": "999",
    "title": "Repeating Event",
    "start": "2016-11-10T16:00:00-05:00"
}, {
    "id": "999",
    "title": "Repeating Event",
    "start": "2016-11-16T16:00:00-05:00"
}, {
    "title": "Conference",
    "start": "2016-11-11",
    "end": "2016-11-13"
}, {
    "title": "Meeting",
    "start": "2016-11-12T10:30:00-05:00",
    "end": "2016-11-12T12:30:00-05:00"
}, {
    "title": "Run tests",
    "start": "2016-11-12T12:00:00-05:00"
}]
