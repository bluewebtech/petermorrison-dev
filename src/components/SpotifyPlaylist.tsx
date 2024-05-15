interface SpotifyPlaylist {
  id: string;
}

export default function SpotifyPlaylist(props: SpotifyPlaylist) {
  return (<div>
    <iframe
      width="100%"
      src={`https://open.spotify.com/embed/playlist/${props.id}`}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  </div>);
};
