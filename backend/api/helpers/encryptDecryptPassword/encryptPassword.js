import bycrpt from 'bcryptjs'

const hashpassword = async(plainPassword) =>{
    try {
        const saltRound = 10;
        const hashedpassword = await bycrpt.hash(plainPassword, saltRound);
        return hashedpassword;
    }
    catch(error){
        console.log("Password can't encrypted!")
    }
}

export default hashpassword;