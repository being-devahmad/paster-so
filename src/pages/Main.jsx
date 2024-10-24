import { useState } from 'react'

export default function Main() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [isHoveringEditCode, setIsHoveringEditCode] = useState(false)
    const [isHoveringInsertTemplate, setIsHoveringInsertTemplate] = useState(false)

    return (
        <div className="min-h-screen bg-[#191A23] text-gray-300 p-4 flex flex-col font-mono">
            <main >
                <div className="flex-grow flex flex-col max-w-4xl mx-auto w-full space-y-4 min-w-[85%] my-12">
                    <div className="relative">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full bg-transparent border-none text-2xl font-semibold placeholder-gray-500 focus:outline-none"
                            placeholder="Title"
                        />
                    </div>
                    <div className="relative flex-grow">
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full h-full min-h-[300px] bg-transparent border-none resize-none placeholder-gray-500 focus:outline-none"
                            placeholder="Add content ..."
                        />
                    </div>
                </div>


                <div className="flex justify-between items-center max-w-4xl mx-auto w-full space-y-4 border-b border-white min-w-[85%] my-12 pb-1.5">
                    <div className="flex flex-col space-x-4">
                        <div className="flex items-center gap-6 text-[#e4e4ed] text-xs ">
                            <span className='text-sm font-semibold'>Options</span>
                            <div className='relative group'>
                                <button
                                    className="flex gap-2 p-1 rounded hover:bg-[#20212b] items-center"
                                    onMouseEnter={() => setIsHoveringEditCode(true)}
                                    onMouseLeave={() => setIsHoveringEditCode(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                    <span className='text-white'>Edit code</span>
                                </button>
                                {isHoveringEditCode && (
                                    <div className="absolute left-0 mt-2 w-48 bg-[#20212b] border border-[#3c3d4d] rounded-md shadow-lg z-10">
                                        <div className="px-2 py-2 text-xs text-white">
                                            Set custom edit code
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="flex gap-6 items-center text-gray-500 text-xs">
                            <span className='text-sm font-semibold text-start '>Tools</span>
                            <div className='relative group'>
                                <button className="flex gap-2 px-2 py-1 text-gray-500  rounded hover:bg-[#20212b]"
                                    onMouseEnter={() => setIsHoveringInsertTemplate(true)}
                                    onMouseLeave={() => setIsHoveringInsertTemplate(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-template "><rect width="18" height="7" x="3" y="3" rx="1"></rect><rect width="9" height="7" x="3" y="14" rx="1"></rect><rect width="5" height="7" x="16" y="14" rx="1"></rect></svg>
                                    <span>Insert template</span>
                                </button>

                                {isHoveringInsertTemplate && (
                                    <div className="absolute left-0 mt-2 w-32 bg-[#20212b] border border-[#3c3d4d] rounded-md shadow-lg z-10">
                                        <div className="px-2 py-2 text-xs text-white">
                                            Insert Template
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                    <button className="bg-[#575AC6] text-white px-4 py-2 rounded text-xs font-semibold">
                        Create paste
                    </button>
                </div>
            </main>

        </div>
    )
}