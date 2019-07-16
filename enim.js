var Print;
(function (Print) {
    Print[Print["newsPaper"] = 0] = "newsPaper";
    Print[Print["news"] = 1] = "news";
})(Print || (Print = {}));
function getMedia(mediaName) {
    if (mediaName === 'news' || mediaName === 'media') {
        return Print.news;
    }
}
var mediaName = getMedia('media');
console.log('medianame', mediaName);
console.log('printmedia', Print['news']);
