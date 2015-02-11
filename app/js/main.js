(function (){
  'use strict'

  var FIREBASE_URL = 'https://ecb-address-book.firebaseio.com/',
      $form        = $('form'),
      $tbody       = $('#target'),
      fb           = new Firebase(FIREBASE_URL),
      userFbUrl;

  if(fb.getAuth()){
    $('.login').remove();
    $('.app').toggleClass('hidden');

    userFbUrl = FIREBASE_URL + '/users/' + fb.getAuth().uid + '/data';
    console.log(userFbUrl);
  }  
  
  /*$(function init() {*/
    $('.add-new-contact').click(createContact);

    $.get(userFbUrl + 'friends.json', function(data) {
      Object.keys(data).forEach(function(uuid){
        addRowToTable(data[uuid], uuid);
      });
    });

  /*});*/

  $('.login button').click(function (event) {
    var $loginForm = $(event.target.closest('form')),
        email      = $loginForm.find('[type="email"]').val(),
        pass       = $loginForm.find('[type="password"]').val(),
        data       = $loginForm.find('[type="email"]').val();
    
  })

  function createContact() {

      $('.hidden').toggleClass('hidden');
     
      $('.new-contact-form').append('<input type="text" name="firstname" placeholder="First Name">' + 
          '<input type="text" name="lastname" placeholder="Last Name">' +
          '<input type="text" name="phone" placeholder="555-555-5555">' +
          '<input type="text" name="email" placeholder="YourName@YourDomain.com">' +
          '<input type="text" name="twitter" placeholder="@Twitter">' +
          '<input type="text" name="imgUrl" placeholder="Image URL">' +
          '<button id="submitButton">Submit</button>'
          );
  }

  $form.submit(function (event) {
    event.preventDefault();

    var $firstName = $('input[name="firstname"]').val(),
        $lastName  = $('input[name="lastname"]').val(),
        $phone     = $('input[name="phone"]').val(),
        $email     = $('input[name="email"]').val(),
        $twitter   = $('input[name="twitter"]').val(),
        $imgUrl   = $('input[name="imgUrl"]').val();

    var userData = {
      "first" : $firstName,
      "last" : $lastName,
      "phone" : $phone,
      "email" : $email,
      "twitter" : $twitter,
      "imgUrl" : $imgUrl
    };
    
    var $tr = $('<tr><td>' + $firstName + '</td><td>' + $lastName + '</td><td>' + $phone + '</td><td>' + $email + '</td><td>' + $twitter + '</td><td><img src="' + $imgUrl + '"></td><td><button class="remove">Remove</button></td></tr>');
    
    var url = FIREBASE_URL + 'friends.json',
    jsonData = JSON.stringify(userData);
    $.post(url, jsonData, function(data){
      $tbody.append($tr);
    });

    $('input').val('');
    $('.new-contact-form' ).toggleClass('hidden');
  });

  function addRowToTable(data, uuid){
      var $tr = $('<tr><td>' + data.first + '</td><td>' + data.last + '</td><td>' + data.phone + '</td><td>' + data.email + '</td><td>' + data.twitter + '</td><td><img src="' + data.imgUrl + '"></td><td><button class="remove">Remove</button></td></tr>');
      $tr.attr("data-uuid", uuid)
      $tbody.append($tr);
  };

//delete button 

  $('tbody').on('click', '.remove', function(event){
  
    var $tr = $(event.target).closest('tr');
    $tr.remove();

    var uuid = $tr.data('uuid');
    var url = FIREBASE_URL + 'friends/' + uuid + '.json';
    $.ajax(url, {type: 'DELETE'});
    
  });
  
})();  