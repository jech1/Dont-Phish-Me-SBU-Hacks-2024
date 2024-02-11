import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function WinScreen() {
    return (
        <div className="flex flex-col h-screen">
            <header className="bg-headerColor flex items-center justify-center">
                <h1 className="text-background text-3xl text-center py-6 font-pixelated">Don't Phish Me</h1>
            </header>
            <div className="flex flex-1 bg-background items-center justify-center overflow-hidden">
                <div className="bg-secondaryLight border-2 border-secondary rounded-2xl p-16 w-1/3 shadow-custom flex flex-col items-center justify-center"> {/* Flex applied here for content centering */}
                    <p className="text-center mb-4 font-pixelated text-primary text-2xl">Congratulations! You Won!!!</p>
                    <p className="text-center mb-4 font-cmd text-primary text-l">You did select all the correct emails in the correct fashion, good job!</p>
                    <Link to="/" className="font-cmd w-full bg-headerColor shadow-custom text-white rounded-lg px-4 py-2 hover:bg-primary text-center mt-4">Go Home</Link> {/* mt-4 for some margin top */}
                </div>
            </div>
        </div>
    );
}
export default WinScreen;