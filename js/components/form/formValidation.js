/**
 * -Rasti visus validuotinus elementus 
 *     -kiekvienam ju iskviesti Validator
 *      -gauti ats
 * 
 */

import { Validator } from "./Validator.js";

function formValidation () {
    const forms = document.querySelectorAll('form.form');
  
    for (let form of forms) {
        const validables = form.querySelectorAll('[data-validation]');
        const submit = form.querySelector('button[type="submit"]');
        
        
        submit.addEventListener('click', event => {
            event.preventDefault();
            const validationResults = [];
 
            for (let input of validables) {
                const rule = input.dataset.validation;
                const text = input.value;
                let results = null;
                if(rule === 'name') {
                   results = Validator.isValidName(text);
                }
                if(rule === 'email') {
                    results = Validator.isValidEmail(text);
                }
                if(rule === 'message') {
                    results = Validator.isValidMessage(text);
                }
                validationResults.push(results);
            }
            console.log(validationResults);
        })
    
    }
}

export { formValidation }

