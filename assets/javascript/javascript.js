
var nowMoment = moment();
var displayDate = document.getElementById('currentDay');
displayDate.innerHTML = nowMoment.format("dddd, MMMM Do YYYY")

$(document).ready(function() {
    // listen for save button
    $(".saveBtn").on("click", function() {
        //get value
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //save to local storage
        localStorage.setItem(time, value);
    });

    function hourUpdate() {
        var currentHour = moment().hours();
        // hour color change depending on time if past, present or future
        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split
            ("-")[1]);
            if (blockHour < currentHour) {
                $(this).addClass("past");
            } else if (blockHour = currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
        
    }

    hourUpdate();

    var interval = setInterval(hourUpdate, 15000);
    // save to local storage based on description in text box and hour
    $("#nine .description").val(localStorage.getItem("nine"));
    $("#ten .description").val(localStorage.getItem("ten"));
    $("#eleven .description").val(localStorage.getItem("eleven"));
    $("#twelve .description").val(localStorage.getItem("twelve"));
    $("#one .description").val(localStorage.getItem("one"));
    $("#two .description").val(localStorage.getItem("two"));
    $("#three .description").val(localStorage.getItem("three"));
    $("#four .description").val(localStorage.getItem("four"));
    $("#five .description").val(localStorage.getItem("five"));
});