
const User=require("../../models/User");
const getallUsers=async(req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const deleteUser = async (req, res) => {
  const {userId} = req.body;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (deletedUser) {
      res.json({ message: 'User deleted successfully', user: deletedUser });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports={
  getallUsers,
  deleteUser
};