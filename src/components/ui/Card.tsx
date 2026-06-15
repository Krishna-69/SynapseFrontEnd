import { ShareIcon } from "../../assets/icons/share";
import { TwitterIcon } from "../../assets/icons/twitter";
import { YoutubeIcon } from "../../assets/icons/youtube";

interface cardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube"
}

function getYoutubeEmbedUrl(link: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = link.match(regExp);
    const videoId = (match && match[2].length === 11) ? match[2] : null;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : link;
}

import { useEffect } from "react";

export function Card(props: cardProps) {
    useEffect(() => {
        // @ts-expect-error: twttr is loaded dynamically via external script and not typed on window
        if (window.twttr) {
            // @ts-expect-error: twttr is loaded dynamically via external script and not typed on window
            window.twttr.widgets.load();
        }
    }, [props.link]);

    return (
        <div className="p-4 bg-white rounded-md shadow-lg outline-slate-200 w-full border border-gray-200 flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-md">
                    <div className="text-gray-500">
                        {props.type === "youtube" ? <YoutubeIcon /> : <TwitterIcon />}
                    </div>
                    {props.title}
                </div>
                <div className="flex gap-2 text-gray-500 items-center">
                    <div>
                        <a href={props.link} target="_blank" rel="noopener noreferrer">
                            <ShareIcon />
                        </a>
                    </div>
                    <div>
                        <ShareIcon />
                    </div>
                </div>
            </div>

            <div className="pt-2">
                {props.type === "youtube" && (
                    <iframe 
                        className="w-full rounded-md aspect-video" 
                        src={getYoutubeEmbedUrl(props.link)} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                )}

                {props.type === "twitter" && (
                    <blockquote className="twitter-tweet w-full">
                        <a href={props.link.replace("x.com", "twitter.com")}></a>
                    </blockquote>
                )}
            </div>
        </div>
    );
}