var playlist = {artist: 'song title'};

function updatePlaylist(playlist, , value) {
  return Object.assign({}, playlist, { [key]: value })
}
  /