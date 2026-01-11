const bcrypt = require("bcrypt");

generatePassword = async (password, rounds = 12) => {
    return bcrypt.hash(password, rounds).then(hash => hash).catch(err => console.error(err.message));
}

 comparePassword = async (enteredPassword, hashedPassword) => {
    const check = await bcrypt.compare(enteredPassword, hashedPassword);
    if(check){
        return true;
    }
    else {
        return false;
    }
}

module.exports = { generatePassword, comparePassword } 