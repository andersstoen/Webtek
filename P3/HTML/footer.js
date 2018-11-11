var footer = '<div class="footer">';
footer += '<div id="quoted-display">';
footer += '</div>';
footer += '<div class="links">';
footer += '<h4>Work</h4>';
footer += '<h4>About</h4>';
footer += '<h4>Contact us</h4>';
footer += '</div>';
footer += '<div class="social_icons">';
footer += '<a href="#" class="fa fa-facebook"></a>';
footer += '<a href="#" class="fa fa-twitter"></a>';
footer += '<a href="#" class="fa fa-instagram"></a>';
footer += '</div>';
footer += '<div class="subscription-form">';
footer += '<p id="text_form">Hold deg oppdatert</p>';
footer += '<form id="form">';
footer += '<input type="email" id="input-field" placeholder="Email" required>';
footer += '<input type="submit" id="send_button" value="Send">';
footer += '</form>';
footer += '</div>';
footer += '</div>';


document.getElementById('footercontainer').innerHTML = footer;


var quotes = ["kjøttfløya mi e det som binde oss sammen - Bao", "Jeg tenker fremdeles på ubeskrivelig ensomhet - Christer ", "Caspar har begynt å kalle meg mamma - Live", "Føler jeg er mer redd for bananer enn pistoler - Rannveig"]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoted-display").innerHTML = quotes[randomNumber];

    console.log(newQuote())

}
window.onload = newQuote;


var form = document.getElementById("form");
form.addEventListener("submit", function (event) { /*Gjør at siden ikke oppdatteres ved trykk av knapp*/
    event.preventDefault();
    document.getElementById("send_button").value = "Tusen takk!";
});
