$(document).ready(function() {
    $("#result").hide();
    $("#submit").click(function() {
        var input = $("#ammount").val();
        if(input > 0) {

            var input = (parseInt(input));
            
            // FIVERR 5$ =/ 1$

            var math = input / 5;
            var math = input - math;

            $("#result").slideUp();
            $("#result").empty();
            $("#result").slideDown();
            $("#result").append("<h4 class='text-center text-white pt-5 pb-5'>Your Fiverr Earning is "+ math +"</h4>"); 


        }else {
            alert("Please input your earning ammount");
        }
    });
});

