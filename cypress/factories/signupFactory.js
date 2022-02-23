

var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {

            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '48999999999',
            address: {
                postalcode: '88052100',
                street: 'Rua Intendente Antônio Damasco',
                number: '4359',
                details: 'casa',
                district: 'Ratones',
                city_state: 'Florianópolis/SC'
            },

            delivery_method: 'Van/Carro',
            cnh: '/images/cnh-digital.jpg'
        }

        return data
    }


}