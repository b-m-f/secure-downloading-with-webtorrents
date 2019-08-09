var WebTorrent = require('webtorrent')


var client = new WebTorrent()
// Converted http://releases.ubuntu.com/18.04/ubuntu-18.04.3-live-server-amd64.iso.torrent into magnet link
const magnetURL = "magnet:?xt=urn:btih:DFBFPJ57J2XKS6HUWW37XU5U57G5THSD&dn=ubuntu-18.04.3-live-server-amd64.iso&xl=889192448&tr=https%3A%2F%2Ftorrent.ubuntu.com%2Fannounce"

client.add(magnetURL, {
    announce: ["ws://127.0.0.1:10080"]
}, function (torrent) {
    // Got torrent metadata!
    console.log('Client is downloading:', torrent.infoHash)

    torrent.on('download', function (bytes) {
        document.getElementById("progress").innerHTML = `${torrent.progress * 100}%`
    })

    torrent.on('done', function () {
        console.log('torrent finished downloading')
        torrent.files.forEach(function (file) {
            file.getBlobURL(function (err, url) {
                if (err) throw err
                const a = document.createElement('a')
                a.download = file.name
                a.href = url
                a.textContent = 'Download ' + file.name
                document.body.appendChild(a)
            })
        })

    })

    client.on('torrent', function (torrent) {
        console.log(torrent)
    })

    client.on('error', function (err) {
        console.error(err)
    })
})
