// $(document).ready(function(){


  $("#button").on('click', function(event){
      event.preventDefault();
      console.log("This is a click event");
  });


  // $('#form').on('submit', function(event){
  //   event.preventDefault();
  //   var form = $(event.target);

  //   $.ajax({
  //       url: '/signup.json',
  //       type:'POST',
  //       data: form.serialize(),
  //       dataType:'JSON'
  //       success: function(response){
  //         $('html').append(response);
  //       }
  //       error: function(response){
  //           console.log("That didn't work");
  //       }
  //   });
  // });
// });