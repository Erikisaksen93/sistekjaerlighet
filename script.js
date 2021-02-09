let htmlDiv = document.getElementById('app');

function welcomeView() {
    let html = '';
    
    html = `<div class="main">
                <div class="header">
                    <h4>Velkommen til <span><i>siste kjærlighet</i></span> 💖</h4>
                </div>
                <div class="login">
                    <form id="loginForm">
                        <label for="login">Brukernavn</label></br>
                        <input type="text" id="login" value=""/> </br>
                        <label for="password">Passord</label></br>
                        <input type="password" id="password" value=""/> </br></br>
                        <button class="buttons">Logg inn</button>
                    </form>
                </div>
            </div>

           `;

    htmlDiv.innerHTML += html;
}