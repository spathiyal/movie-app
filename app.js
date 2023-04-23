$("#movie-form").on("submit", function (evt) {
  evt.preventDefault();
  let title = $("#title").val();

  let rating = $("#rating").val();
  if (title.length === 0 && rating.length === 0) {
    return;
  }
  else{
   
    markup =
      "<tr><td>" +
      `${title}` +
      "</td> <td>" +
      `${rating}` +
      "</td> <td> " +
      "<button type='button' onclick='movieDelete(this);'  class='deleteBtn'>Delete" +
      "</button>" +
      "</td></tr> ";

    tableBody = $("tbody");
    tableBody.append(markup);

    $("#title").val("");
    $("#rating").val("");
     
  }
});

function movieDelete(ctl) {
  $(ctl).parents("tr").remove();
}
