import { manageUser } from "/JS/fireScript.js";

const signoutButton = document.getElementById('signoutbutton');

signoutButton.addEventListener('click', () => {
    manageUser('LOGOUT').then(() => {
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error(error);
    });
});