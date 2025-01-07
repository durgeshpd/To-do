import React from "react";

function Navbar() {
    return (
        <nav className="bg-green-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-2xl font-bold">To-do App</h1>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#" className="hover:text-gary-300">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gary-300">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gary-300">Contact</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar