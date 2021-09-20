'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: "Ent.",
        lastName: "CapBloc",
        login: "entcapbloc",
        password: "library2021@",
        nbrDamagedBooks: 0,
        nbrBorrowedBooks: 0
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => { }
};
