'use client'
import Image from "next/image";
import Link from "next/link";
import './page.css'

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      
        <div className="flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">

          <h1 className="text-5xl">Welcome Users</h1>
        </div>

      <div className="container">
        <div className="left">
        <h2>KEY FUNCTIONALITIES-</h2>
        <br/>
  <ul>
    <li>
      <strong>USER REGISTRATION(Signup): </strong> Users can create accounts by providing necessary details. Industry best practices are followed for secure password storage (using hashing algorithms).
    </li>
    <br/>
    <li>
      <strong>EMAIL VERIFICATION: </strong> Upon signup, a verification email is sent to the user's registered email address. This email contains a unique link that the user must click to confirm their account and activate it.
    </li>
    <br/>
    <li>
      <strong>USER LOGIN: </strong> Existing users can log in using their credentials. After successful login, a token is generated and stored securely on the client-side (using cookies). This token identifies the user throughout their session and grants access to authorized functionalities.
    </li>
    <br/>
    <li>
      <strong>USER PROFILE MANAGEMENT: </strong> A dedicated profile page displays user information retrieved from the backend database. This section potentially allows users to view and potentially edit their profile details.
    </li>
  </ul>
        </div>
      <div className="right">
      <h2>TECHNICAL HIGHLIGHTS-</h2>
        <br/>
  <ul>
    <li>
      <strong>INDUSTRY STANDARDS: </strong> The project adheres to industry standards for secure authentication, including password hashing, email verification, and token-based authorization.
    </li>
    <br/>
    <li>
      <strong>NEXTJS FRAMEWORK: </strong> Leverages the benefits of Next.js for server-side rendering (SSR) or static site generation (SSG).
    </li>
    <br/>
    <li>
      <strong>BACKEND: </strong>Potentially connects to a secure backend database (MongoDB) to store user information and manage authentication logic.
    </li>
    <br/>
    <li>
      <strong>ENHANCED SECURITY: </strong>Focuses on secure password storage, email verification, and token-based authorization, mitigating risks associated with unauthorized access.

    </li>
    <br/>
    <li>
      <strong>SCALABILITY: </strong>The modular design allows for future expansion with new features and functionalities.
    </li>
    <br/>
  </ul>
      </div>
      </div>

<div className="container-2">
  <h1>Please start by clicking</h1>
<div className="buttons">
      
      <button onClick={() => window.location.href = '/login'}>Login</button>
     
      <button onClick={() => window.location.href = '/signup'}>Sign Up</button>
        
      </div>
      </div>

    </main>
    
  );
}