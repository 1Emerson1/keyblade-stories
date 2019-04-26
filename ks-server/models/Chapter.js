//Chapter model
const Sequelize = require('sequelize');

const config = require('../config');
const db = require('../database')

var modelDefiniton = {
    chapterID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    chapterTitle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    chapterText: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    story_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }
};

const ChapterModel = db.define('Chapter',modelDefiniton);

module.exports = ChapterModel;