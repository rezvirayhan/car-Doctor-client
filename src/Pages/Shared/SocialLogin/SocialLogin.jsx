import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import google from '../../../assets/icons/google.png';
const SocialLogin = () => {
    const { googleSign } = useContext(AuthContext)
    const handleGoogleSignin = () => {
        googleSign()
            .then(result => {
                console.log(result.user);
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button onClick={handleGoogleSignin} className="btn btn-circle btn-outline">
                    <img src={google} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;