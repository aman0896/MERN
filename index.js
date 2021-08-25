// console.log('gg');
// const btnCapture = document.querySelector('.btn');
// const playSound = new Audio('/saathiya04(www.songs.pk).mp3');

// btnCapture.addEventListener('click', function (event) {
//     userDetail = {};
//     event.preventDefault();

//     playSound.play();

//     const userName = document.getElementById('user-input').value;
//     const password = document.getElementById('password-input').value;
//     const email = document.getElementById('email-input').value;
//     userDetail.userName = userName;
//     userDetail.password = password;
//     userDetail.email = email;
//     if (userName.length == 0) {
//         document.getElementById('nameRequired').innerHTML =
//             'Username is Required';
//     } else {
//         document.getElementById('nameRequired').innerHTML = '';
//     }
//     if (password.length == 0) {
//         document.getElementById('passwordRequired').innerHTML =
//             'Password is Required';
//     } else {
//         document.getElementById('passwordRequired').innerHTML = '';
//     }
//     if (email.length == 0) {
//         document.getElementById('emailRequired').innerHTML =
//             'Email is Required';
//     } else {
//         document.getElementById('emailRequired').innerHTML = '';
//     }
// });

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array = array1.concat(array2);
console.log(array);

const button = document.querySelectorAll('#piano-btn');
console.log(button);

const PlaySound = (btn) => {
    if (btn) {
        console.log(btn);
        btn.addEventListener('click', () => {
            const innerText = btn.innerText;
            switch (innerText) {
                case 'a': {
                    const playSound = new Audio('./piano_sound/a.mp3');
                    playSound.play();
                    break;
                }
                case 'b': {
                    const playSound = new Audio('./piano_sound/b.mp3');
                    playSound.play();
                    break;
                }
                case 'c': {
                    const playSound = new Audio('./piano_sound/c.mp3');
                    playSound.play();
                    break;
                }
                case 'd': {
                    const playSound = new Audio('./piano_sound/d.mp3');
                    playSound.play();
                    break;
                }
                case 'e': {
                    const playSound = new Audio('./piano_sound/e.mp3');
                    playSound.play();
                    break;
                }
                case 'f': {
                    const playSound = new Audio('./piano_sound/f.mp3');
                    playSound.play();
                    break;
                }
                case 'g': {
                    const playSound = new Audio('./piano_sound/g.wav');
                    playSound.play();
                    break;
                }
                case 'h': {
                    const playSound = new Audio('./piano_sound/h.wav');
                    playSound.play();
                    break;
                }
                case 'i': {
                    const playSound = new Audio('./piano_sound/i.wav');
                    playSound.play();
                    break;
                }
                case 'j': {
                    const playSound = new Audio('./piano_sound/j.wav');
                    playSound.play();
                    break;
                }
                case 'k': {
                    const playSound = new Audio('./piano_sound/k.wav');
                    playSound.play();
                    break;
                }
            }
        });
    }
};
for (i = 0; i <= button.length; i++) {
    PlaySound(button[i]);
}
