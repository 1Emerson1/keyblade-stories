//The Story model
const Sequelize = require('sequelize');

const config = require('../config');
const db = require('../database')

var modelDefinition = {
    story_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    coverImage: {
        type: Sequelize.STRING,
        allowNull: true
    },
    summary: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
};

const StoryModel = db.define('Story', modelDefinition);

module.exports = StoryModel;