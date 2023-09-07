"use client"
import type { NextPage } from 'next'
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const VerifyEmailPage: NextPage = () => {
    const router = useRouter();
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post("/api/users/verifyEmail", {token})
            setVerified(true);
        } catch (error:any) {
            setError(true);
            console.log(error.response.data);
        }
    }

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "")
    }, [])

    useEffect(() => {
        if(token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return(
      <>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h2 className="p-2 bg-secondary rounded text-black">Verification de l'email</h2>
            {verified && (
                <div className="mt-6">
                    <h2 className="p-2 bg-green-500 rounded text-black">L'email a bien été confirmé</h2>
                    <button
                      onClick={() => router.push(`/sign-in`)}
                      className=" button-animate w-full transform rounded bg-secondary px-4 py-3 font-bold tracking-wide text-black transition-colors duration-300"
                    >
                      Se Connecter
                    </button>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="p-2 bg-red-500 text-black">Une erreur est survenue.</h2>
                </div>
            )}
        </div>
      </>
    )
}

export default VerifyEmailPage;