const Sequelize = require('sequelize');
const db = require('../_db');

const World = db.define('world', {
  name: {
    type: Sequelize.STRING,
    unique: true,
  },
  destroyedAt: {
    type: Sequelize.DATE,
    field: 'destroyed_at'
  }
},
{
});

module.exports = World;