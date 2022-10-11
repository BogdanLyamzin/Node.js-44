const bcrypt = require("bcryptjs");

const hashPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);   
    // console.log(salt); 
    const result = await bcrypt.hash(password, 10);
    // console.log(result);
    const passwordCompare1 = await bcrypt.compare(password, result);
    console.log(passwordCompare1);
    const passwordCompare2 = await bcrypt.compare("123457", result);
    console.log(passwordCompare2);
}

hashPassword("123456")