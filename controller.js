let loginMessage = '';


function getLoginDetails() {

}


function checkLogin() {
    const username = document.getElementById('login');
    const password = document.getElementById('password');

    for (let i = 0; i < model.users.length; i++) {
        if (username.value == model.users[i].username && password.value == model.users[i].password) {
            mainScreenView();
        } else {
            loginMessage = 'Feil brukernavn/passord';
            welcomeView();
        }
    }
}