import YoutubeVideo from "../components/YoutubeVideo.tsx";
import YouTubeVideoData from "../data/youtube-videos.json";

interface YouTubeVideo {
  id: string;
  title: string;
}

export default function YoutubeVideos() {
  return YouTubeVideoData.map((item: YouTubeVideo) => {
    return <YoutubeVideo id={item.id} title={item.title} />;
  });
};
