$(document).ready(function(){
    $("#form").submit(function(e) {
      e.preventDefault();
      var form_data = $(this).serialize();
      $.ajax({
        method: "POST",
        url: "mail.php",
        data: form_data,
        success: function() {
                  $('.blockforma').animate({opacity: 0}, 500, 
                    function () {
                $(this).css('display', 'none');
                $('.fullfon').fadeOut(2500);
                $(".results").fadeIn("slow").delay(1500).fadeOut(500);
            }
         );
        }
      });
    });
  });
