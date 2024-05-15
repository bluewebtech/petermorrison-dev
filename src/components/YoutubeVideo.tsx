interface YouTubeVideos {
  id: string;
  title: string;
}

export default function YoutubeVideo(props: YouTubeVideos) {
  return (<div>
    <a href={`https://www.youtube.com/watch?v=${props.id}`} target="_blank">
      <img
        width="100%"
        src={`https://img.youtube.com/vi/${props.id}/0.jpg`}
        title={props.title}
        loading="lazy"
      />
      <div className="p-2 lg:w-72 sm:w-full md:w-full text-white text-xs text-wrap">
        {props.title}
      </div>
    </a>
  </div>);
};
