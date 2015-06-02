function MovieTicket(movieName, showing, age, cost){
  this.movieName = movieName
  this.showing = showing
  this.age = age
  this.cost = 10;
}

MovieTicket.prototype.price = function() {

  if (this.showing === "matinee") {
    this.cost -= 3;
  }

  if (this.age === "senior" || "child") {
    this.cost -= 2;
  }

  return this.cost;
}

$(document).ready(function(){

  $("form#purchase").submit(function(event){
    event.preventDefault();
    var movie = $("input[name=movie]:checked").val();
    var showing = $("input[name=showtime]:checked").val();
    var type = $("input[name=type]:checked").val();

    var newTicket = new MovieTicket(movie, showing, type)
    newTicket.cost = newTicket.price();

    $(".name").text(newTicket.movieName);
    $(".showing").text(newTicket.showing);
    $(".type").text(newTicket.age);
    $(".cost").text(newTicket.cost);
    $("#show-ticket").show();
    $("div.form").hide();
    $("button").hide();

    $(".listing").click(function() {
    $(".showtime").show();

//    $("listing").hide();

    });


  });

})
