let htmlDiv = document.getElementById('app');

function welcomeView() {
    let html = '';
    
    html = `
            <div class="login">
                <div class="header">
                    <h4>Velkommen til <span><i>siste kjærlighet</i></span> 💖</h4>
                </div>
                        <label for="login">Brukernavn</label></br>
                        <input type="text" id="login" value=""/> </br>
                        <label for="password">Passord</label></br>
                        <input type="password" id="password" value=""/> </br></br>
                        <p id="errorMessage">${loginMessage}</p>
                        <div class="buttons">
                            <button onclick="checkLogin()">Logg inn</button>
                            <button>Registrer</button>
                        </div>
            </div>

           `;

    htmlDiv.innerHTML = html;
}

function mainScreenView() {
    let html = '';

    html = `
        test
    `;

}