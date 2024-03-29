const fs = require('fs');
const db = require('../database');
const Story = require('../models/Story');

const StoryController = {};

// Upload story
StoryController.createStory = (req, res) => {
    if(!req.body.title || !req.body.summary) {
        res.json({
            message: 'Please provide a title and summary.',
        });
    } else {
        db.sync().then(() => {
            if(req.body.coverImage) {
                //var img = new Buffer(fs.readFileSync(req.body.coverImage)).toString('base64');
                console.log(req.body.coverImage)
            }


            const newStory = {
                title: req.body.title,
                //coverImage: img,
                summary: req.body.summary,
                username: req.body.username,
            };

            return Story.create(newStory).then(() => {
                res.status(201).json({
                    message: 'Story created!',
                });
            });
        }).catch((error) => {
            res.status(403).json({
                message: error
            });
        });
    }
};

// store Chapter
StoryController.recentStories = (req, res) => {
    Story.findAll({
        limit: 4,
        where: req.query,
        attributes: ['story_id', 'title'],
        order: [ ['story_id', 'DESC'] ]
    })
        .then((stories) => {
            res.json(stories);
        }).catch((error) => {
            res.json(error);
        });
}

StoryController.popularStories = (req, res) => {
    Story.findAll({
        limit: 4,
        where: req.query,
        attributes: ['story_id', 'likes', 'title'],
        order: [ ['likes', 'DESC'] ]
    })
        .then((stories) => {
            res.json(stories);
        }).catch((error) => {
            res.json(error);
        });
}

StoryController.getStoryById = (req, res) => {
    Story.findOne({
        where: {story_id: req.params.story_id},
    }).then((story) => {
        res.json(story)    
    }).catch((error) => {
        res.json(error);
    });
}

StoryController.updateStory = (req, res) => {
    Story.update(
        {likes: req.body.likes},
        {where: {story_id: req.params.story_id}}
    )
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports = StoryController;