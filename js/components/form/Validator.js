class Validator {
    static isValidName(name) {
        //turi buti ne tuscias tekstas
        //tik abeceles raides
        //pirma raide didzioji
        console.log('validuojame name:', name);
        return true;
    }

    static isValidEmail(email) {
        //turi buti ne tuscias tekstas
        if() {
            
        }
        //ne trumpesnis nei 6 simboliai
        // tik 1 @ simboolis
        // pries @ turi buti ne maziau 1 simbolis
        // uz @ turi buti ne maziau 5 simboliai
        // apart @ gali buti tik: raides, skaiciai, taskas, minusas, underscore
        // domeno dalyje tik 1 taskas
        // lokalioj daly negali eiti keli [taskai, minusai, underscore] is eiles
        console.log('validuojame email:', email);
        return true;
    }
    static isValidMessage(message) {
        //turi buti ne tuscias tekstas
        //nevirsyti 1000 simboliu
        console.log('validuojame message:', message);
        return true;
    }

    static notEmptyString(text) {
        if(typeof text !== 'string') {
            return 'Turi buti tekstas.';
        }
        if(text === '') {
            return 'Turi buti ne tuscias tekstas.'
        }
        return true;
    }
}

export { Validator }