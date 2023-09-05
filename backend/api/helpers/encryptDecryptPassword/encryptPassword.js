import bycrpt from 'bcryptjs'

const hashpassword = async(plainPasswod) =>{
    try {
        const saltRound = 10;
        const hashedpassword = await bycrpt.hash(plainPasswod, saltRound);
        return hashedpassword;
    }
    catch(error){
        console.log("Password can't encrypted!")
    }
}

export default hashpassword;