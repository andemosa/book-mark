$(function () {
  $(".faq-list-item").click(function () {
    var $answer = $(this).find(".answer");
    if ($answer.hasClass("open")) {
      $answer.removeClass("open");
      // Use the slideUp() method to hide $answer
      $answer.slideUp();

      // Find the <span> elements inside, then rewrite the content using the text() method
      $(this)
        .find("span")
        .html(
          `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8"/></svg>`
        );
    } else {
      $answer.addClass("open");
      // Use the slideDown() method to show $answer
      $answer.slideDown();

      // Find the <span> elements inside, then rewrite the content using the text() method
      $(this).find("span").html(`<i class='fas fa-angle-up'></i>`);
    }
  });
});
