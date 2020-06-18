//alert('hi there')
//When a user clicks on a button, all <p> elements will be hidden:
/*$("p").ready(function () {
    $("button").click(function () {
        $("p").hide();

    });
});
 */

//using jQuery selectors= When a user clicks on a button, an elements will be hidden by using id="test"
// and class="test":
/*$(document).ready(function () {

    $("button").click(function () {
        $("#test").hide();

    })
    $(this).dblclick(function () {
        $(".test").hide();

    })

})
 */

//The on() method attaches one or more event handlers for the selected elements.
/*$('p').on({
    mouseenter: function () {
        $(this).css("background-color","lightgray");
    },
    mouseleave:function () {
        $(this).css("background-color","lightblue");
    }
});

 */

//With jQuery, you can hide and show or toggle HTML elements with the hide(), show(),toggle() methods:
/*$(document).ready(function () {
    $("button").click(function () {
        $("#test").hide(1000)
    })
    $("#show").click(function () {
        $("#test").show("slow")

    })
    $("#toggle").click(function () {
        $("p").toggle("slow")

    })

})

 */

//With jQuery you can fade elements in and out of visibility.
$(document).ready(function () {
    $("#fade").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(500);
    })
    $("#fadeOut").click(function () {
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(500);
    })
    $("#fadeToggle").click(function () {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(500);
    })
    $("#fadeTo").click(function () {
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.6);
    })
})

