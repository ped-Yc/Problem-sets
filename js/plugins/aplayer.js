<<<<<<< HEAD
const audioList = [];
const isFixed = theme.plugins.aplayer.type == "fixed";
const isMini = theme.plugins.aplayer.type == "mini";

for (const audio of theme.plugins.aplayer.audios) {
  const a = {
    name: audio.name,
    artist: audio.artist,
    url: audio.url,
    cover: audio.cover,
    lrc: audio.lrc,
    theme: audio.theme,
  };
  audioList.push(a);
}

if (isMini) {
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    mini: true,
    audio: audioList,
  });
} else if (isFixed) {
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    audio: audioList,
  });
}
=======
let audioList=[],isFixed="fixed"==theme.plugins.aplayer.type,isMini="mini"==theme.plugins.aplayer.type;for(let i of theme.plugins.aplayer.audios){let e={name:i.name,artist:i.artist,url:i.url,cover:i.cover,lrc:i.lrc,theme:i.theme};audioList.push(e)}if(isMini){let e=new APlayer({container:document.getElementById("aplayer"),mini:!0,audio:audioList})}else if(isFixed){let e=new APlayer({container:document.getElementById("aplayer"),fixed:!0,lrcType:3,audio:audioList});document.querySelector(".aplayer-icon-lrc").click()}
>>>>>>> main1
