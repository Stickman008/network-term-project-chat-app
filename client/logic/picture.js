const pic_map = {
  "user.png": "Default",
  "pet.png": "Cat",
  "discord.png": "Discord",
};
const picture_mapping = (path) => {
  return pic_map[path];
};

const picture_paths = () => {
  return Object.keys(pic_map);
};
module.exports = { picture_mapping, picture_paths };
