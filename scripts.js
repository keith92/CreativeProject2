$(document).ready(function() {
  $("#searchButton").click(function(e){
    var num = $("#searchNumber").val();
    var myurl = "http://pokeapi.co/api/v2/pokemon/";
    myurl += num;
    $.getJSON(myurl,function(data) {
      console.log(data);
    });
  });
});
