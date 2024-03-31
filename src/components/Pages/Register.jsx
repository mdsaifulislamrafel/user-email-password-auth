const Register = () => {
const handleRegister = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
};
    return (
        <div>
            <div className="mx-auto w-3/4">
                <h2 className="text-3xl my-4">Please Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="mb-4 md:w-3/4 border p-4 rounded-lg" placeholder="email address" type="email" name="email" id="" />
                    <br />
                    <input className="mb-4 md:w-3/4 border p-4 rounded-lg" placeholder="password" type="password" name="password" id="" />
                    <br />
                    <input className="mb-4 md:w-3/4 btn btn-secondary" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;

