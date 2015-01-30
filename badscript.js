function showClock(offset) {
    // Create two variable with the names of the months and days in an array
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    var local_time = new Date();

    // Create a newDate() object
    var newDate = new Date((offset * 1000)* (-1));

    // Extract the current date from Date object
    newDate.setDate(newDate.getDate());
    // Output the day, date, month and year    
    $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
    	
   window.setIntervalId =  setInterval( function() {
        // Create a newDate() object and extract the seconds of the current time on the visitor's
        var seconds = new Date().getSeconds();
        // Add a leading zero to seconds value
        $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);

    	// Create a newDate() object and extract the minutes of the current time on the visitor's
    	var minutes = new Date().getMinutes();
    	// Add a leading zero to the minutes value
    	$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);

        // Create a newDate() object and extract the hours of the current time on the visitor's
        var hours = newDate.getHours();
        // Add a leading zero to the hours value
        $("#hours").html((hours < 10 ? "0" : "" ) + (hours + 2));
    }, 1000);
}

function getOffset(newTimezone) {
    var offset;
    $.ajax({
        dataType: "json",
        url: './getoffset.php',
        async: false,
        data: 'r='+newTimezone+'&o='+getTimeZone(),
        success: function(response) {
            offset = response.offset;
        }
    });
    return offset;
}

jQuery(document).ready(function($) {
    $.get('swears.txt', function(data) {
        var quotes = data.split("\@");
        var idx = Math.floor(quotes.length * Math.random());
        $('.quotes').html(quotes[idx]);
    });
});

