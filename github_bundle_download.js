(function() {
	var saveFile = function(data, fileName) {
		var blob = new Blob([data], {
			type: 'text/plain'
		});
		var elem = window.document.createElement('a');
		elem.href = window.URL.createObjectURL(blob);
		elem.download = fileName;
		elem.click();
	};

	var ele=$('h2.f3');
	ele.text('Download all')
	.css('cursor','pointer')
	.click(function(eventObject) {
		var ele = eventObject.target;
		var parent_ele = ele.parentElement;
		var download_link='';
		$('ul>li>a', parent_ele).each(function(index, ele) {
			download_link+=ele.href+'\r\n';
		});
		var file_name=$('a[data-pjax="#js-repo-pjax-container"]').text()+'-'
		+$('.release-header>.release-title>a',parent_ele.parentElement).text()+'.txt';
		saveFile(download_link,file_name);
	});


})();