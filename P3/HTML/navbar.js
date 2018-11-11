//var link = document.createElement('link');
//link.setAttribute('rel', 'stylesheet');
//link.type = 'text/css';
//link.href = 'navbar.css';
//document.head.appendChild(link);

var navigationbar = '<header id="navbar">';
navigationbar += '<img src="imgs/theSignLogo.jpg" alt="thesign" id="TheSign">';
navigationbar += '<div id="nav">';
navigationbar += '<ul>';
navigationbar += '<li><a href="index.html">Work</a></li>';
navigationbar += '<li><a href="about.html">About</a></li>';
navigationbar += '<li><a href="contact.html">Contact</a></li>';
navigationbar += '</ul>';
navigationbar += '</div>';
navigationbar += '</header>';

document.getElementById('navbarcontainer').innerHTML = navigationbar;




/*<header id="navbar">
        <img src="HTML/imgs/theSignLogo.jpg" alt="thesign" id="TheSign">
        <div id="nav">
            <ul>
                <li><a href="HTML/index.html">Work</a></li>
                <li><a href="HTML/about.html">About</a></li>
                <li><a href="HTML/contact.html">Contact</a></li>
            </ul>
        </div>
    </header>*/

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
