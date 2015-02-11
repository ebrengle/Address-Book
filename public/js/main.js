(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uICgpe1xuICAndXNlIHN0cmljdCdcblxuICB2YXIgRklSRUJBU0VfVVJMID0gJ2h0dHBzOi8vZWNiLWFkZHJlc3MtYm9vay5maXJlYmFzZWlvLmNvbS8nLFxuICAgICAgJGZvcm0gICAgICAgID0gJCgnZm9ybScpLFxuICAgICAgJHRib2R5ICAgICAgID0gJCgnI3RhcmdldCcpLFxuICAgICAgZmIgICAgICAgICAgID0gbmV3IEZpcmViYXNlKEZJUkVCQVNFX1VSTCksXG4gICAgICB1c2VyRmJVcmw7XG5cbiAgaWYoZmIuZ2V0QXV0aCgpKXtcbiAgICAkKCcubG9naW4nKS5yZW1vdmUoKTtcbiAgICAkKCcuYXBwJykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xuXG4gICAgdXNlckZiVXJsID0gRklSRUJBU0VfVVJMICsgJy91c2Vycy8nICsgZmIuZ2V0QXV0aCgpLnVpZCArICcvZGF0YSc7XG4gICAgY29uc29sZS5sb2codXNlckZiVXJsKTtcbiAgfSAgXG4gIFxuICAvKiQoZnVuY3Rpb24gaW5pdCgpIHsqL1xuICAgICQoJy5hZGQtbmV3LWNvbnRhY3QnKS5jbGljayhjcmVhdGVDb250YWN0KTtcblxuICAgICQuZ2V0KHVzZXJGYlVybCArICdmcmllbmRzLmpzb24nLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uKHV1aWQpe1xuICAgICAgICBhZGRSb3dUb1RhYmxlKGRhdGFbdXVpZF0sIHV1aWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgLyp9KTsqL1xuXG4gICQoJy5sb2dpbiBidXR0b24nKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgJGxvZ2luRm9ybSA9ICQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2Zvcm0nKSksXG4gICAgICAgIGVtYWlsICAgICAgPSAkbG9naW5Gb3JtLmZpbmQoJ1t0eXBlPVwiZW1haWxcIl0nKS52YWwoKSxcbiAgICAgICAgcGFzcyAgICAgICA9ICRsb2dpbkZvcm0uZmluZCgnW3R5cGU9XCJwYXNzd29yZFwiXScpLnZhbCgpLFxuICAgICAgICBkYXRhICAgICAgID0gJGxvZ2luRm9ybS5maW5kKCdbdHlwZT1cImVtYWlsXCJdJykudmFsKCk7XG4gICAgXG4gIH0pXG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcblxuICAgICAgJCgnLmhpZGRlbicpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgXG4gICAgICAkKCcubmV3LWNvbnRhY3QtZm9ybScpLmFwcGVuZCgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0bmFtZVwiIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiPicgKyBcbiAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImxhc3RuYW1lXCIgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIj4nICtcbiAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBob25lXCIgcGxhY2Vob2xkZXI9XCI1NTUtNTU1LTU1NTVcIj4nICtcbiAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJZb3VyTmFtZUBZb3VyRG9tYWluLmNvbVwiPicgK1xuICAgICAgICAgICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidHdpdHRlclwiIHBsYWNlaG9sZGVyPVwiQFR3aXR0ZXJcIj4nICtcbiAgICAgICAgICAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImltZ1VybFwiIHBsYWNlaG9sZGVyPVwiSW1hZ2UgVVJMXCI+JyArXG4gICAgICAgICAgJzxidXR0b24gaWQ9XCJzdWJtaXRCdXR0b25cIj5TdWJtaXQ8L2J1dHRvbj4nXG4gICAgICAgICAgKTtcbiAgfVxuXG4gICRmb3JtLnN1Ym1pdChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyICRmaXJzdE5hbWUgPSAkKCdpbnB1dFtuYW1lPVwiZmlyc3RuYW1lXCJdJykudmFsKCksXG4gICAgICAgICRsYXN0TmFtZSAgPSAkKCdpbnB1dFtuYW1lPVwibGFzdG5hbWVcIl0nKS52YWwoKSxcbiAgICAgICAgJHBob25lICAgICA9ICQoJ2lucHV0W25hbWU9XCJwaG9uZVwiXScpLnZhbCgpLFxuICAgICAgICAkZW1haWwgICAgID0gJCgnaW5wdXRbbmFtZT1cImVtYWlsXCJdJykudmFsKCksXG4gICAgICAgICR0d2l0dGVyICAgPSAkKCdpbnB1dFtuYW1lPVwidHdpdHRlclwiXScpLnZhbCgpLFxuICAgICAgICAkaW1nVXJsICAgPSAkKCdpbnB1dFtuYW1lPVwiaW1nVXJsXCJdJykudmFsKCk7XG5cbiAgICB2YXIgdXNlckRhdGEgPSB7XG4gICAgICBcImZpcnN0XCIgOiAkZmlyc3ROYW1lLFxuICAgICAgXCJsYXN0XCIgOiAkbGFzdE5hbWUsXG4gICAgICBcInBob25lXCIgOiAkcGhvbmUsXG4gICAgICBcImVtYWlsXCIgOiAkZW1haWwsXG4gICAgICBcInR3aXR0ZXJcIiA6ICR0d2l0dGVyLFxuICAgICAgXCJpbWdVcmxcIiA6ICRpbWdVcmxcbiAgICB9O1xuICAgIFxuICAgIHZhciAkdHIgPSAkKCc8dHI+PHRkPicgKyAkZmlyc3ROYW1lICsgJzwvdGQ+PHRkPicgKyAkbGFzdE5hbWUgKyAnPC90ZD48dGQ+JyArICRwaG9uZSArICc8L3RkPjx0ZD4nICsgJGVtYWlsICsgJzwvdGQ+PHRkPicgKyAkdHdpdHRlciArICc8L3RkPjx0ZD48aW1nIHNyYz1cIicgKyAkaW1nVXJsICsgJ1wiPjwvdGQ+PHRkPjxidXR0b24gY2xhc3M9XCJyZW1vdmVcIj5SZW1vdmU8L2J1dHRvbj48L3RkPjwvdHI+Jyk7XG4gICAgXG4gICAgdmFyIHVybCA9IEZJUkVCQVNFX1VSTCArICdmcmllbmRzLmpzb24nLFxuICAgIGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpO1xuICAgICQucG9zdCh1cmwsIGpzb25EYXRhLCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICR0Ym9keS5hcHBlbmQoJHRyKTtcbiAgICB9KTtcblxuICAgICQoJ2lucHV0JykudmFsKCcnKTtcbiAgICAkKCcubmV3LWNvbnRhY3QtZm9ybScgKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGFkZFJvd1RvVGFibGUoZGF0YSwgdXVpZCl7XG4gICAgICB2YXIgJHRyID0gJCgnPHRyPjx0ZD4nICsgZGF0YS5maXJzdCArICc8L3RkPjx0ZD4nICsgZGF0YS5sYXN0ICsgJzwvdGQ+PHRkPicgKyBkYXRhLnBob25lICsgJzwvdGQ+PHRkPicgKyBkYXRhLmVtYWlsICsgJzwvdGQ+PHRkPicgKyBkYXRhLnR3aXR0ZXIgKyAnPC90ZD48dGQ+PGltZyBzcmM9XCInICsgZGF0YS5pbWdVcmwgKyAnXCI+PC90ZD48dGQ+PGJ1dHRvbiBjbGFzcz1cInJlbW92ZVwiPlJlbW92ZTwvYnV0dG9uPjwvdGQ+PC90cj4nKTtcbiAgICAgICR0ci5hdHRyKFwiZGF0YS11dWlkXCIsIHV1aWQpXG4gICAgICAkdGJvZHkuYXBwZW5kKCR0cik7XG4gIH07XG5cbi8vZGVsZXRlIGJ1dHRvbiBcblxuICAkKCd0Ym9keScpLm9uKCdjbGljaycsICcucmVtb3ZlJywgZnVuY3Rpb24oZXZlbnQpe1xuICBcbiAgICB2YXIgJHRyID0gJChldmVudC50YXJnZXQpLmNsb3Nlc3QoJ3RyJyk7XG4gICAgJHRyLnJlbW92ZSgpO1xuXG4gICAgdmFyIHV1aWQgPSAkdHIuZGF0YSgndXVpZCcpO1xuICAgIHZhciB1cmwgPSBGSVJFQkFTRV9VUkwgKyAnZnJpZW5kcy8nICsgdXVpZCArICcuanNvbic7XG4gICAgJC5hamF4KHVybCwge3R5cGU6ICdERUxFVEUnfSk7XG4gICAgXG4gIH0pO1xuICBcbn0pKCk7ICAiXX0=
