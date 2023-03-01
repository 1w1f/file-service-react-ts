import React from "react"
interface ActionCardInfo {
    title: string,
    text: string,
    containerClassName?: string,
}
export default function ActionCard({ title, text, containerClassName, ...props }: ActionCardInfo) {

    return <div className={`grid grid-rows-2 h-full ${containerClassName}`} {...props}>
        <div className="row-1">{title}</div>
        <div className="row-2">{text}</div>
    </div>
}