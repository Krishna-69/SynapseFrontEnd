import { SynapseIcon } from "../../assets/icons/SynapseIcon";
import { TwitterIcon } from "../../assets/icons/twitter";
import { YoutubeIcon } from "../../assets/icons/youtube";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
    return (
        <div className="h-screen bg-white w-68 fixed left-0 top-0 pl-1">
            <div className="pt-4 font-bold text-2xl flex items-center gap-1">
                <div className="text-purple-600">
                    <SynapseIcon />
                </div>
                Synapse
            </div>
            <div className="pt-4 ">
                <SidebarItem text="Twitter" icon={<TwitterIcon />} />
                <SidebarItem text="YouTube" icon={<YoutubeIcon />} />
            </div>
        </div>
    )
}