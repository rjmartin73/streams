import {SIGN_IN,SIGN_OUT} from '../actions/types'
/**
 * Changed the actions to string variables
 */
export const signIn = () =>{
    return {
        type: SIGN_IN
    };
};

export const signOut = () =>{
    return {
        type: SIGN_OUT
    };
};