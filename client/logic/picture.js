const pic_map = { "picture/user.png": "Default", "picture/pet.png": "Cat" };
const picture_mapping = (path) => {
  return pic_map[path];
};

const picture_paths = () => {
  return Object.keys(pic_map);
};
module.exports = { picture_mapping, picture_paths };
