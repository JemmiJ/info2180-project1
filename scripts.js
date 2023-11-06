/* Add your JavaScript to this file */
const inputtext = document.getElementById('email');
const msg = document.getElementsByClassName('message')
const submit = document.getElementsByClassName('btn');

submit.addEventListener('click', evt=>{
    if(inputtext){
        msg.innerHTML = 'Thank you your email address ' + value+ ' has been added to our mailing list';
        msg.classList.add("emailentered");
    }
    else{
        msg.innerHTML = 'Please enter a valid email address';
        msg.classList.add("noemail");
    }
})