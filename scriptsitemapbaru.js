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
  if (typeof fileref!="undefined"){
      if (filetype=="js"){document.getElementsByTagName("head")[0].appendChild(fileref)}
      else{document.getElementsByTagName("head")[0].appendChild(fileref)}
  }
}
document.getElementById('main').innerHTML = "<div id='show-cat'></div><div id='show-post'></div><div style='clear:both'></div>";
loadjscssfile("//rawgit.com/eigoen/blogspot/master/scriptsitemapbaru.css", "css");
var cat_home='http://www.bloggersstand.com',cat_numb=7,cat_pre='Prev',cat_nex='Next';
var cat_name;var cat_start;var cat_class;
function show_post2(a){
  var tt=a.feed.openSearch$totalResults.$t;dw='';dw+='<ul>';
  for(var i=0;i<cat_numb&&i<a.feed.entry.length;i++){
    var entry=a.feed.entry[i];cat_title=entry.title.$t;
    for(var j=0;j<entry.link.length;j++){
      if(entry.link[j].rel=='alternate'){var cat_url=entry.link[j].href}
    }dw+='<li>';dw+=(cat_start+i)+'. <a href="'+cat_url+'" rel="nofollow" title="'+cat_title+'">'+cat_title+'</a>';
    dw+='</li>'}dw+='</ul>';dw+='<div id="navi-cat">';
  if(cat_start>1){
    dw+='<a href="" onclick="show_post(\''+cat_name+'\',\''+(cat_start-cat_numb)+'\',\''+cat_class+'\');return false" title="'+cat_pre+'">'+cat_pre+'</a>'
  }if((cat_start+cat_numb-1)<tt){
    dw+='<a href="" onclick="show_post(\''+cat_name+'\',\''+(cat_start+cat_numb)+'\',\''+cat_class+'\');return false" title="'+cat_nex+'">'+cat_nex+'</a>'
  }dw+='<span>'+cat_start;
  if(cat_start!=tt){dw+=' &ndash; '+(cat_start+i-1)}
  dw+=' / '+tt+'</span>';
  dw+='</div>';
  document.getElementById('show-post').innerHTML=dw+'<style type="text/css">.cat-'+cat_class+' a{background:#bbb!important;color:#fff!important}<\/style>'
}function show_post(a,b,c){
  loadjscssfile(cat_home+'/feeds/posts/default/-/'+a+'?alt=json-in-script&start-index='+b+'&max-results='+cat_numb+'&callback=show_post2','js');
  cat_name=a;cat_start=parseInt(b),cat_class=c
}function show_cat(a){
  var cat=a.feed.category;dw='';dw+='<ul>';
  for(var i=0;i<cat.length-1;i++){
    for(var j=i+1;j<cat.length;j++){
      if(cat[i].term>cat[j].term){cat_hv=cat[i].term;cat[i].term=cat[j].term;cat[j].term=cat_hv}
    }
  }for(var i=0;i<cat.length;i++){
    dw+='<li class="cat-'+i+'">';
    dw+='<a href="" onclick="show_post(\''+cat[i].term+'\',\'1\',\''+i+'\');return false" title="';dw+=cat[i].term;dw+='">';
    dw+=cat[i].term;dw+='</a>';dw+='</li>'
  }dw+='</ul>';document.getElementById('show-cat').innerHTML=dw;
}
loadjscssfile(cat_home+"/feeds/posts/default?alt=json-in-script&max-results=0&callback=show_cat", "js");
