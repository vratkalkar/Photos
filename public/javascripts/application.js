// Javascript Goes Here~
//

$(document).ready(function(){

  $('#logIn').on('click', function(event){
    event.preventDefault();
    Login.show();

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

$('#logInForm').on('submit', function(event){
    event.preventDefault();
    var target = $(event.target);
    console.log(target);

    $.ajax({
    url:'/login.json',
    data: target.serialize(),
    dataType: 'JSON',
    type: 'POST',
    success: function(response){
      window.location.replace(response.url);
    },
    error: function(response){
      alert(response);
    },
   });
 });

  // $("#getPhotos").on('click', function(event){
  //   event.preventDefault();
  //   $.ajax({
  //     url:'/photos/all.json',
  //     type: 'GET',
  //     success: function(response){
  //       console.log(response);
  //       var photos = [];

  //       for(var i in response){
  //         photos.push( new Photo(i.name, i.photo_url));
  //       }
  //       console.log(photos);
// });
  //       for(var j in photos){
  //         $('#allPhotos').append("<img src='" +j.photo_url+ "'/>");
  //       }
  //     },
  //     error: function(response){
  //       alert(response);
  //     },
  //   });
  });

  function Photo(name,photo_url){
    this.name = name;
    this.photo_url = photo_url;
 }
});
