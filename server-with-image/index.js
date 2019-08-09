var WebTorrent = require('webtorrent-hybrid')

console.log(__dirname)
var client = new WebTorrent()
// Converted http://releases.ubuntu.com/18.04/ubuntu-18.04.3-live-server-amd64.iso.torrent into magnet link
const magnetURL = 'magnet:?xt=urn:btih:DFBFPJ57J2XKS6HUWW37XU5U57G5THSD&dn=ubuntu-18.04.3-live-server-amd64.iso&xl=889192448&tr=https%3A%2F%2Ftorrent.ubuntu.com%2Fannounce'
client.add(magnetURL, { announce: ["ws://localhost:10080"], path: __dirname })


client.on('torrent', function (torrent) {
    console.log(torrent.path)

    torrent.on('infoHash', function () { })

    torrent.on('metadata', function () { })

    torrent.on('ready', function () { })

    torrent.on('warning', function (err) {
        console.log(err)
    })

    torrent.on('error', function (err) {
        console.error(err)
    })
    torrent.on('done', function () { })


    torrent.on('done', function () {
        console.log('torrent finished downloading')
    })

    torrent.on('download', function (bytes) {
        console.log('progress: ' + torrent.progress)
    })

    torrent.on('upload', function (bytes) {
    })

    torrent.on('wire', function (wire) {
    })

    torrent.on('noPeers', function (announceType) {
    })
})
