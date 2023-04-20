'use client';

import { useCallback, useState } from 'react';
import { BsFacebook, BsTwitter, BsGithub  } from 'react-icons/bs';

import AuthInput from "./AuthInput";
import AuthSocialButton from './AuthSocialButton';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  return ( 
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              {variant === 'REGISTER' && (
                <AuthInput id="name" label="Name" />
              )}
              <AuthInput id="email" label="Email address" type="email" />
              <AuthInput id="password" label="Password" type="password" />
              <div>
                <button
                  type="submit"
                  className="
                    flex 
                    w-full 
                    justify-center 
                    rounded-md 
                    bg-sky-500 
                    px-3 
                    py-2 
                    text-sm 
                    font-semibold 
                    text-white 
                    shadow-sm 
                    hover:bg-sky-600 
                    focus-visible:outline 
                    focus-visible:outline-2 
                    focus-visible:outline-offset-2 
                    focus-visible:outline-sky-600
                  "
                >
                  {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <AuthSocialButton icon={BsFacebook} />
                <AuthSocialButton icon={BsTwitter} />
                <AuthSocialButton icon={BsGithub} />
              </div>
            </div>
            <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
              <div>
                {variant === 'LOGIN' ? 'New to Messenger?' : 'Already have an account?'} 
              </div>
              <div onClick={toggleVariant} className="underline cursor-pointer">
              {variant === 'LOGIN' ? 'Create an account' : 'Login'}
              </div>
            </div>
          </div>
        </div>
   );
}
 
export default AuthForm;