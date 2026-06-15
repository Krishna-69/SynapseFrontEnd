import { useRef } from "react";
import { CrossIcon } from "../../assets/icons/crossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../config";

const ContentType = {
    TWITTER: "twitter",
    YOUTUBE: "youtube"
} as const;

type ContentType = (typeof ContentType)[keyof typeof ContentType];

export function CreateContentModel({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) {

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState<ContentType>(ContentType.YOUTUBE);


    async function addContent() {
        if (!titleRef.current || !linkRef.current) {
            return;
        }
        const title = titleRef.current.value;
        const link = linkRef.current.value;
        
        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            title,
            type
        }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })

    }

    return (
         <div>
            {isOpen && <div className="w-screen h-screen bg-gray-50 fixed top-0 left-0 flex justify-center">
                <div className="flex flex-col justify-center">    
                    <div className="bg-white p-4 rounded-2xl">
                        <div className="flex justify-end">
                            <div onClick={onClose} className="cursor-pointer">
                                <CrossIcon  />
                            </div>
                        </div>
                        <div >
                            <Input ref={titleRef} placeholder="title" />
                            <Input ref={linkRef} placeholder="link" />
                        </div>
                        <div className="flex justify-center gap-2 ">
                            <Button text="Youtube" variant={type === ContentType.YOUTUBE ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.YOUTUBE)
                            }} />
                            <Button text="Twitter" variant={type === ContentType.TWITTER ? "primary" : "secondary"} onClick={() => {
                                setType(ContentType.TWITTER)
                            }}/>
                        </div>
                        <div className="flex justify-center m-2">
                            <Button onClick={addContent} variant="primary" text="Add Content" />
                        </div>
                    </div>
                </div>
            </div>} 
         </div>
    )
}


