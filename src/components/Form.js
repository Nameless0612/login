import * as React from 'react';


export default function Form() {

    return(

        <div className='bg-white px-10 py-20 rounded-3xl border-2 border-gray-200'>
            <h1 className='text-5xl font-semibold'>¡Bienvenido!</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Por favor introduzca sus credenciales</p>
            <div className='mt-8'>
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your email'
                    />
                </div>
                <div>
                    <label className='text-lg font-medium'>Password</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder='Enter your password'
                        type='pasword'
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <div>
                        <input
                            type='checkbox'   
                            id='remember'                       
                        />
                        <label className='ml-2 font-medium text-base' for="remember">Remember for 30 days</label>
                    </div>
                    <button className='font-medium text-base text-violet-500 ml-2'>Forgot password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Iniciar sesión</button>
                    <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all flex rounded-xl py-3 border-2 flex border-gray-100 items-centter justify-center'>
                        Iniciar sesión con Google
                    </button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>¿No tienes una cuenta?</p>
                    <button className='text-violet-500 text-base font-medium ml-2'>Subscribirse</button>
                </div>
            </div>
        </div>

    )

}