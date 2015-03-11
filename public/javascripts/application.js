// Javascript Goes Here~
//

$(document).ready(function(){
  $('#logIn').on('click', function(event){
    event.preventDefault();

    $.ajax({
    url:'/login',
    type: 'GET',
    success: function(response){
      $("#index_page").html(response);
    },
    error: function(response){
      alert("This is an error");
    },
   });
  });

$('#signUp').on('click', function(event){
    event.preventDefault();


    $.ajax({
    url:'/signup',
    type: 'GET',
    success: function(response){
      $("#index_page").html(response);
    },
    error: function(response){
      alert("This is an error");
    },
   });
 });
});