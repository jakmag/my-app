import { useState , useRef , useEffect } from "react"

interface VideoPlayerProps {
    isPlaying: boolean,
    src: string    
}


const VideoPlayer = ({isPlaying, src}:VideoPlayerProps) => {

    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (ref.current) {
            if (isPlaying) {
                ref.current.play()
            } else {
                ref.current.pause()
            }
        }

    },[isPlaying])


    return (
        <video ref={ref} src={src} loop playsInline/>
    )
}




const AboutPage = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div>
            <h1>About Page</h1>

            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </div>
    )
}

export default AboutPage;