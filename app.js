//require('./greet.');

let greet = require('./greet');
greet();

let obj = {};

let persona = {
    nombre: "carlos",
    apellido: "Ulibarri",
    getName: function() {
        return `${this.nombre} ${this.apellido}`

    },
    domicilio: {
        calle: "Madero #144",
        colonia: "centro",
        cp: 2800,
        municipio: "colima"

    },
    getAddress: function() { return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP:  ${this.domicilio.cp},${this.domicilio.municipio} ` }

}
console.log(persona.domicilio);




console.log(persona.getAddress())