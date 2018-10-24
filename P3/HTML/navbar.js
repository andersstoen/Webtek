var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.type = 'text/css';
link.href = 'navbar.css';
document.head.appendChild(link);

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
