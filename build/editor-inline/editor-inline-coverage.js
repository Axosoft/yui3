if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/editor-inline/editor-inline.js']) {
   __coverage__['build/editor-inline/editor-inline.js'] = {"path":"build/editor-inline/editor-inline.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},"b":{},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":25},"end":{"line":1,"column":44}}},"2":{"name":"(anonymous_2)","line":19,"loc":{"start":{"line":19,"column":19},"end":{"line":19,"column":30}}},"3":{"name":"(anonymous_3)","line":24,"loc":{"start":{"line":24,"column":17},"end":{"line":24,"column":28}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":32,"column":67}},"2":{"start":{"line":19,"column":0},"end":{"line":21,"column":2}},"3":{"start":{"line":20,"column":4},"end":{"line":20,"column":63}},"4":{"start":{"line":23,"column":0},"end":{"line":27,"column":3}},"5":{"start":{"line":25,"column":8},"end":{"line":25,"column":44}},"6":{"start":{"line":29,"column":0},"end":{"line":29,"column":30}}},"branchMap":{},"code":["(function () { YUI.add('editor-inline', function (Y, NAME) {","","/**\r"," * Base class for InlineEditor. Instead to use an iframe, uses content editable element via ContentEditable Plugin.\r"," *\r"," *      var editor = new Y.InlineEditor({\r"," *          content: 'Foo'\r"," *      });\r"," *      editor.render('#demo');\r"," *\r"," * @class InlineEditor\r"," * @extends EditorBase\r"," * @module editor\r"," * @main editor\r"," * @submodule editor-inline\r"," * @constructor\r"," */\r","\r","var InlineEditor = function() {\r","    InlineEditor.superclass.constructor.apply(this, arguments);\r","};\r","\r","Y.extend(InlineEditor, Y.EditorBase, {\r","    initializer: function() {\r","        this.plug(Y.Plugin.ContentEditable);\r","    }\r","});\r","\r","Y.InlineEditor = InlineEditor;\r","","","}, '@VERSION@', {\"requires\": [\"editor-base\", \"content-editable\"]});","","}());"]};
}
var __cov_J5Jad5kxGwlwXFf4gCIR7A = __coverage__['build/editor-inline/editor-inline.js'];
__cov_J5Jad5kxGwlwXFf4gCIR7A.s['1']++;YUI.add('editor-inline',function(Y,NAME){__cov_J5Jad5kxGwlwXFf4gCIR7A.f['1']++;__cov_J5Jad5kxGwlwXFf4gCIR7A.s['2']++;var InlineEditor=function(){__cov_J5Jad5kxGwlwXFf4gCIR7A.f['2']++;__cov_J5Jad5kxGwlwXFf4gCIR7A.s['3']++;InlineEditor.superclass.constructor.apply(this,arguments);};__cov_J5Jad5kxGwlwXFf4gCIR7A.s['4']++;Y.extend(InlineEditor,Y.EditorBase,{initializer:function(){__cov_J5Jad5kxGwlwXFf4gCIR7A.f['3']++;__cov_J5Jad5kxGwlwXFf4gCIR7A.s['5']++;this.plug(Y.Plugin.ContentEditable);}});__cov_J5Jad5kxGwlwXFf4gCIR7A.s['6']++;Y.InlineEditor=InlineEditor;},'@VERSION@',{'requires':['editor-base','content-editable']});
