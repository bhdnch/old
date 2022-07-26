$(document).ready(function () {
   $(".content").slice(0, 2).show();
   if ($(".sermons-main-page:hidden").length != 0) {
      $("#loadMore").show();
   }
   $("#loadMore").on("click", function (e) {
      e.preventDefault();
      $(".content:hidden").slice(0, 2).slideDown();
      if ($(".content:hidden").length == 0) {
         $("#loadMore").fadeOut("slow");
      }
   });
});
