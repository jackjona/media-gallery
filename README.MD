# Video Gallary - Assets

## This branch hosts all the main assets.

A simple video gallery website built in pure HTML, CSS, and JS using HLS.JS.

## View The Live Site [Here](https://media.jjcdn.ga)

## Software

- HTML
- JS
- CSS
- HLS.JS

## Additional Information:

All the thumbnails, video and audio clips are hosted in this Github repository, in .ts files that using a .m3u8 file can be used for HLS.JS. Most of the assets are put through JSDeliver (a free CDN for opensource projects). The .m3u8 files are then used as a src (source) for the <video> and <audio> html tags. However, Github is not meant to be used as an object storage, so ideally, you would want to host the assets in an S3 Bucket or similar and use Cloudfront or Cloudflare as a CDN to deliver these assets to your website.