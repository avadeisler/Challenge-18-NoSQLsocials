const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controllers');

// Get all thoughts
router.route('/').get(getAllThoughts).post(createThought);

// Get/Put/Delete thought
router.route('/:thoughtId').get(getThoughtsById).put(updateThoughtById).delete(deleteThought);

// Post thought reaction
router.route('/:thoughtId/reactions').post(createReaction);

//Delete thought reaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;