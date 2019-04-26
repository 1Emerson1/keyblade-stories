const express = require('express');
const passport = require('passport');

const router = express.Router();

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const storyController = require('../controllers/storyController');
const chapterController = require('../controllers/chapterController');

// user routes
router.get('/api/profile', passport.authenticate('jwt', { session: false }), authController.getUserByJwt);
router.post('/api/login', authController.authenticateUser);
router.post('/api/signup', authController.signUp);
router.post('/api/createstory', storyController.createStory);
router.post('/api/createchapter', chapterController.createChapter);

// story routes
router.post('/api/createstory', storyController.createStory);
router.get('/api/recentstories', storyController.recentStories);
router.get('/api/popularstories', storyController.popularStories);
router.get('/api/story/:story_id', storyController.getStoryById);
router.put('/api/story/:story_id', storyController.updateStory);

router.get('/api/story/:story_id/retrieveChapters', chapterController.retrieveChapters);
router.get('/api/story/:story_id/chapter/:chapterID', chapterController.getChapterById);

module.exports = router;
