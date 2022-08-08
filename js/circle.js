var create = () => {
  $("body").append('<div class="circle"></div>');
};
$("#start").click(() => {
  for (let i = 0; i < +$("#noc").val(); i++) {
    create();
  }
  var width = $("#width").val();
  var height = $("#width").val();
  setInterval(() => {
    console.log(width, height);
    width = +width + +$("#ga").val();
    height = +height + +$("#ga").val();
    $(".circle").css({ width: width + "px" });
    $(".circle").css({ height: height + "px" });
  }, $("#gr").val());
  $(".circle").click(() => {
    $(".circle").css({ display: "none" });
  });
});
