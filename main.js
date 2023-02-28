import { getFormData } from "./modules/formhandler.js";
import { createTamagotchi } from "./modules/tamagotchi.js";
import { displayTamagotchi } from "./modules/display.js";

// Globala variabler

const nameInput = document.getElementById('name-input');
const typeInput = document.getElementById('type-input');
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();

    if (nameInput.value != undefined && nameInput.value != '' && nameInput.value != 'none' && typeInput.value != undefined && typeInput.value != '' && typeInput.value != 'none') {

        const inputObject = getFormData(form);
        const newTamagotchi = createTamagotchi(inputObject);
        displayTamagotchi(newTamagotchi);

    }

    else {
        alert('Name and type is required');
    }
})