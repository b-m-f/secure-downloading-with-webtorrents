# Webtorrents for Image downloading

- https://github.com/webtorrent/webtorrent


# Idea
Seed images with a Hybrid Client to connect Webtorrent clients (WebRTC) and the regular torrent swarm.
This way an image can be securely downloaded from the website without the user having to rely on dedicated torrenting clients or manual Checksum verfication, as 
it is already included in the torrents, and the torrent client is itself included into the website.

## Torrent client too big?
If you are going to download the image, the client can be dynamically fetched when requesting it. When you are ready to download an OS image, the few MBs( estimation ) to download the required JS, should not be a hinderance.
By loading the client dynamically, the page will not be polluted with unnecessart data for clients that are not interested in downloading an image during their session.


# Architecture


![architecture_diagram.jpg](/home/user/Workspace/Canonical/Webtorrent/architecture_diagram.jpg)



# POC

A proof of concept, downloading the ubuntu live server image with webtorrents.

## Tracker
Since the normal ubuntu tracker does not yet support websockets, a custom tracker has to be set up for now, to server WS clients.
To spawn it go to `tracker` and run `node index.js`.

## Client
Go to client directory and run with `npm run start`. The client will be available at `localhost:8080`.

## Hybrid server
The server that bridges the regular torrent swarm with the webtorrent swarm by supporting UDP, HTTP and WS.
When starting it will download the ubuntu live server image and start seeding it.

Go to `server-with-image` and run `node index.js`.



# Things to fix 

## When the file is too big, the browser window might crash when creating the download link. 
- investigate if this is a problem with RAM. Is there another way to expose the data to the user for a download?

## Hybrid server tries to connect to other trackers
- Figure out how to ignore the default trackers.








