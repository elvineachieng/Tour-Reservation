const acountIcon = document.querySelector('div.accounts > i');
const sidebar = document.querySelector('aside.hide-sidebar');
const signUp = document.querySelector('.sign-up');
const signUpForm = document.querySelector('.sign-up form');
const goToSignUP = document.querySelector('.hide-sidebar > :nth-child(2) a');

sendDataToDatabase();

acountIcon.addEventListener('click', () =>{
    // sidebar.classList.remove('hide-sidebar');
    // sidebar.classList.add('sidebar');
    sidebar.classList.toggle('aside-active');
})

goToSignUP.addEventListener('click', ()=>{
    signUp.classList.add('active');
    sidebar.classList.remove('aside-active');
})

function sendDataToDatabase(){
    signUpForm.addEventListener('submit', function(e){
        e.preventDefault();
        const formData = new FormData(signUpForm);

        fetch('http://localhost/TRS/PHP/signup.php', {
            method: 'POST',
            body: formData
        })
        .then(res => res.text())
        .then(res => console.log(res))



    })
}