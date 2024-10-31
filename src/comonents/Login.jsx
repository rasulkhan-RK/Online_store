/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
const Login = ({ openSignUp }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border"
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password:
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border"
            placeholder="Enter Password"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <label htmlFor="" className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="#" className="text-red-800">
            Forgot Passoword?
          </a>
        </div>

        <div className="mb-4">
          <button type="button" className="w-full bg-red-600 text-white py-2">
            Login
          </button>
        </div>
      </form>

      <div className="text-center">
        <span className="text-gray-700">Don't have a account?</span>
        <button type="button" className="text-red-800" onClick={openSignUp}>
          Sign UP
        </button>
      </div>
    </div>
  );
};

export default Login;
