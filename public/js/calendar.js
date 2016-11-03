$(function() {
  loadEvents();
  showTodaysDate();
  initializeCalendar();
  getCalendars();
  initializeRightCalendar();
  initializeLeftCalendar();
  initializeDateTimePicker();


  // $('#datetimepicker2').datetimepicker({
  //   inline: true,
  //   sideBySide: true
  // });

});

/* --------------------------initialize calendar-------------------------- */
var initializeCalendar = function() {
  $('.calendar').fullCalendar({
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      // create events
      events: events(),
      defaultTimedEventDuration: '00:30:00',
      forceEventDuration: true,
      eventBackgroundColor: '#337ab7',
      editable: false,
      height: screen.height - 160
    });
}

/*--------------------------calendar variables--------------------------*/
var getCalendars = function() {
  $cal = $('.calendar');
  $cal1 = $('#calendar1');
  $cal2 = $('#calendar2');
}

/* -------------------manage cal2 (right pane)------------------- */
var initializeRightCalendar = function()  {
  $cal2.fullCalendar('changeView', 'agendaDay');

  $cal2.fullCalendar('option', {
    slotEventOverlap: false,
    allDaySlot: false,
    header: {
        center: '',
        right: 'prev,next today'
      },
      selectable: true,
      selectHelper: true,
      select: function(start, end) {
        newEvent(start);
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


/*-------------------Form to input or edit event data-------------------*/
var newEvent = function(start) {
  if (!start) {
    start = Date.now();
  }
  $('#newEvent').modal('show');

  console.log(start._d)

  $('#submit').on('click', function() {
    var title = $('input').val();
    console.log(title)
    $('#newEvent').modal('hide');
    var eventData;
    if (title) {
        eventData = {
            title: title,
            start: start
        };
        $cal.fullCalendar('renderEvent', eventData, true); // stick? = true
      }
    $cal.fullCalendar('unselect');
  });

}

var editEvent = function(calEvent, jsEvent, view) {
  $('#editEvent').modal('show');

  // if (calEvent.allDay) {
  //     var cal1Event = getCal1Event(calEvent._id);
  // } else {
  //     var cal1Event = calEvent;
  // }
  // if (title) {
  //     calEvent.title = title;
  //     cal1Event.title = title;
  //     $cal2.fullCalendar('updateEvent', calEvent);
  //     $cal1.fullCalendar('updateEvent', cal1Event);
  // }
}

/* full calendar gives all day events given different ids in month/week view
  and day view. create/edit event in day (right) view, so correct for
  id change to update in month/week (left) */
var getCal1Event = function(cal2Id) {
    var num = cal2Id.slice(-1) - 5;
    var id = "_fc" + num;
    return $cal1.fullCalendar('clientEvents', id)[0];
}

var loadEvents = function() {
  $.getScript("js/events.js", function(){
  });
}


/* --------------------------load date in navbar-------------------------- */
var showTodaysDate = function() {
  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();
  $("#todaysDate").html("Today is " + m + "/" + d + "/" + y);
};

var initializeDateTimePicker = function() {
  $('.datetimepicker').datetimepicker({
        format: 'yyyy-mm-dd hh:ii',
        inline: true,
        sideBySide: true,
        stepping: 30
    });
}
