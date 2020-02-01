document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      // do this
      var long = document.querySelectorAll("h1.price").length;

      for (var i = 0; i < long; i++) {
        document.getElementsByClassName("price")[i].classList.add("invisible");
        document.getElementsByClassName("monthly")[i].classList.remove("invisible");
      }

      // console.log('Checked');
    } else {
      // do that'

      var long = document.querySelectorAll("h1.price").length;


      for (var i = 0; i < long; i++) {
        document.getElementsByClassName("price")[i].classList.remove("invisible");
        document.getElementsByClassName("monthly")[i].classList.add("invisible");
        // console.log('Not checked');
      }
    }
  });
});
