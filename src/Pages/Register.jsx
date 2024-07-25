import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
//import { AuthGoogleContext } from '../context/authGoogle';
import { Link, Navigate } from 'react-router-dom';

const Register = () => {
  //const { handleClickButtonLoginWithGoogle, handleEmailLogin, signed } = useContext(AuthGoogleContext);
  const [name, setName] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await handleEmailLogin(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='items-center flex justify-center'>
      <div className='w-72 h-96 bg-neutral-50 drop-shadow-2xl rounded-xl'>
        <div className='mt-5'>
          <h1 className='text-3xl font-semibold text-center'>Cadastro</h1>
        </div>
        <div className='flex flex-col justify-center mx-auto'>
          <input
            className='m-4 p-1 h-auto bg-slate-300 rounded-md text-base'
            type="text"
            placeholder='Nome da empresa'
            value={name}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='m-4 p-1 h-auto bg-slate-300 rounded-md text-base'
            type="number"
            placeholder='CNPJ'
            value={CNPJ}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='m-4 p-1 h-auto bg-slate-300 rounded-md text-base'
            type="password"
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className='text-red-500 text-center'>{error}</div>}
        <div className='flex justify-center my-2'>
          <button
            className='w-40 h-auto rounded-lg border-solid border-black drop-shadow-2xl shadow-2xl shadow-black hover:bg-neutral-300'
            onClick={<Navigate to='/'/>}
          >
            Entrar
          </button>
        </div>
        <div className='text-center my-2'>
          <h1>Ou entre com o Google</h1>
        </div>
        <div className='flex justify-center mb-5'>
          <button
            className='w-40 h-auto rounded-lg border-solid border-black drop-shadow-2xl shadow-2xl shadow-black hover:bg-neutral-300'
            onClick={<Link to='/'/>}
          >
            <FcGoogle className='mx-auto text-4xl p-1' />
          </button>
        </div>
        <div className='text-center my-5'>
          <h3>Já possui conta? <a href='/' className='text-blue-400'>Clique aqui e entre</a></h3>
        </div>
      </div>
    </div>
  );
};

export default Register;