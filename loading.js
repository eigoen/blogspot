function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}
document.getElementById('main').innerHTML += '<br/><div id="toc"></div>';
loadjscssfile("//rawgit.com/eigoen/blogspot/master/scriptsitemapbaru.css", "css");
loadjscssfile("//rawgit.com/eigoen/blogspot/master/scriptsitemapbaru.js", "js");
loadjscssfile("//inidulubaruitu.com/feeds/posts/default?max-results=9999&amp;alt=json-in-script&amp;callback=loadtoc", "js");
