"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Todos",
      [
        {
          title: "todo 1",
          description: "submit aplikasi beasiswa",
          startTime: new Date(),
          status: "false",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "todo 1",
          description: "submit aplikasi beasiswa",
          startTime: new Date(),
          status: "false",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "todo 1",
          description: "pre-test MySQL dasar",
          startTime: new Date(),
          status: "false",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Todos", null, {});
  },
};
