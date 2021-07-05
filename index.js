const btnCapture = document.querySelector('.btn');

const user = document.getElementById('user-input');
const password = document.getElementById('password-input');
const email = document.getElementById('email-input');

user.addEventListener('change', function (e) {
    const userName = e.target.value;
    if (userName.length == 0) {
        document.getElementById('nameRequired').innerHTML =
            'Username is Required';
    } else {
        document.getElementById('nameRequired').innerHTML = '';
    }
});

password.addEventListener('change', function (e) {
    const password = e.target.value;
    if (password.length == 0) {
        document.getElementById('passwordRequired').innerHTML =
            'Password is Required';
    } else {
        document.getElementById('passwordRequired').innerHTML = '';
    }
});

email.addEventListener('change', function (e) {
    const email = e.target.value;
    if (email.length == 0) {
        document.getElementById('emailRequired').innerHTML =
            'Email is Required';
    } else {
        document.getElementById('emailRequired').innerHTML = '';
    }
});

// btnCapture.addEventListener('click', function (event) {
//     userDetail = {};
//     event.preventDefault();
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
