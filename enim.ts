enum Print{
    newsPaper   ,
    news
}
function getMedia(mediaName:String):Print{
    if(mediaName==='news'||mediaName==='media'){
   return Print.news
    }
}
let mediaName:Print=getMedia('media')
console.log('medianame',mediaName);
console.log('printmedia',Print['news']);
