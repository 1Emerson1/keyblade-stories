const db = require('../database');
const Chapter = require('../models/Chapter');

const ChapterController = {};

//Store Chapter
ChapterController.createChapter = (req, res) => {
    if(!req.body.chapterTitle || !req.body.editor){
        res.json({
            message: 'Please provide a title and content for the chapter.',
        });
    } else{
        db.sync().then(() => {
            const newChapter = {
                chapterTitle: req.body.chapterTitle,
                chapterText: req.body.editor
            };

            return Chapter.createChapter(newChapter).then(() =>{
                res.status(201).json({
                    message: 'Chapter created!',
                });
            });
        }).catch((error) => {
            res.status(403).json({
                mesage: error,
            });
        });
    }
};

ChapterController.retrieveChapters = (req, res) => {
    Chapter.findAll({
        where: {story_id: req.params.story_id},
        attributes: ['chapterID','chapterTitle'],
        order: ['chapterID']
    })
        .then((chapters) => {
            res.json(chapters);
        }).catch((error) => {
            res.json(error);
        });
}


ChapterController.getChapterById = (req, res) => {
    Chapter.findOne({
        where : [{story_id: req.params.story_id},{chapterID: req.params.chapterID}],
        attributes: ['chapterTitle', 'chapterText']
    }).then((chapters) => {
        res.json(chapters);
    }).catch((error) =>{
        res.json(error);
    });
}

module.exports = ChapterController;

