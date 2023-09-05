import hashpassword from "../../helpers/encryptDecryptPassword/encryptPassword.js";
import userModel from "../../models/user/userModel.js";


/** Register */
export const userRegisterController = async (req, res, next) => {
    const { name , email ,phone ,password,confPassword} = req.body;
    try {
        /**Validation */

        if ((!name) || (!email) || (!phone) || (!password)) {
            return res.status(403).json({
                success: false,
                message: "All Feild are Required!!"
            })
        }

        const userEixst = await userModel.findOne({
            email: email.toLowerCase()
        });

        if (userEixst) {
            return res.status(404).json({
                success: false,
                message: " User Allready Exist !! Please Login"
            })
        }

        var isMatchPassword = (password === confPassword);
        if (!isMatchPassword) {
            return res.status(402).json({
                success: true,
                error: 'password does not match'
            });
        }

        let encryptPassword = hashpassword(password);

        let newUser = new userModel();
        newUser.name = name.toLowerCase();
        newUser.email =email.toLowerCase();
        newUser.phone =phone ;
        newUser.password = encryptPassword;

        console.log(newUser);

        newUser.save();


    } catch (error) {
        console.log("Error");
        next(error)
    }

};


/**Login*/

export const userLogingController = async (req,res,next)=>{
    try{
        const { email , password } = req.body;

        const userExist = await adminModel.findOne({
            email : email.toLowerCase(),
        });

        if(!userExist){
            return  res.status(404).json({
                success:false,
                msg:"No User found!!"
            });
        }

        const decryptPass = await comparePassword(password,adminExist.password);
        console.log(decryptPass);

    }
    catch (error) {
        console.log("Error in Admin Login Controller", error);
        return res.status(500).json({
            sucess: false,
            msg: 'Internal Server Error'
        })
        next(error);
    }

}