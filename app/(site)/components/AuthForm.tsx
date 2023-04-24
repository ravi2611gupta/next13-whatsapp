'use client';

import axios from "axios";
import { signIn, useSession } from 'next-auth/react';
import { useCallback, useEffect, useState } from 'react';
import { BsFacebook, BsTwitter, BsGithub  } from 'react-icons/bs';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";

import AuthInput from "./AuthInput";
import AuthSocialButton from './AuthSocialButton';

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>('LOGIN');

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.push('/conversations')
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (variant === 'REGISTER') {
      axios.post('/api/register', data)
      .then(() => router.push('/conversations'));
    }

    if (variant === 'LOGIN') {
      signIn('credentials', data)
      .then(() => router.push('/conversations'));
    }
  }

  return ( 
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {variant === 'REGISTER' && (
                <AuthInput 
                  register={register}
                  errors={errors}
                  id="name" 
                  label="Name"
                />
              )}
              <AuthInput 
                register={register}
                errors={errors}
                id="email" 
                label="Email address" 
                type="email"
              />
              <AuthInput 
                register={register}
                errors={errors}
                id="password" 
                label="Password" 
                type="password"
              />
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