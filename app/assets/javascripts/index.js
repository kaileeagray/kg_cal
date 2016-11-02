$(document).ready(function() {

  /* -------------------------------cache DOM------------------------------- */
  //$cal1 and $cal2 are part of $cal
  var $cal = $('.calendar');
  var $cal1 = $('#calendar1');
  var $cal2 = $('#calendar2');


  /* --------------------------initialize calendar-------------------------- */
  $('.calendar').fullCalendar({
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      // create events
        events: [{
            "title": "All Day Event",
            "start": "2016-10-01"
        }, {
            "title": "Long Event",
            "start": "2016-10-07",
            "end": "2016-10-10"
        }, {
            "id": "999",
            "title": "Repeating Event",
            "start": "2016-10-10T16:00:00-05:00"
        }, {
            "id": "999",
            "title": "Repeating Event",
            "start": "2016-10-16T16:00:00-05:00"
        }, {
            "title": "Conference",
            "start": "2016-10-11",
            "end": "2016-10-13"
        }, {
            "title": "Meeting",
            "start": "2016-10-12T10:30:00-05:00",
            "end": "2016-10-12T12:30:00-05:00"
        }, {
            "title": "Run tests",
            "start": "2016-10-12T12:00:00-05:00"
        }]
    });

  /* -------------------manage cal2 (right pane)------------------- */
  $cal2.fullCalendar('changeView', 'agendaDay');

  $cal2.fullCalendar('option', {
      header: {
          right: 'prev,next today',
      },
      selectable: true,
      selectHelper: true,
      select: function(start, end) {
        {
          $.getScript('/events/new', function() {
            $('#event_date_range').val(moment(start).format("MM/DD/YYY HH:mm") + ' - ' + moment(end).format("MM/DD/YYY HH:mm"));
            date_range_picker();
            $('.start_hidden').val(moment(start).format('YYYY-MM-DD HH:mm'));
            $('.end_hidden').val(moment(end).format('YYYY-MM-DD HH:mm'));
          })
        }
        var eventData;
          if (title) {
              eventData = {
                  title: title,
                  start: start,
                  end: end
              };
              $cal.fullCalendar('renderEvent', eventData, true); // stick? = true
          }
      	$cal.fullCalendar('unselect');
      },
      eventClick: function(calEvent, jsEvent, view) {
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
  });


  /* -------------------manage cal1 (right pane)------------------- */
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
      },
      selectable: false,
      // show a bar as we drag along days
      selectHelper: true,
      // make changes and add events to calendar
      editable: true,
      // if a day has more than can be displayed, to show (+ 2 more)
      eventLimit: true
    });



  /* -------------------moves right pane to date------------------- */
  function cal2GoTo(date) {
      $cal2.fullCalendar('gotoDate', date);
  }


  /* full calendar gives all day events given different ids in month/week view
    and day view. create/edit event in day (right) view, so correct for
    id change to update in month/week (left)
  */
  function getCal1Event(cal2Id) {
      var num = cal2Id.slice(-1) - 5;
      var id = "_fc" + num;
      return $cal1.fullCalendar('clientEvents', id)[0];
  }

});
