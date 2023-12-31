import {handleError, handleResponse} from '../../../middleware/errorHandlers.js';
import { controllerUserWeather } from '../controller.js';
import { message } from '../../../config/message.js';
import {UserService} from '../../user/userService.js';

export const  validator = async(req,res,next) =>{
    try{
        const userId = req.cookies.userId;
        const user = await UserService.getUser(userId);
        if(!user){
            console.log('Usuario no Existe')
            handleResponse(res,409,message.error_user)
            
        }
        else{
            await controllerUserWeather.createUserWeather(req,res,user.id);
            console.log('El usuario si existe');
        }
    }
    catch(err){
        handleError(err,res);
    }
    return next();
}