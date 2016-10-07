var joinUsController = function() {

    function handleView()

    {


        $('#user_photo_0').on('mouseenter', function() {

            if($(this)[0].localName.toString() !="img"){


                $('#item_0').css("background", "rgba(40, 96, 143, 0.9)");

                $('#apps_0').css("display", "block");

                $('#text_0').css("display", "block");

            }


        });
        $('#item_0').on('mouseleave', function() {

            $('#user_photo_0').css("width","");

            $('#item_0').css("background", "");

            $('#apps_0').css("display", "none");

            $('#text_0').css("display", "none");

        });


        $('#showMeMore').click(function() {
            fnShowMeMore(event);
        });


        $('.screenshot').animate({
            scrollTop: $(".screenpack").offset().top
        }, 5500);

        $( "#widget-container").show();

        /*ImproveMe  - use a more efficient & elegant way to animate the entrance of the div*/
        /*AddHere - The ability to automatically decide whether the div will be animated left to right or right to left, depending on the layout*/
        var piplsPoped=false;
        jQuery(".screenshot").scroll(function() {
            if ( (jQuery(".screenshot").scrollTop() >= (jQuery(document).height() - jQuery(".screenshot").height())*0.2)&& piplsPoped==false) {
        /*ImproveMe - need to add the ability to skip all this in case the .screenshot").height is smaller and there is no where to scroll */
                piplsPoped = true;

                $( "#widget-container" ).animate({
                    opacity: 1,
                    left: "+=500"
                }, 1000, function() {
                    $( "#widget-container" ).animate({
                        opacity: 0.4,
                        top: "+=10"
                    }, 100, function(){
                        $( "#widget-container" ).animate({
                            opacity: 1,
                            top: "-=10"
                        }, 105, function(){
                            $( "#widget-container" ).animate({
                                opacity: 0.4,
                                top: "+=10"
                            }, 105, function(){
                                $( "#widget-container" ).animate({
                                    opacity: 1,
                                    top: "-=10"
                                }, 105, function(){

                                    $( ".guidance").show().animate({

                                        opacity:"1"
                                    });

                                });
                            });
                        });

                    });
                });
            }

        });
    }






    function fnShowMeMore( event )

    {

        // Prevent default link event.

        event.preventDefault();

        $( "#user_photo_0" ).trigger( "mouseenter" );

        return false;

    }


    return {

        initialize : function() {

                /*wait for an event that will tell us the page has fully loaded*/

                handleView();

        }

    };

}();



function handlePageViewReady()

{

    joinUsController.initialize();

}

$().ready( handlePageViewReady );