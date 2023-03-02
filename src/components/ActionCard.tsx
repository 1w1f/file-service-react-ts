import React from "react"

export default function ActionCard({ title, text, containerClassName, ...props }: ActionCardInfo) {

    return <button className={` hover:-translate-y-1 transform transition duration-300 ease-in-outs cursor-pointer grid rounded-2xl grid-rows-[60%_40%]  h-full ${containerClassName}`} {...props}>
        <div className="row-1 h-full flex justify-center text-2xl  items-center font-bold text-black text-opacity-60">{title}</div>
        <div className="row-2 pl-14 text-xl text-left ">{text}</div>
    </button>
}