const { User } = require("@/models/user-model");

async function createUser(user) {
    return await User.create(user);
}
export { createUser }