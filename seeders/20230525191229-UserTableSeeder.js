"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "Monika",
          password: "rahasia1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Angelia",
          password: "rahasia1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Annelis",
          password: "rahasia1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Mellema",
          password: "rahasia1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Hannah",
          password: "rahasia1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
