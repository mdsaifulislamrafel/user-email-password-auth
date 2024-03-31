import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";


const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.trams.checked;
        console.log(email, password, accepted);

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password must be at least 6 characters');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password must contain at least one uppercase letter');
            return;
        } else if (!accepted) {
            setRegisterError('You must accept the terms and conditions');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setSuccess('User created successfully');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setRegisterError(errorMessage);
            });
    };
    return (
        <div>
            <div className="mx-auto w-1/2">
                <h2 className="text-3xl my-4">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 md:w-full border p-4 rounded-lg" placeholder="email address" type="email" name="email" id="" required />
                    <br />
                    <div className="mb-4 relative">
                        <input className="md:w-full border p-4 rounded-lg" placeholder="password" type={showPassword ? "text" : "password"} name="password" id="" required />
                        <span className="absolute top-5 right-4" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash className="text-xl" /> : <IoEye className="text-xl" />}</span>
                    </div>
                    <br />
                    <div className="mb-4">
                        <input type="checkbox" name="trams" id="trams" />
                        <label className="ml-2" htmlFor="trams">I agree to the <a href="" className="hover:underline hover:text-blue-700">terms and conditions</a></label>
                    </div>
                    <br />
                    <input className="mb-4 md:w-full btn btn-secondary" type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-500">{registerError}</p>
                }
                {
                    success && <p className="text-green-500">{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;

