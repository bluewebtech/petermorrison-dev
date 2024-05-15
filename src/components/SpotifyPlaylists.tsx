import SpotifyPlaylist from "../components/SpotifyPlaylist.tsx";
import SpotifyPlaylistData from "../data/spotify-playlists.json";

interface SpotifyPlaylist {
  id: string;
}

export default function SpotifyPlaylists() {
  return SpotifyPlaylistData.map((item: SpotifyPlaylist) => {
    return <SpotifyPlaylist id={item.id} />;
  });
};
