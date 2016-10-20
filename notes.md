## Ideas
+ https://fullcalendar.io/docs/views/changeView/
+ https://fullcalendar.io/docs/utilities/dynamic_options/
+ http://stackoverflow.com/questions/13432014/how-can-i-set-fullcalendar-options-dynamically/38299511#38299511
+ http://stackoverflow.com/questions/13432014/how-can-i-set-fullcalendar-options-dynamically
+ http://stackoverflow.com/questions/9801095/jquery-fullcalendar-send-custom-parameter-and-refresh-calendar-with-json


+ when user is typing in new appointment, make that col into col-lg-8 and the other col-lg-4
+ rails?? https://github.com/bokmann/fullcalendar-rails


  $('#calendar').fullCalendar({
      googleCalendarApiKey: '29649601574-q86gesb5f0k8lc8uclbbdcgtnso4h0d7.apps.googleusercontent.com',
      events: {
          googleCalendarId: 'jken6omp7b4fa734gt0e9a9dao@group.calendar.google.com'
          className: 'gcal-event' // an option!
      }
      {
        left:   'title',
        center: '',
        right:  'today prev,next'
      }
  });

## Resources
+ https://developer.chrome.com/apps/app_frameworks
+ Spider Monkey: https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Getting_SpiderMonkey_source_code


selectable: true,
selectHelper: true,
select: function(start, end) {
  var title = prompt('Event Title:');
  var eventData;
  if (title) {
    eventData = {
      title: title,
      start: start,
      end: end
    };
    $('.calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
  }
  $('.calendar').fullCalendar('unselect');
},
