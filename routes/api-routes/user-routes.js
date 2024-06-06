const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// Get/Post all users
router.route('/').get(getAllUsers).post(createUser);

// Get single user by _id
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// Add and Delete Friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;