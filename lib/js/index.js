$(document).ready(function() {

	$('.calendar').fullCalendar({
		editable: true,
		eventLimit: true, // allow "more" link when too many events

		events: [
			{
				title: 'All Day Event',
				start: '2016-10-01'
			},
			{
				title: 'Long Event',
				start: '2016-10-07',
				end: '2016-10-10'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2016-10-10T16:00:00'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2016-10-16T16:00:00'
			},
			{
				title: 'Conference',
				start: '2016-10-11',
				end: '2016-10-13'
			},
			{
				title: 'Meeting',
				start: '2016-10-12T10:30:00',
				end: '2016-10-12T12:30:00'
			},
			{
				title: 'Lunch',
				start: '2016-10-12T12:00:00'
			},
			{
				title: 'Meeting',
				start: '2016-10-12T14:30:00'
			},
			{
				title: 'Happy Hour',
				start: '2016-10-12T17:30:00'
			},
			{
				title: 'Dinner',
				start: '2016-10-12T20:00:00'
			},
			{
				title: 'Birthday Party',
				start: '2016-10-13T07:00:00'
			},
			{
				title: 'Click for Google',
				url: 'http://google.com/',
				start: '2016-10-28'
			}
		]
	});

	var $cal2 = $('#calendar2');

	$cal2.fullCalendar('changeView', 'agendaDay');

	$cal2.fullCalendar('option', {
		header: {
			right: 'prev,next today',
		},
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
	});

	var $cal1 = $('#calendar1');

	$cal1.fullCalendar('option', {
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek'
		},
		navLinks: false, // can click day/week names to navigate views
		dayClick: function(date, jsEvent, view) {
			$('#calendar2').fullCalendar('gotoDate', date);
		}
	})




});
