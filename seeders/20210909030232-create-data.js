'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {

    let marcas = [
      { id: 1, nombre: "TLC", created_at: new Date, updated_at: new Date },
      { id: 2, nombre: "Samsung", created_at: new Date, updated_at: new Date },
      { id: 3, nombre: "Phillips", created_at: new Date, updated_at: new Date },
      { id: 4, nombre: "Kent", created_at: new Date, updated_at: new Date },
    ];

    let modelos = [
      { id: 1, nombre: "TLC T1", marca_id: 1, created_at: new Date, updated_at: new Date },
      { id: 2, nombre: "Samsung M1", marca_id: 2, created_at: new Date, updated_at: new Date },
      { id: 3, nombre: "Phillips P1", marca_id: 3, created_at: new Date, updated_at: new Date },
      { id: 4, nombre: "Kent K1", marca_id: 4, created_at: new Date, updated_at: new Date },
      { id: 5, nombre: "TLC Mx", marca_id: 1, created_at: new Date, updated_at: new Date },


    ];

    let televisores = [
      { smart: 1, precio: 60000, pantalla: "55", marca_id: 1, modelo_id: 5, created_at: new Date, updated_at: new Date },
    ];

    await queryInterface.bulkInsert('marcas', marcas, {})
    await queryInterface.bulkInsert('modelos', modelos, {})
    await queryInterface.bulkInsert('televisores', televisores, {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('televisores', null, {});
    await queryInterface.bulkDelete('modelos', null, {});
    await queryInterface.bulkDelete('marcas', null, {});


  }
};
