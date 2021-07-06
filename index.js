console.log('gg');
const btnCapture = document.querySelector('.btn');
const playSound = new Audio('/saathiya04(www.songs.pk).mp3');

btnCapture.addEventListener('click', function (event) {
    userDetail = {};
    event.preventDefault();

    playSound.play();

    const userName = document.getElementById('user-input').value;
    const password = document.getElementById('password-input').value;
    const email = document.getElementById('email-input').value;
    userDetail.userName = userName;
    userDetail.password = password;
    userDetail.email = email;
    if (userName.length == 0) {
        document.getElementById('nameRequired').innerHTML =
            'Username is Required';
    } else {
        document.getElementById('nameRequired').innerHTML = '';
    }
    if (password.length == 0) {
        document.getElementById('passwordRequired').innerHTML =
            'Password is Required';
    } else {
        document.getElementById('passwordRequired').innerHTML = '';
    }
    if (email.length == 0) {
        document.getElementById('emailRequired').innerHTML =
            'Email is Required';
    } else {
        document.getElementById('emailRequired').innerHTML = '';
    }
});

const stopButton = document.getElementById('stop-button');

stopButton.addEventListener('click', () => {
    playSound.pause();
    playSound.currentTime = 0;
});
