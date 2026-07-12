import { useForm } from "react-hook-form"
import z from "zod";
import {zodResolver} from '@hookform/resolvers/zod'
import { toast, ToastContainer } from "react-toastify";

export default function LoginFormComponnet() {

  // define form schema with zod 
  const formSchema = z.object({
      email: z
      .string("Please input your email")
      .email({pattern: z.regexes.html5Email}),
      password: z
      .string()
      .min(8, "Please input your character for password at least 8")
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,{
        message: 'Has minimum 8 characters in lengt and at least one uppercase English letter and at least one lowercase English letter, and at least one digit, and at least one special character.'
      })
  })

  const {
    register, 
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm({
    // defaultValues: {
    //   email: '',
    //   password:''
    // },
    resolver: zodResolver(formSchema)
  });

  // handle login logic
  const onHandleLogin = async(value)=> {
 
    //  create logic of login to api
    const res = await fetch('https://ishop.cheat.casa/api/v1/auth/login',{
      method:"POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(value)
    })
    if(res.status == "200"){
       const data = await res.json();
       toast.success("You have login successfully!")
       console.log(`===> User Data: ${data}`)
    }else{
      console.log("User Data is invalid!")
      toast.error("Please try again!")
    }
    reset();
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
      {/* tostified message will display here */}
      <ToastContainer/>

  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <img
      className="mx-auto h-10 w-auto"
      src="https://www.svgrepo.com/show/301692/login.svg"
      alt="Workflow"
    />
    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
      Sign in to your account
    </h2>
    <p className="mt-2 text-center text-sm leading-5 text-blue-500 max-w">
      Or
      <a
        href="#"
        className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
      >
        create a new acccount
      </a>
    </p>
  </div>
  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      {/* form */}
      <form onSubmit={handleSubmit(onHandleLogin)}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-5  text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="email"
              name="email"
              placeholder="user@example.com"
              type="email"
              required=""
              defaultValue=""
              // add register of email
              {...register("email")}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />

            {/* display feedback input form  */}
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Password
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              id="password"
              name="password"
              type="password"
              required=""
              // add register of password
              {...register("password")}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />

            {/* message feedback for password */}
            {errors?.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember"
              type="checkbox"
              defaultValue={1}
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm leading-5 text-gray-900"
            >
              Remember me
            </label>
          </div>
          <div className="text-sm leading-5">
            <a
              href="#"
              className="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Forgot your password?
            </a>
          </div>
        </div>
        <div className="mt-6">
          <span className="block w-full rounded-md shadow-sm">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Sign in
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}
