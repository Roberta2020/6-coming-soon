class Validator {
    static isValidName(name) {
        //turi buti ne tuscias tekstas
        const notEmptyString = Validator.notEmptyString(name);
        if(notEmptyString !== true) return notEmptyString;
 
        //tik abeceles raides
        const onlyAlphabet = Validator.onlyAlphabet(name);
        if(onlyAlphabet !== true) return onlyAlphabet;

        //tik pirma raide didzioji
        const onlyFirstLetterUppercase = Validator.onlyFirstLetterUppercase(name);
        if(onlyFirstLetterUppercase !== true) return onlyFirstLetterUppercase;

        return true;
    }

    static isValidEmail(email) {
        //turi buti ne tuscias tekstas
        const b = Validator.notEmptyString(email);
        if(b !== true) {
            return b;
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
        if(typeof message === '') {
            return 'Turi buti ne tuscias tekstas.'
        }
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



    static onlyAlphabet(text) {
        return true;
    }
    static onlyFirstLetterUppercase(text) {
        // aaBasaa -> aabasaa -> Aabasaa false
        // aaaaaBa -> aaaaaba -> Aaaaaba false
        // Baaaaaa -> baaaaaa -> Baaaaaa true

        //1) visas raides konvertuoti i mazasias
        //2) pirmaja raide paverciame didziaja
        //3) palyginame ka gavome su input

        //1. 
        let lower = text.toLowerCase();
        //2.
        let convert = lower[0].toUpperCase() + lower.slice(1);
        //3.
        if(text !== convert) {
            return 'Pirmasis simbolis turi buti didzioji raide, o visi kiti mazosios.';
        }

        return true;
    }

}

export { Validator }


