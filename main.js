$(document).ready(function () {
  $(".menu").click(function () {
    $(this).toggleClass("fa-xmark");
    $(".navbar").toggleClass("nav-tog");
  });

  $(window).on("load scroll", function () {
    $(".menu").removeClass("fa-xmark");
    $(".navbar").removeClass("nav-tog");

    $("section").each(function () {
      let top = $(window).scrollTop();
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });
});
