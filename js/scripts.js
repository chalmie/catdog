$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meowwwww!</li>");
    $("ul#dog").prepend("<li>Ruffffff!</li>");

  $("ul#cat").children("li").first().click(function() {
    $(this).remove();
  });
  $("ul#dog").children("li").first().click(function() {
    $(this).remove();
    });
  });
});
