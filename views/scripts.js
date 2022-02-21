const quote1 = `<div class="row align-items-center justify-content-center" id="quote1">
                  <div class="row justify-content-around">
                    <div class="col-sm-2">
                      <img src="images/chevy-corvette.jpg" width="200" height="200" alt="slide">
                    </div>
                    <div class="col-sm-6 ml-3 mr-3 float-left text-white" id="testimonial1">
                    <p>Make: Chevrolet</p>
                    <p>Model: Corvette Z06</p>
                    <p>Year: 2021</p>
                    <p>Color: Orange</p>
                    <p>VIN: 1G1YK2DE0B5109717</p>
                    </div>
                  </div>
                </div>`;

const quote2 = `<div class="row align-items-center justify-content-center" id="quote2">
                  <div class="row justify-content-around">
                    <div class="col-sm-2">
                    <img src="images/car-4.jpg" width="220" height="220" alt="slide">
                    </div>
                    <div class="col-sm-6 ml-3 mr-3 float-left text-white" id="testimonial1">
                    <p>Make: Mercedes</p>
                    <p>Model: AMG GT Coupes</p>
                    <p>Year: 2021</p>
                    <p>Color: Silver</p>
                    <p>VIN: 2H4FY2DE0B5109717</p>
                    </div>
                  </div>
                </div>`;

$(document).ready(function () {
  loadQuotes();
  var fiveMinutes = 60 * 5,
  display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
  $('#bookIt').click(() => {
    sessionStorage.setItem($('#custName').val(), $('#bookItDate').val());
  })
})

function loadQuotes() {
  $('.single-item').append(quote1);
  $('.single-item').append(quote2);
  $('.single-item').slick();
}