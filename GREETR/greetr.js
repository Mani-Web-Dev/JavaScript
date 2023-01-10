
// Greetr Library 


; (function (global, $) {

    // "new" an object
    var Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language)
    }

    // hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ["en", "es"];

    // informal greetings
    greetings = {
        en: "Hello",
        es: "Hola"
    };

    // formal greetings
    formalGreetings = {
        en: "Greetings",
        es: "Saludos"
    };

    // logger messages
    var logMessages = {
        en: "Logged in",
        es: "Iniciso sesion"
    }


    // prototype holds methods (to save memory space)
    Greetr.prototype = {

        // "this" refers to the calling object at the execution time
        fullName: function () {
            return this.firstName + " " + this.lastName
        },

        // check that is a valid language
        // references the externally inaccessible "supportedLangs" within the closure
        validate: function () {
            if (supportedLangs.indexOf(this.langauge === -1)) {
                throw "Invalid Language"
            }
        },

        // retrieve messages from object by refering to the properties using [] syntax
        greeting: function () {
            return greetings[this.langauge] + " " + this.firstName + "!";
        },
        formalGreeting: function () {
            return this.formalGreeting[this.langauge] + " " + this.fullName();
        },

        // chainable methods return their own containing object
        greet: function (formal) {
            var msg;

            // if undefined or null it will be coerced to "false"
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            if (console) {
                console.log(msg);
            }

            // "this" refers to the calling object at execution time 
            // make the method chainable;

            return this;
        },

        log: function () {
            if (console) {
                console.log(logMessages[this.langauge] + ": " + this.fullName());
            }
            //make chainable
            return this;
        },

        setLang: function (lang) {

            // se the language
            this.language = lang


            // validate
            this.validate();

            return this;
        },

        HTMLGreeting: function (selector, formal) {
            if (!$) {
                throw "jQuery not loaded"
            }
            if (!selector) {
                throw "Missing jQuery selector";
            }

            // determine the message
            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            // inject the message in the chosen place in the DOM
            $(selector).html(msg);

            // make chainable
            return this;
        }
    };


    // the actual object is created here, allowing us to the "new" an object without calling "new"
    Greetr.init = function (firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";

        self.validate();
    }


    // trick borrowed form jQuery so we dont have to use the new keyword
    Greetr.init.prototype = Greetr.prototype;

    // Attach our Greetr to the global object, and provide a shorthand "$G" for ease our poor fingers
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));