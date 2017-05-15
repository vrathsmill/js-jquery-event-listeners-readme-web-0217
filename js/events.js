//define functions here

$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()
  submitIt()

});

  function getIt(){
    $("p").on("click", function(){
      alert('Hey')
    })
  }

  function frameIt(){
    $("img").on("load", function(){
      $('img').addClass("tasty")
    })
  }

  function pressIt(){
    $("form").on("keydown", function(key){
      if(key.which==71){
        alert("you have pressed g!")
      }
    })
  }

function submitIt(){
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.")
  })
}
