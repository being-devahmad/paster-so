import { ChevronsUpDown, Gem, Headphones } from "lucide-react"
import { useState } from 'react'
import { Link } from "react-router-dom"


export const Navbar = () => {
    const [isHoveringAdFree, setIsHoveringAdFree] = useState(false)
    const [isHoveringHeadphones, setIsHoveringHeadphones] = useState(false)
    return (
        <>
            <nav className="bg-[#191A23] text-gray-300 px-8 py-4 border-b border-[#3c3d4d] ">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">

                        <img src="https://paster.so/brand/assets/icon/standard.svg" alt="" className="w-6 h-6" />

                        <svg className="text-[#3c3d4d]" fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M16.88 3.549L7.12 20.451"></path></svg>


                        <button className="inline-flex gap-2 justify-center items-center">
                            <img src="./profile.jpeg" className="rounded-sm" width={20} height={20} alt="" />
                            <span>
                                <Link to={'/auth'}>Sign In</Link>
                            </span>
                            <ChevronsUpDown className="w-3 h-3" />
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div
                            className="relative flex justify-center items-center gap-2 border border-[#3c3d4d] px-2 py-1.5 rounded-lg hover:bg-[#252634] text-[#97989e] hover:text-white cursor-pointer"
                            onMouseEnter={() => setIsHoveringAdFree(true)}
                            onMouseLeave={() => setIsHoveringAdFree(false)}
                        >
                            <Gem className="w-3 h-3" />
                            <code className="text-xs">
                                <span>Get Ad-Free</span>
                            </code>

                            {isHoveringAdFree && (
                                <div className="absolute top-full left-2 mt-2 z-10">
                                    <div className="flex justify-center items-center gap-2 border border-[#3c3d4d] px-2 py-1 rounded-md 
                                bg-gray-900 text-white">
                                        <p className="text-xs">
                                            <span>Premium</span>
                                        </p>
                                        <code className="text-xs border border-[#3c3d4d] rounded-md px-1.5 py-0.5">
                                            <span className="text-xs">P</span>
                                        </code>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div
                            className="relative flex justify-center items-center gap-2 border border-[#3c3d4d] p-1.5 rounded-full hover:bg-[#252634] cursor-pointer"
                            onMouseEnter={() => setIsHoveringHeadphones(true)}
                            onMouseLeave={() => setIsHoveringHeadphones(false)}
                        >
                            <Headphones className="w-4 h-4 text-[#97989e] hover:text-white" />
                            {isHoveringHeadphones && (
                                <div className="absolute top-full -left-5 mt-2 z-10">
                                    <div className="flex justify-center items-center gap-2 border border-[#3c3d4d] px-2 py-1 rounded-md 
                                bg-gray-900 text-white hover:text-white">
                                        <p className="text-xs">
                                            <span>Help</span>
                                        </p>
                                        <code className="text-xs border border-[#3c3d4d] rounded-md px-1.5 py-0.5">
                                            <span className="text-xs">?</span>
                                        </code>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}