import userModel from "../models/userModel.js";


/** Register */
export const userRegisterController = async (req, res, next) => {

    try {
        /**Validation */

        if ((!req.body.name) || (!req.body.email) || (!req.body.phone) || (!req.body.password)) {
            return res.status(403).json({
                success: false,
                message: "All Feild are Required!!"
            })
        }
        const userEixst = await userModel.findOne({
            email: req.body.email,
        })
        if (userEixst) {
            return res.status(404).json({
                success: false,
                message: " User Allready Exist !! Please Login"
            })
        }

        let newUser = new userModel();
        newUser.name = req.body.name;
        newUser.email = req.body.name;
        newUser.phone = req.body.phone;
        newUser.password = req.body.password;

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
        const userEixst = await userModel.findOne({
            email: req.body.email,
        })
        if (!userEixst) {
            return res.status(404).json({
                success: false,
                message: " User Not Found !! Please Register"
            })
        }
        res.status(200).json({
            success: true,
            msg: "Login Successful!!"
        })
    }
    catch (error) {
        console.log("Error");
        next(error)
    }
    
}