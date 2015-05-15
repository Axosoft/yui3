if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/button/button.js']) {
   __coverage__['build/button/button.js'] = {"path":"build/button/button.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":18},"end":{"line":1,"column":37}}},"2":{"name":"Button","line":24,"loc":{"start":{"line":24,"column":0},"end":{"line":24,"column":18}}},"3":{"name":"ToggleButton","line":131,"loc":{"start":{"line":131,"column":0},"end":{"line":131,"column":24}}},"4":{"name":"(anonymous_4)","line":161,"loc":{"start":{"line":161,"column":17},"end":{"line":161,"column":35}}},"5":{"name":"(anonymous_5)","line":179,"loc":{"start":{"line":179,"column":16},"end":{"line":179,"column":28}}},"6":{"name":"(anonymous_6)","line":187,"loc":{"start":{"line":187,"column":12},"end":{"line":187,"column":23}}},"7":{"name":"(anonymous_7)","line":201,"loc":{"start":{"line":201,"column":12},"end":{"line":201,"column":23}}},"8":{"name":"(anonymous_8)","line":219,"loc":{"start":{"line":219,"column":26},"end":{"line":219,"column":37}}},"9":{"name":"(anonymous_9)","line":227,"loc":{"start":{"line":227,"column":20},"end":{"line":227,"column":36}}},"10":{"name":"(anonymous_10)","line":243,"loc":{"start":{"line":243,"column":12},"end":{"line":243,"column":23}}},"11":{"name":"(anonymous_11)","line":292,"loc":{"start":{"line":292,"column":17},"end":{"line":292,"column":32}}},"12":{"name":"(anonymous_12)","line":295,"loc":{"start":{"line":295,"column":17},"end":{"line":295,"column":32}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":332,"column":70}},"2":{"start":{"line":10,"column":0},"end":{"line":13,"column":39}},"3":{"start":{"line":24,"column":0},"end":{"line":26,"column":1}},"4":{"start":{"line":25,"column":4},"end":{"line":25,"column":57}},"5":{"start":{"line":29,"column":0},"end":{"line":119,"column":3}},"6":{"start":{"line":121,"column":0},"end":{"line":121,"column":46}},"7":{"start":{"line":131,"column":0},"end":{"line":133,"column":1}},"8":{"start":{"line":132,"column":4},"end":{"line":132,"column":57}},"9":{"start":{"line":137,"column":0},"end":{"line":325,"column":3}},"10":{"start":{"line":162,"column":8},"end":{"line":165,"column":62}},"11":{"start":{"line":168,"column":8},"end":{"line":170,"column":11}},"12":{"start":{"line":172,"column":8},"end":{"line":172,"column":51}},"13":{"start":{"line":180,"column":8},"end":{"line":180,"column":37}},"14":{"start":{"line":188,"column":9},"end":{"line":189,"column":43}},"15":{"start":{"line":191,"column":8},"end":{"line":191,"column":52}},"16":{"start":{"line":193,"column":8},"end":{"line":193,"column":53}},"17":{"start":{"line":194,"column":8},"end":{"line":194,"column":86}},"18":{"start":{"line":202,"column":8},"end":{"line":207,"column":55}},"19":{"start":{"line":209,"column":8},"end":{"line":209,"column":52}},"20":{"start":{"line":211,"column":8},"end":{"line":211,"column":29}},"21":{"start":{"line":212,"column":8},"end":{"line":212,"column":60}},"22":{"start":{"line":220,"column":8},"end":{"line":220,"column":38}},"23":{"start":{"line":228,"column":8},"end":{"line":232,"column":80}},"24":{"start":{"line":234,"column":8},"end":{"line":234,"column":59}},"25":{"start":{"line":235,"column":8},"end":{"line":235,"column":33}},"26":{"start":{"line":244,"column":8},"end":{"line":244,"column":26}},"27":{"start":{"line":245,"column":8},"end":{"line":245,"column":83}},"28":{"start":{"line":293,"column":12},"end":{"line":293,"column":55}},"29":{"start":{"line":296,"column":12},"end":{"line":296,"column":55}},"30":{"start":{"line":328,"column":0},"end":{"line":328,"column":18}},"31":{"start":{"line":329,"column":0},"end":{"line":329,"column":30}}},"branchMap":{"1":{"line":164,"type":"cond-expr","locations":[{"start":{"line":164,"column":54},"end":{"line":164,"column":63}},{"start":{"line":164,"column":66},"end":{"line":164,"column":75}}]},"2":{"line":165,"type":"binary-expr","locations":[{"start":{"line":165,"column":28},"end":{"line":165,"column":52}},{"start":{"line":165,"column":56},"end":{"line":165,"column":61}}]},"3":{"line":206,"type":"cond-expr","locations":[{"start":{"line":206,"column":42},"end":{"line":206,"column":56}},{"start":{"line":206,"column":59},"end":{"line":206,"column":71}}]},"4":{"line":232,"type":"cond-expr","locations":[{"start":{"line":232,"column":47},"end":{"line":232,"column":61}},{"start":{"line":232,"column":64},"end":{"line":232,"column":78}}]}},"code":["(function () { YUI.add('button', function (Y, NAME) {","","/**\r"," * A Button Widget\r"," *\r"," * @module button\r"," * @since 3.5.0\r"," */\r","\r","var ButtonCore = Y.ButtonCore,\r","    CLASS_NAMES = ButtonCore.CLASS_NAMES,\r","    ARIA_STATES = ButtonCore.ARIA_STATES,\r","    ARIA_ROLES = ButtonCore.ARIA_ROLES;\r","\r","/**\r"," * Creates a Button\r"," *\r"," * @class Button\r"," * @extends Widget\r"," * @uses ButtonCore\r"," * @param config {Object} Configuration object\r"," * @constructor\r"," */\r","function Button() {\r","    Button.superclass.constructor.apply(this, arguments);\r","}\r","\r","/* Button extends Widget */\r","Y.extend(Button, Y.Widget,  {\r","\r","    // Y.Button prototype properties\r","\r","    /**\r","     * Bounding box template that will contain the Button's DOM subtree.\r","     *\r","     * @property BOUNDING_TEMPLATE\r","     * @type {String}\r","     * @default <button/>\r","     */\r","    BOUNDING_TEMPLATE : ButtonCore.prototype.TEMPLATE,\r","\r","    /**\r","     * Content box template\r","     *\r","     * @property CONTENT_TEMPLATE\r","     * @type {String}\r","     * @default null\r","     */\r","    CONTENT_TEMPLATE : null\r","\r","}, {\r","\r","    // Y.Button static properties\r","\r","    /**\r","     * The identity of the widget.\r","     *\r","     * @property NAME\r","     * @type String\r","     * @default 'button'\r","     * @readOnly\r","     * @protected\r","     * @static\r","     */\r","    NAME: ButtonCore.NAME,\r","\r","    /**\r","     * Static property used to define the default attribute configuration of\r","     * the Widget.\r","     *\r","     * @property ATTRS\r","     * @type {Object}\r","     * @protected\r","     * @static\r","     */\r","    ATTRS: ButtonCore.ATTRS,\r","\r","    /**\r","     * The text of the button's label\r","     *\r","     * @attribute label\r","     * @type String\r","     */\r","\r","    /**\r","     * The HTML of the button's label\r","     *\r","     * This attribute accepts HTML and inserts it into the DOM **without**\r","     * sanitization.  This attribute should only be used with HTML that has\r","     * either been escaped (using `Y.Escape.html`), or sanitized according to\r","     * the requirements of your application.\r","     *\r","     * If all you need is support for text labels, please use the `label`\r","     * attribute instead.\r","     *\r","     * @attribute labelHTML\r","     * @type HTML\r","     */\r","\r","    /**\r","     * @property HTML_PARSER\r","     * @type {Object}\r","     * @protected\r","     * @static\r","     */\r","    HTML_PARSER: {\r","        labelHTML: ButtonCore._getHTMLFromNode,\r","        disabled: ButtonCore._getDisabledFromNode\r","    },\r","\r","    /**\r","     * List of class names used in the Button's DOM\r","     *\r","     * @property CLASS_NAMES\r","     * @type Object\r","     * @static\r","     */\r","    CLASS_NAMES: CLASS_NAMES\r","});\r","\r","Y.mix(Button.prototype, ButtonCore.prototype);\r","\r","/**\r"," * Creates a ToggleButton\r"," *\r"," * @class ToggleButton\r"," * @extends Button\r"," * @param config {Object} Configuration object\r"," * @constructor\r"," */\r","function ToggleButton() {\r","    Button.superclass.constructor.apply(this, arguments);\r","}\r","\r","// TODO: move to ButtonCore subclass to enable toggle plugin, widget, etc.\r","/* ToggleButton extends Button */\r","Y.extend(ToggleButton, Button,  {\r","\r","    /**\r","     *\r","     *\r","     * @property trigger\r","     * @type {String}\r","     * @default\r","     */\r","    trigger: 'click',\r","\r","    /**\r","     *\r","     *\r","     * @property selectedAttrName\r","     * @type {String}\r","     * @default\r","     */\r","    selectedAttrName: '',\r","\r","    /**\r","     *\r","     * @method initializer\r","     */\r","    initializer: function (config) {\r","        var button = this,\r","            type = button.get('type'),\r","            selectedAttrName = (type === \"checkbox\" ? 'checked' : 'pressed'),\r","            selectedState = config[selectedAttrName] || false;\r","\r","        // Create the checked/pressed attribute\r","        button.addAttr(selectedAttrName, {\r","            value: selectedState\r","        });\r","\r","        button.selectedAttrName = selectedAttrName;\r","    },\r","\r","    /**\r","     *\r","     * @method destructor\r","     */\r","    destructor: function () {\r","        delete this.selectedAttrName;\r","    },\r","\r","    /**\r","     * @method bindUI\r","     * @description Hooks up events for the widget\r","     */\r","    bindUI: function() {\r","         var button = this,\r","             cb = button.get('contentBox');\r","\r","        ToggleButton.superclass.bindUI.call(button);\r","\r","        cb.on(button.trigger, button.toggle, button);\r","        button.after(button.selectedAttrName + 'Change', button._afterSelectedChange);\r","    },\r","\r","    /**\r","     * @method syncUI\r","     * @description Syncs the UI for the widget\r","     */\r","    syncUI: function() {\r","        var button = this,\r","            cb = button.get('contentBox'),\r","            type = button.get('type'),\r","            ROLES = ToggleButton.ARIA_ROLES,\r","            role = (type === 'checkbox' ? ROLES.CHECKBOX : ROLES.TOGGLE),\r","            selectedAttrName = button.selectedAttrName;\r","\r","        ToggleButton.superclass.syncUI.call(button);\r","\r","        cb.set('role', role);\r","        button._uiSetSelected(button.get(selectedAttrName));\r","    },\r","\r","    /**\r","     * @method _afterSelectedChange\r","     * @private\r","     */\r","    _afterSelectedChange: function(e){\r","        this._uiSetSelected(e.newVal);\r","    },\r","\r","    /**\r","     * @method _uiSetSelected\r","     * @private\r","     */\r","    _uiSetSelected: function(value) {\r","        var button = this,\r","            cb = button.get('contentBox'),\r","            STATES = ToggleButton.ARIA_STATES,\r","            type = button.get('type'),\r","            ariaState = (type === 'checkbox' ? STATES.CHECKED : STATES.PRESSED);\r","\r","        cb.toggleClass(Button.CLASS_NAMES.SELECTED, value);\r","        cb.set(ariaState, value);\r","    },\r","\r","    /**\r","     * @method toggle\r","     * @description Toggles the selected/pressed/checked state of a ToggleButton\r","     * @public\r","     */\r","    toggle: function() {\r","        var button = this;\r","        button._set(button.selectedAttrName, !button.get(button.selectedAttrName));\r","    }\r","\r","}, {\r","\r","    /**\r","     * The identity of the widget.\r","     *\r","     * @property NAME\r","     * @type {String}\r","     * @default 'buttongroup'\r","     * @readOnly\r","     * @protected\r","     * @static\r","     */\r","    NAME: 'toggleButton',\r","\r","    /**\r","     * Static property used to define the default attribute configuration of\r","     * the Widget.\r","     *\r","     * @property ATTRS\r","     * @type {Object}\r","     * @protected\r","     * @static\r","     */\r","    ATTRS: {\r","\r","       /**\r","        *\r","        *\r","        * @attribute type\r","        * @type String\r","        */\r","        type: {\r","            value: 'toggle',\r","            writeOnce: 'initOnly'\r","        }\r","    },\r","\r","    /**\r","     * @property HTML_PARSER\r","     * @type {Object}\r","     * @protected\r","     * @static\r","     */\r","    HTML_PARSER: {\r","        checked: function(node) {\r","            return node.hasClass(CLASS_NAMES.SELECTED);\r","        },\r","        pressed: function(node) {\r","            return node.hasClass(CLASS_NAMES.SELECTED);\r","        }\r","    },\r","\r","    /**\r","     * @property ARIA_STATES\r","     * @type {Object}\r","     * @protected\r","     * @static\r","     */\r","    ARIA_STATES: ARIA_STATES,\r","\r","    /**\r","     * @property ARIA_ROLES\r","     * @type {Object}\r","     * @protected\r","     * @static\r","     */\r","    ARIA_ROLES: ARIA_ROLES,\r","\r","    /**\r","     * Array of static constants used to identify the classnames applied to DOM nodes\r","     *\r","     * @property CLASS_NAMES\r","     * @type Object\r","     * @static\r","     */\r","    CLASS_NAMES: CLASS_NAMES\r","\r","});\r","\r","// Export\r","Y.Button = Button;\r","Y.ToggleButton = ToggleButton;\r","","","}, '@VERSION@', {\"requires\": [\"button-core\", \"cssbutton\", \"widget\"]});","","}());"]};
}
var __cov_BK1o_AjQ9P3TgSmDw5_iQg = __coverage__['build/button/button.js'];
__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['1']++;YUI.add('button',function(Y,NAME){__cov_BK1o_AjQ9P3TgSmDw5_iQg.f['1']++;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['2']++;var ButtonCore=Y.ButtonCore,CLASS_NAMES=ButtonCore.CLASS_NAMES,ARIA_STATES=ButtonCore.ARIA_STATES,ARIA_ROLES=ButtonCore.ARIA_ROLES;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['3']++;function Button(){__cov_BK1o_AjQ9P3TgSmDw5_iQg.f['2']++;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['4']++;Button.superclass.constructor.apply(this,arguments);}__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['5']++;Y.extend(Button,Y.Widget,{BOUNDING_TEMPLATE:ButtonCore.prototype.TEMPLATE,CONTENT_TEMPLATE:null},{NAME:ButtonCore.NAME,ATTRS:ButtonCore.ATTRS,HTML_PARSER:{labelHTML:ButtonCore._getHTMLFromNode,disabled:ButtonCore._getDisabledFromNode},CLASS_NAMES:CLASS_NAMES});__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['6']++;Y.mix(Button.prototype,ButtonCore.prototype);__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['7']++;function ToggleButton(){__cov_BK1o_AjQ9P3TgSmDw5_iQg.f['3']++;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['8']++;Button.superclass.constructor.apply(this,arguments);}__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['9']++;Y.extend(ToggleButton,Button,{trigger:'click',selectedAttrName:'',initializer:function(config){__cov_BK1o_AjQ9P3TgSmDw5_iQg.f['4']++;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['10']++;var button=this,type=button.get('type'),selectedAttrName=type==='checkbox'?(__cov_BK1o_AjQ9P3TgSmDw5_iQg.b['1'][0]++,'checked'):(__cov_BK1o_AjQ9P3TgSmDw5_iQg.b['1'][1]++,'pressed'),selectedState=(__cov_BK1o_AjQ9P3TgSmDw5_iQg.b['2'][0]++,config[selectedAttrName])||(__cov_BK1o_AjQ9P3TgSmDw5_iQg.b['2'][1]++,false);__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['11']++;button.addAttr(selectedAttrName,{value:selectedState});__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['12']++;button.selectedAttrName=selectedAttrName;},destructor:function(){__cov_BK1o_AjQ9P3TgSmDw5_iQg.f['5']++;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['13']++;delete this.selectedAttrName;},bindUI:function(){__cov_BK1o_AjQ9P3TgSmDw5_iQg.f['6']++;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['14']++;var button=this,cb=button.get('contentBox');__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['15']++;ToggleButton.superclass.bindUI.call(button);__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['16']++;cb.on(button.trigger,button.toggle,button);__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['17']++;button.after(button.selectedAttrName+'Change',button._afterSelectedChange);},syncUI:function(){__cov_BK1o_AjQ9P3TgSmDw5_iQg.f['7']++;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['18']++;var button=this,cb=button.get('contentBox'),type=button.get('type'),ROLES=ToggleButton.ARIA_ROLES,role=type==='checkbox'?(__cov_BK1o_AjQ9P3TgSmDw5_iQg.b['3'][0]++,ROLES.CHECKBOX):(__cov_BK1o_AjQ9P3TgSmDw5_iQg.b['3'][1]++,ROLES.TOGGLE),selectedAttrName=button.selectedAttrName;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['19']++;ToggleButton.superclass.syncUI.call(button);__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['20']++;cb.set('role',role);__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['21']++;button._uiSetSelected(button.get(selectedAttrName));},_afterSelectedChange:function(e){__cov_BK1o_AjQ9P3TgSmDw5_iQg.f['8']++;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['22']++;this._uiSetSelected(e.newVal);},_uiSetSelected:function(value){__cov_BK1o_AjQ9P3TgSmDw5_iQg.f['9']++;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['23']++;var button=this,cb=button.get('contentBox'),STATES=ToggleButton.ARIA_STATES,type=button.get('type'),ariaState=type==='checkbox'?(__cov_BK1o_AjQ9P3TgSmDw5_iQg.b['4'][0]++,STATES.CHECKED):(__cov_BK1o_AjQ9P3TgSmDw5_iQg.b['4'][1]++,STATES.PRESSED);__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['24']++;cb.toggleClass(Button.CLASS_NAMES.SELECTED,value);__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['25']++;cb.set(ariaState,value);},toggle:function(){__cov_BK1o_AjQ9P3TgSmDw5_iQg.f['10']++;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['26']++;var button=this;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['27']++;button._set(button.selectedAttrName,!button.get(button.selectedAttrName));}},{NAME:'toggleButton',ATTRS:{type:{value:'toggle',writeOnce:'initOnly'}},HTML_PARSER:{checked:function(node){__cov_BK1o_AjQ9P3TgSmDw5_iQg.f['11']++;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['28']++;return node.hasClass(CLASS_NAMES.SELECTED);},pressed:function(node){__cov_BK1o_AjQ9P3TgSmDw5_iQg.f['12']++;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['29']++;return node.hasClass(CLASS_NAMES.SELECTED);}},ARIA_STATES:ARIA_STATES,ARIA_ROLES:ARIA_ROLES,CLASS_NAMES:CLASS_NAMES});__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['30']++;Y.Button=Button;__cov_BK1o_AjQ9P3TgSmDw5_iQg.s['31']++;Y.ToggleButton=ToggleButton;},'@VERSION@',{'requires':['button-core','cssbutton','widget']});
