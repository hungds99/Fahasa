window.onload = loginAction();

function loginAction() {
    let login_btn = document.getElementById('login-btn');
    login_btn.addEventListener('click', login);

    function login() {
        let email = document.getElementById('email');
        let password = document.getElementById('password');

        let url = 'http://localhost:8080/auth';

        let AuthRequest = {
            email: email.value,
            password: password.value
        }

        console.table(AuthRequest);

        fetch(url,{
                method: 'POST',
                body: AuthRequest
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
            

    }

}

function validateInput() {

}