const bcrypt = require("bcrypt");

generatePassword = async (password, rounds = 12) => {
    return bcrypt.hash(password, rounds).then(hash => hash).catch(err => console.error(err.message));
}

module.exports = { generatePassword } 