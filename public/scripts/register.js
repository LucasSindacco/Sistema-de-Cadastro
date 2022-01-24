const buttonRegister = document.querySelector('#buttonRegister');
const inputsRegister = document.querySelectorAll('#inputsRegister');
const modalError = document.querySelector('.modal-error');
const modalErorText = document.querySelector('.modal-error > h1');

// Local Storages
const userNames = JSON.parse(localStorage.getItem('names')) || [];
const userEmails = JSON.parse(localStorage.getItem('email')) || [];
const password = JSON.parse(localStorage.getItem('password')) || [];

// Function Register
const register = () => {
    if (inputsRegister[2].value === inputsRegister[3].value) {
        // Verify Null Inputs
        var acceptLogin;
        for (let i = 0; i < 4; i++) {
            if (inputsRegister[i].value === "") {
                acceptLogin = true;
            }
        }
        if (acceptLogin === true) {
            errorFunction(modalError);
            modalErorText.textContent = 'Preencha todos os campos!';
        } else {
            // Verify Email Registred   
            if (userEmails.indexOf(inputsRegister[1].value) !== -1) {
                errorFunction(modalError);
                modalErorText.textContent = 'Este email já está cadastrado';
            } else {
                alert('Conta criada com sucesso!');
                // Push Values in Array
                userEmails.push(inputsRegister[1].value);
                userNames.push(inputsRegister[0].value);
                password.push(inputsRegister[2].value);
            }
            localStorage.setItem('names', JSON.stringify(userNames));
            localStorage.setItem('email', JSON.stringify(userEmails));
            localStorage.setItem('password', JSON.stringify(password));
            // Local Storage Set Item
        }
    } else {
        alert('As senhas não coincidem');
    }
}

const errorFunction = (error) =>{    
    error.style.transition = "ease-in-out .3s";
    error.style.left = "40px";
    setInterval(() => {
        error.style.transition = "ease-in-out .3s";
        error.style.left = "-30rem";
    }, 2000);
}

buttonRegister.addEventListener('click', register);





//

//#html #javascript #developer #frontenddev #csstricks #csstips #dicas #ui #tecnologia #frontendengineer #desenvolvedorfront #desenvolvimentoweb #frontend #programação #programadores #programador




//