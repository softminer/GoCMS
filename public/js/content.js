/**
 * 内容管理
 */

function image_priview(img) {
	window.top.art.dialog({title:'图片查看',fixed:true, content:'<img src="'+img+'" />',id:'image_priview',time:5});
}
function remove_div(id) {
	$('#'+id).remove();
}

function input_font_bold() {
	if($('#title').css('font-weight') == '700' || $('#title').css('font-weight')=='bold') {
		$('#title').css('font-weight','normal');
		$('#style_font_weight').val('');
	} else {
		$('#title').css('font-weight','bold');
		$('#style_font_weight').val('bold');
	}
}
function ruselinkurl() {
	if($('#islink').attr('checked')==true) {
		$('#linkurl').attr('disabled','');
		var oEditor = CKEDITOR.instances.content;
		oEditor.insertHtml('　');
		return false;
	} else {
		$('#linkurl').attr('disabled','true');
	}
}
function close_window() {
	if($('#title').val() !='') {
	art.dialog({content:'内容已经录入，确定离开将不保存数据！', fixed:true,yesText:'我要关闭',noText:'返回保存数据',style:'confirm', id:'bnt4_test'}, function(){
				window.close();
			}, function(){
				
				});
	} else {
		window.close();
	}
	return false;
}


function ChangeInput (objSelect,objInput) {
	if (!objInput) return;
	var str = objInput.value;
	var arr = str.split(",");
	for (var i=0; i<arr.length; i++){
	  if(objSelect.value==arr[i])return;
	}
	if(objInput.value=='' || objInput.value==0 || objSelect.value==0){
	   objInput.value=objSelect.value
	}else{
	   objInput.value+=','+objSelect.value
	}
}

//移除相关文章
function remove_relation(sid,id) {
	var relation_ids = $('#relation').val();
	if(relation_ids !='' ) {
		$('#'+sid).remove();
		var r_arr = relation_ids.split('|');
		var newrelation_ids = '';
		$.each(r_arr, function(i, n){
			if(n!=id) {
				if(i==0) {
					newrelation_ids = n;
				} else {
				 newrelation_ids = newrelation_ids+'|'+n;
				}
			}
		});
		$('#relation').val(newrelation_ids);
	}
}
//显示相关文章
function show_relation(modelid,id) {
$.getJSON("?m=content&c=content&a=public_getjson_ids&modelid="+modelid+"&id="+id, function(json){
	var newrelation_ids = '';
	if(json==null) {
		alert('没有添加相关文章');
		return false;
	}
	$.each(json, function(i, n){
		newrelation_ids += "<li id='"+n.sid+"'>·<span>"+n.title+"</span><a href='javascript:;' class='close' onclick=\"remove_relation('"+n.sid+"',"+n.id+")\"></a></li>";
	});

	$('#relation_text').html(newrelation_ids);
}); 
}
//移除ID
function remove_id(id) {
	$('#'+id).remove();
}

function strlen_verify(obj, checklen, maxlen) {
	var v = obj.value, charlen = 0, maxlen = !maxlen ? 200 : maxlen, curlen = maxlen, len = strlen(v);
	for(var i = 0; i < v.length; i++) {
		if(v.charCodeAt(i) < 0 || v.charCodeAt(i) > 255) {
			curlen -= charset == 'utf-8' ? 2 : 1;
		}
	}
	if(curlen >= len) {
		$('#'+checklen).html(curlen - len);
	} else {
		obj.value = mb_cutstr(v, maxlen, true);
	}
}
function mb_cutstr(str, maxlen, dot) {
	var len = 0;
	var ret = '';
	var dot = !dot ? '...' : '';
	maxlen = maxlen - dot.length;
	for(var i = 0; i < str.length; i++) {
		len += str.charCodeAt(i) < 0 || str.charCodeAt(i) > 255 ? (charset == 'utf-8' ? 3 : 2) : 1;
		if(len > maxlen) {
			ret += dot;
			break;
		}
		ret += str.substr(i, 1);
	}
	return ret;
}
function strlen(str) {
	return ($.browser.msie && str.indexOf('\n') != -1) ? str.replace(/\r?\n/g, '_').length : str.length;
}

function set_title_color(color) {
	$('#title').css('color',color);
	$('#style_color').val(color);
}

function input_font_bold() {
	if($('#title').css('font-weight') == '700' || $('#title').css('font-weight')=='bold') {
		$('#title').css('font-weight','normal');
		$('#style_font_weight').val('');
	} else {
		$('#title').css('font-weight','bold');
		$('#style_font_weight').val('bold');
	}
}