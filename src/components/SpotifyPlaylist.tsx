interface SpotifyPlaylist {
  id: string;
}

export default function SpotifyPlaylist(props: SpotifyPlaylist) {
  return (<div className="h-20">
    <iframe
      width="100%"
      src={`https://open.spotify.com/embed/playlist/${props.id}`}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      loading="lazy"
    />
  </div>);
};
