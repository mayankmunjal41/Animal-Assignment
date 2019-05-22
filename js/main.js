$(document).ready(function() {
  $(".previous-posts").hide();
  $(".recent-posts").append(
    "<p class='view text-center font-nunito font-weight-bold'>view more</p>"
  );
  $(".view").on("click", () => {
    $(".previous-posts").show();
    if ($(".previous-posts").css("display") === "block") {
      $(".view").hide();
    }
  });
  $(".scroll").on("click", function(e) {
    document.querySelector(".recent-posts").scrollIntoView({
      behavior: "smooth"
    });
  });
});
