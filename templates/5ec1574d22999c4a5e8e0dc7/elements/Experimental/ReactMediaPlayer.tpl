/*
path: ReactMediaPlayer.tpl
completePath: elements/Experimental/ReactMediaPlayer.tpl
type: file
unique_id: ReactMediaPlayer
icon: ico-pagination
options:
  - name: playVideo
    display: Video URL to play
    type: text
    options: ''
children: []
settings:
  - name: Packages
    value: '"react-media-player": "^0.7.9",'
*/
{% set bpr %}
import { controls, Media, Player } from 'react-media-player'
{% endset %}
{{ save_delayed('bpr',bpr) }}
{% set ph %}
const { PlayPause, MuteUnmute } = controls
{% endset %}
{{ save_delayed('ph',ph) }}
<Media>
  <div className="media">
    <div className="media-player">
      <Player src={{element.values.playVideo}} />
    </div>
    <div className="media-controls">
      <PlayPause /><MuteUnmute />
    </div>
  </div>
</Media>