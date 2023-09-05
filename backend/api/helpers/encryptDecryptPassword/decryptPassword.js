import bycrpt from 'bcryptjs';
import hashedpassword from './encryptPassword.js';

const comparePassword = async(plainPassword, hashedpassword)=>{
    return bycrpt.compare(plainPassword,hashedpassword);
}

export default comparePassword;