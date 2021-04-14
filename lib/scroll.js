// reference from: https://codepen.io/abusedmedia/pen/NXZdgq/

// $(window).on("scroll", function () {
//     var scrollPos = $(window).scrollTop();
//     var winHeight = $(window).height();
//     var docHeight = $(document).height();
//     var perc = (100 * scrollPos) / (docHeight - winHeight);
//     $("#indicator").width(perc + "%");
//   });

//   $('.gallery').on('scroll', function () {
//     var scrollPos = $('.gallery').scrollTop()
//     var docHeight = $('.gallery').height()
//     var perc = 100 * scrollPos / (docHeight - 400)
//     $('#indicator').width(perc + '%')
// })

document.getElementById("gallery").on('scroll', function(){
    var scrollPos = document.getElementById("gallery").scrollTop()
    var docHeight = document.getElementById("gallery").height()
    var perc = 100 * scrollPos / (docHeight - 400)
    document.getElementById("indicator")/width(perc + '%')
}
)



// window.onscroll = function() {myFunction()};

// function myFunction() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("myBar").style.width = scrolled + "%";
// }