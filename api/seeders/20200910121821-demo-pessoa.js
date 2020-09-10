'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Pessoas', [
          {
            nome: 'Ana Souza',
            ativo: true,
            email: 'ana@ana.com',
            role: 'estudante',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            nome: 'Marcos Cintra',
            ativo: true,
            email: 'marcos@marcos.com',
            role: 'estudante',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            nome: 'Aline Faria',
            ativo: true,
            email: 'aline@aline.com',
            role: 'estudante',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            nome: 'Eduarda Bombonato',
            ativo: true,
            email: 'duda@duda.com',
            role: 'docente',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            nome: 'Matheus Lima',
            ativo: true,
            email: 'matheus@matheus.com',
            role: 'estudante',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            nome: 'Carla Maria',
            ativo: true,
            email: 'carlam@carlam.com',
            role: 'docente',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            nome: 'Vitoria silva',
            ativo: true,
            email: 'vitoria@vitoria.com',
            role: 'estudante',
            createdAt: new Date(),
            updatedAt: new Date()
          },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('Pessoas', null, {});
     
  }
};
