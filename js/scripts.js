$(document).ready(function() {
  $("#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-theme");
  });
  $("#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-theme");
  });
  $("#original").click(function() {
    $("body").removeClass();
    $("body").addClass("original-theme");
  });
});
