var flag = false;
$("#start").click(function () {
  if (!flag) {
    $(".boundary").removeClass("youlose");
    $("#status").text(function () {
      return 'Click the "S" to begin.';
    });
  }
  flag = true;
});

$(".boundary").mouseover(function () {
  if (flag) {
    $(".boundary").addClass("youlose");
    flag = false;
    $("#status").text(function () {
      return "You loose";
    });
  }
});
$("#maze").mouseleave(function () {
  if (flag) {
    $(".boundary").addClass("youlose");
    flag = false;
    $("#status").text(function () {
      return "You loose";
    });
  }
});
$("#end").mouseover(function () {
  if (flag) {
    $("#status").text(function () {
      return "You Win";
    });
    flag = false;
  }
});
