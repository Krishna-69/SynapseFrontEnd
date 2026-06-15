import type { ReactElement } from "react";

export function SidebarItem({text, icon}: {
    text: string,
    icon: ReactElement
}) {
    return (
        <div className="flex items-center text-gray-600 gap-2 pl-8 py-1 pt-1 curso-pointer hover:bg-gray-200 rounded max-w-48 transition-all duration-500 hover:duration-500">
            <div className="pr-2">
                {icon} 
            </div>
            <div>
                {text}
            </div>
        </div>
    )
}