/* Front-End Icon Assets */
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import javascript from '../../assets/javascript-logo.svg';
import typescript from '../../assets/typescript.svg';
import react from '../../assets/react.svg';
import reactRouter from '../../assets/react-router.svg';
import redux from '../../assets/redux.svg';
import vite from '../../assets/vite.svg';
import tailwind from '../../assets/tailwind.svg';
import sass from '../../assets/sass.svg';
import bootstrap from '../../assets/bootstrap.svg';
import framer from '../../assets/framer.svg';

/* Back-End Icon Assets */
import node from '../../assets/node-js.svg';
import express from '../../assets/express.svg';
import mongodb from '../../assets/mongodb.svg';
import mysql from '../../assets/mysql.svg';
import firebase from '../../assets/firebase.svg';
import api from '../../assets/api.svg';
import laravel from '../../assets/laravel.svg';

/* Tools Icon Assets */
import git from '../../assets/git.svg';
import github from '../../assets/github.svg';
import vscode from '../../assets/vscode.svg';
import figma from '../../assets/figma.svg';
import npm from '../../assets/npm.svg';
import postman from '../../assets/postman.svg';
import heroku from '../../assets/heroku.svg';
import linux from '../../assets/linux.svg';

const Skills = () => {
  return (
    <div className="mt-10 h-screen">
      <div className="flex flex-col md:flex-row items-center justify-around gap-4">
        <div className="dark:bg-black/10 p-6 backdrop-blur-sm
        rounded-lg shadow-2xl max-w-sm">
          <h1 className="text-2xl font-bold border-l-2 border-red-600
          pl-2">
            Front-End Development</h1>
          <div className='mt-6 flex flex-wrap items-center justify-center gap-4'>
            <img src={html} alt="html-icon" className='w-12 h-12 icons-hover' />
            <img src={css} alt="css-icon" className='w-12 h-12 icons-hover' />
            <img src={javascript} alt="javascript-icon" className='w-10 h-10 rounded-sm icons-hover' />
            <img src={typescript} alt="typescript-icon" className='w-10 h-10 rounded-sm icons-hover' />
            <img src={react} alt="react-icon" className='w-12 h-12 icons-hover' />
            <img src={reactRouter} alt="react-router-icon" className='w-12 h-12 icons-hover' />
            <img src={redux} alt="redux-icon" className='w-10 h-10 icons-hover' />
            <img src={vite} alt="vite-icon" className='w-12 h-12 icons-hover' />
            <img src={tailwind} alt="tailwind-icon" className='w-12 h-12 icons-hover' />
            <img src={sass} alt="sass-icon" className='w-12 h-12 icons-hover' />
            <img src={bootstrap} alt="bootstrap-icon" className='w-10 h-10 icons-hover' />
            <img src={framer} alt="framer-icon" className='w-12 h-12 bg-white/80 rounded-full icons-hover' />
          </div>
        </div>
        <div className="dark:bg-black/10 p-6 backdrop-blur-sm
        rounded-lg shadow-2xl max-w-sm">
          <h1 className="text-2xl font-bold border-l-2 border-red-600
          pl-2">
            Back-End Development</h1>
          <div className='mt-6 flex flex-wrap items-center justify-center gap-4'>
            <img src={javascript} alt="javascript-icon" className='w-10 h-10 rounded-sm icons-hover' />
            <img src={typescript} alt="typescript-icon" className='w-10 h-10 rounded-sm icons-hover' />
            <img src={node} alt="node-icon" className='w-12 h-12 icons-hover' />
            <img src={express} alt="express-icon" className='w-12 h-12 icons-hover bg-white/80 rounded-full p-2' />
            <img src={mongodb} alt="mongodb-icon" className='w-12 h-12 icons-hover' />
            <img src={mysql} alt="mysql-icon" className='w-12 h-12 icons-hover' />
            <img src={firebase} alt="firebase-icon" className='w-12 h-12 icons-hover' />
            <img src={api} alt="api-icon" className='w-12 h-12 icons-hover' />
            <img src={laravel} alt="laravel-icon" className='w-12 h-12 icons-hover' />
          </div>
        </div>
        <div className="dark:bg-black/10 p-6 backdrop-blur-sm
        rounded-lg shadow-2xl max-w-sm">
          <h1 className="text-2xl font-bold border-l-2 border-red-600
          pl-2">
            Tools</h1>
          
          <div className='mt-6 flex flex-wrap items-center justify-center gap-4'>
            <img src={git} alt="git-icon" className='w-12 h-12 icons-hover'/>
            <img src={github} alt="github-icon" className='w-12 h-12 icons-hover'/>
            <img src={vscode} alt="vscode-icon" className='w-12 h-12 icons-hover'/>
            <img src={figma} alt="figma-icon" className='w-12 h-12 icons-hover'/>
            <img src={npm} alt="npm-icon" className='w-12 h-12 icons-hover'/>
            <img src={postman} alt="postman-icon" className='w-12 h-12 icons-hover'/>
            <img src={heroku} alt="heroku-icon" className='w-12 h-12 icons-hover'/>
            <img src={linux} alt="linux-icon" className='w-12 h-12 icons-hover'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
