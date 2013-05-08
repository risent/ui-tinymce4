angular.module('ui.tinymce', []).directive('uiTinymce', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
	    
	    element.tinymce({
                // Location of TinyMCE script
                script_url: 'http://static.tinymce.com/tinymce/js/4.0b2/tinymce.min.js',
		language: 'zh_CN',
		plugins: [
		    "advlist autolink lists link image charmap print preview anchor",
		    "searchreplace visualblocks code fullscreen",
		    "insertdatetime media table contextmenu paste"
		],
		selector: 'textarea',

		setup: function (ed) {
		    ed.on('mousedown keydown', function (e) {
			if (this.isDirty()) {
			    this.save();
			    // tinymce inserts the value back to the textarea element, so we get the val from element (work's only for textareas)
			    ngModel.$setViewValue(element.val());
			    if (!scope.$$phase)
				scope.$apply();
			}
		    });
		}
	    });
        }
    }
});