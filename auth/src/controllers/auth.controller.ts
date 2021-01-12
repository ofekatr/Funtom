import { currentUserService } from "../services/auth/current-user.service"
import { signinService } from "../services/auth/signin.service";
import { signoutService } from "../services/auth/signout.service";
import { signupService } from "../services/auth/signup.service";

const AuthController = {
    currentUser: (_, res) => {
        res.status(201).send(currentUserService());
    },

    signin: () => {
        signinService();
    },

    signup: () => {
        signupService();
    },

    signout: () => {
        signoutService();
    }
}

export { AuthController };