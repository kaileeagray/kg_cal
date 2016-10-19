

$(document).ready(function() {
	agendaDay('2016-10-25');

	$('#calendar').fullCalendar({
		theme: false,
		default: false,
		header: {
			left: 'prev,next',
			center: 'title',
			right: 'month,agendaWeek'
		},
		navLinks: true, // can click day/week names to navigate views
		editable: false,
		eventLimit: true, // allow "more" link when too many events
		navLinks: true,
    navLinkDayClick: function(date, jsEvent) {
			console.log(date.format());
        console.log(agendaDay(date)); // date is a moment
    }
	});

	function agendaDay(date) {
		$('#calendar2').fullCalendar({
				theme: false,
				defaultView: 'agendaDay',
				defaultDate: date,
				navLinks: false, // can click day/week names to navigate views
				editable: false,
				eventLimit: true, // allow "more" link when too many events
			});
	}

});
