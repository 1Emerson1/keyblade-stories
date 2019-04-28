const db = require('../database');
const Chapter = require('../models/Chapter');
const Story = require('../models/Story');

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
                story_id: req.body.story_id,
                chapterTitle: req.body.chapterTitle,
                chapterText: req.body.editor
            };
            
            console.log(req.body.story_id)
            Story.findOne({
                where: {story_id: req.body.story_id},
            }).then((story) => {
                if(story != null) {
                    return Chapter.create(newChapter).then(() =>{
                        res.status(201).json({
                            message: 'Chapter created!',
                        });
                    });
                } else {
                    res.status(404).json({
                        message: 'Story not found!',
                    });
                }
            })
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
        attributes: ['chapterID', 'chapterNo','chapterTitle'],
        order: ['chapterNo']
    }).then((chapters) => {
        res.json(chapters);
    }).catch((error) => {
        res.json(error);
    });
}


ChapterController.getChapterById = (req, res) => {
    Chapter.findOne({
        where : [{chapterID: req.params.chapter_id}],
        attributes: ['chapterTitle', 'chapterText']
    }).then((chapter) => {
        if(chapter) {
            res.json(chapter);
        } else {
            res.json({
                message: 'Chapter does not exist!'
            })
        }
    }).catch((error) =>{
        res.json(error);
    });
}

module.exports = ChapterController;

