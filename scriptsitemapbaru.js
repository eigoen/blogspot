var cat_home='http://www.bloggersstand.com';cat_numb=7;cat_pre='Prev';cat_nex='Next';
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
  var d=document.getElementsByTagName('head')[0];
  e=document.createElement('script');
  e.type='text/javascript';
  e.setAttribute('src',cat_home+'/feeds/posts/default/-/'+a+'?alt=json-in-script&start-index='+b+'&max-results='+cat_numb+'&callback=show_post2');
  d.appendChild(e);
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
  }dw+='</ul>';document.getElementById('show-cat').innerHTML=dw
}
document.write('<script type="text/javascript" src="'+cat_home+'/feeds/posts/default?alt=json-in-script&max-results=0&callback=show_cat"><\/script>');
