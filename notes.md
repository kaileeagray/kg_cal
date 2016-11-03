# ToDos  
+ better selection of year and month for ux
+ sanitize input, allow ?blank events?
+ disable dragging of new event length
+ in week view, if user clicks on a time slot, open that slot in day view, then
  build appointment prompt or maybe eliminate week view?
+ work week view custom button
+ add bootstrap datetimepicker back in to allow editing of times
+ then add back in + button

## Resources
+ http://jdewit.github.io/bootstrap-timepicker/
+ http://formvalidation.io/examples/bootstrap-datepicker/
+ https://github.com/driftingruby/042-fullcalendar
+ https://fullcalendar.io/docs/views/changeView/
+ https://fullcalendar.io/docs/utilities/dynamic_options/
+ http://stackoverflow.com/questions/13432014/how-can-i-set-fullcalendar-options-dynamically/38299511#38299511
+ http://stackoverflow.com/questions/13432014/how-can-i-set-fullcalendar-options-dynamically
+ http://stackoverflow.com/questions/9801095/jquery-fullcalendar-send-custom-parameter-and-refresh-calendar-with-json
+ http://stackoverflow.com/questions/4395786/how-to-edit-fullcalender-event-content
+ http://stackoverflow.com/questions/11235622/jquery-disable-form-submit-on-enter
+ https://developer.chrome.com/apps/app_frameworks
+ Spider Monkey: https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Getting_SpiderMonkey_source_code

## Second priority
+ add title, content, url, start, end time fields


## Rails -- later
+ (x) add back end to persist data
+ (x) rails?? https://github.com/bokmann/fullcalendar-rails
+ use ajax with inline forms
+ easier editing of exact times
+ edit length of multi day events
+ drag and drop does not update event on right and vise versa
+ create repeating events -- use date-range-picker from driftingruby?
+ multi day events auto move to first day of event -- fix so that view goes to day in which event was clicked
+ enhance mobile view -- bootstrap helped, but need to long press to create events


### DONE!
+ first get modal loading/sending data, then do date stuff

+ maybe go back to text only input to get that working first with modal. THEN try to add datetimepicker
+ create new event from modal (+ button first)
+ need to grab date from click in agenda day view
  setValue(targetMoment) - Sets the model value of the component takes a moment object. An error event will be emmited if the targetMoment does not pass the configured validations. Otherwise the date variable will be set and the relevant events will be fired.

+ load data to create new event from agenda view
+ load data to edit
+ update data from edit
+ ability to delete events

+ add + or something to more easily add. maybe change add event so user could also click another link to create event in addition to inline event
+ focus on 30 min length appointments only to streamline
+ (ok) check on ability to create overlapping appointments
+ (x) revert rails changes and simplify
+ improve js readability -- model after tictactoe org visually separate js code
+ sat/sun diff color?
+ (x) get events to load better -- use seed data generated from rails?
+ pop up view of eventLimit has overlapping view issues with right pane
+ add bootstrap modals for new event creation
+ ability to edit in modal
