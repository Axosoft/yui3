if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/datasource-polling/datasource-polling.js']) {
   __coverage__['build/datasource-polling/datasource-polling.js'] = {"path":"build/datasource-polling/datasource-polling.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":30},"end":{"line":1,"column":49}}},"2":{"name":"Pollable","line":15,"loc":{"start":{"line":15,"column":0},"end":{"line":15,"column":20}}},"3":{"name":"(anonymous_3)","line":55,"loc":{"start":{"line":55,"column":17},"end":{"line":55,"column":41}}},"4":{"name":"(anonymous_4)","line":69,"loc":{"start":{"line":69,"column":19},"end":{"line":69,"column":37}}},"5":{"name":"(anonymous_5)","line":85,"loc":{"start":{"line":85,"column":23},"end":{"line":85,"column":34}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":93,"column":52}},"2":{"start":{"line":15,"column":0},"end":{"line":17,"column":1}},"3":{"start":{"line":16,"column":4},"end":{"line":16,"column":25}},"4":{"start":{"line":19,"column":0},"end":{"line":88,"column":2}},"5":{"start":{"line":56,"column":8},"end":{"line":56,"column":73}},"6":{"start":{"line":57,"column":8},"end":{"line":57,"column":34}},"7":{"start":{"line":59,"column":8},"end":{"line":59,"column":54}},"8":{"start":{"line":60,"column":8},"end":{"line":60,"column":20}},"9":{"start":{"line":71,"column":8},"end":{"line":71,"column":23}},"10":{"start":{"line":72,"column":8},"end":{"line":77,"column":9}},"11":{"start":{"line":74,"column":12},"end":{"line":74,"column":41}},"12":{"start":{"line":76,"column":12},"end":{"line":76,"column":39}},"13":{"start":{"line":86,"column":8},"end":{"line":86,"column":58}},"14":{"start":{"line":90,"column":0},"end":{"line":90,"column":40}}},"branchMap":{"1":{"line":71,"type":"binary-expr","locations":[{"start":{"line":71,"column":13},"end":{"line":71,"column":16}},{"start":{"line":71,"column":20},"end":{"line":71,"column":22}}]},"2":{"line":72,"type":"if","locations":[{"start":{"line":72,"column":8},"end":{"line":72,"column":8}},{"start":{"line":72,"column":8},"end":{"line":72,"column":8}}]}},"code":["(function () { YUI.add('datasource-polling', function (Y, NAME) {","","/**\r"," * Extends DataSource with polling functionality.\r"," *\r"," * @module datasource\r"," * @submodule datasource-polling\r"," */\r","\r","/**\r"," * Adds polling to the DataSource Utility.\r"," * @class Pollable\r"," * @extends DataSource.Local\r"," */\r","function Pollable() {\r","    this._intervals = {};\r","}\r","\r","Pollable.prototype = {\r","\r","    /**\r","    * @property _intervals\r","    * @description Hash of polling interval IDs that have been enabled,\r","    * stored here to be able to clear all intervals.\r","    * @private\r","    */\r","    _intervals: null,\r","\r","    /**\r","     * Sets up a polling mechanism to send requests at set intervals and\r","     * forward responses to given callback.\r","     *\r","     * @method setInterval\r","     * @param msec {Number} Length of interval in milliseconds.\r","     * @param [request] {Object} An object literal with the following properties:\r","     *     <dl>\r","     *     <dt><code>request</code></dt>\r","     *     <dd>The request to send to the live data source, if any.</dd>\r","     *     <dt><code>callback</code></dt>\r","     *     <dd>An object literal with the following properties:\r","     *         <dl>\r","     *         <dt><code>success</code></dt>\r","     *         <dd>The function to call when the data is ready.</dd>\r","     *         <dt><code>failure</code></dt>\r","     *         <dd>The function to call upon a response failure condition.</dd>\r","     *         <dt><code>argument</code></dt>\r","     *         <dd>Arbitrary data payload that will be passed back to the success and failure handlers.</dd>\r","     *         </dl>\r","     *     </dd>\r","     *     <dt><code>cfg</code></dt>\r","     *     <dd>Configuration object, if any.</dd>\r","     *     </dl>\r","     * @return {Number} Interval ID.\r","     */\r","    setInterval: function(msec, request) {\r","        var x = Y.later(msec, this, this.sendRequest, [ request ], true);\r","        this._intervals[x.id] = x;\r","        // First call happens immediately, but async\r","        Y.later(0, this, this.sendRequest, [request]);\r","        return x.id;\r","    },\r","\r","    /**\r","     * Disables polling mechanism associated with the given interval ID.\r","     *\r","     * @method clearInterval\r","     * @param id {Number} Interval ID.\r","     */\r","    clearInterval: function(id, key) {\r","        // In case of being called by clearAllIntervals()\r","        id = key || id;\r","        if(this._intervals[id]) {\r","            // Clear the interval\r","            this._intervals[id].cancel();\r","            // Clear from tracker\r","            delete this._intervals[id];\r","        }\r","    },\r","\r","    /**\r","     * Clears all intervals.\r","     *\r","     * @method clearAllIntervals\r","     */\r","    clearAllIntervals: function() {\r","        Y.each(this._intervals, this.clearInterval, this);\r","    }\r","};\r","\r","Y.augment(Y.DataSource.Local, Pollable);\r","","","}, '@VERSION@', {\"requires\": [\"datasource-local\"]});","","}());"]};
}
var __cov_k9FlZQEJVsDks2tbgqGUVQ = __coverage__['build/datasource-polling/datasource-polling.js'];
__cov_k9FlZQEJVsDks2tbgqGUVQ.s['1']++;YUI.add('datasource-polling',function(Y,NAME){__cov_k9FlZQEJVsDks2tbgqGUVQ.f['1']++;__cov_k9FlZQEJVsDks2tbgqGUVQ.s['2']++;function Pollable(){__cov_k9FlZQEJVsDks2tbgqGUVQ.f['2']++;__cov_k9FlZQEJVsDks2tbgqGUVQ.s['3']++;this._intervals={};}__cov_k9FlZQEJVsDks2tbgqGUVQ.s['4']++;Pollable.prototype={_intervals:null,setInterval:function(msec,request){__cov_k9FlZQEJVsDks2tbgqGUVQ.f['3']++;__cov_k9FlZQEJVsDks2tbgqGUVQ.s['5']++;var x=Y.later(msec,this,this.sendRequest,[request],true);__cov_k9FlZQEJVsDks2tbgqGUVQ.s['6']++;this._intervals[x.id]=x;__cov_k9FlZQEJVsDks2tbgqGUVQ.s['7']++;Y.later(0,this,this.sendRequest,[request]);__cov_k9FlZQEJVsDks2tbgqGUVQ.s['8']++;return x.id;},clearInterval:function(id,key){__cov_k9FlZQEJVsDks2tbgqGUVQ.f['4']++;__cov_k9FlZQEJVsDks2tbgqGUVQ.s['9']++;id=(__cov_k9FlZQEJVsDks2tbgqGUVQ.b['1'][0]++,key)||(__cov_k9FlZQEJVsDks2tbgqGUVQ.b['1'][1]++,id);__cov_k9FlZQEJVsDks2tbgqGUVQ.s['10']++;if(this._intervals[id]){__cov_k9FlZQEJVsDks2tbgqGUVQ.b['2'][0]++;__cov_k9FlZQEJVsDks2tbgqGUVQ.s['11']++;this._intervals[id].cancel();__cov_k9FlZQEJVsDks2tbgqGUVQ.s['12']++;delete this._intervals[id];}else{__cov_k9FlZQEJVsDks2tbgqGUVQ.b['2'][1]++;}},clearAllIntervals:function(){__cov_k9FlZQEJVsDks2tbgqGUVQ.f['5']++;__cov_k9FlZQEJVsDks2tbgqGUVQ.s['13']++;Y.each(this._intervals,this.clearInterval,this);}};__cov_k9FlZQEJVsDks2tbgqGUVQ.s['14']++;Y.augment(Y.DataSource.Local,Pollable);},'@VERSION@',{'requires':['datasource-local']});
