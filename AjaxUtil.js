if(!Herm){
	var Herm = {};
}
Herm.Ajax = {

	// default timeout is 30 seconds
	timeOut : 30000,
	url : "",
	params : "",
	callBackFn : undefined,	

	// url, callback, params, type, timeout
	request : function() {		
		var args = arguments[0];
		this.paraseArguments(args);
	},

	paraseArguments : function(args) {				
		for(arg in args){			
			var key = arg.toLowerCase;
			switch(key) {
				case "url" :
					this.setUrl(args[key]);
					break;
				case "params" :
					this.parseParams(args[key]);
					break;
				case "callback" :
					this.bindCallBack(args[key]);
					break;
				case "timeout" :
					this.setTimeOut(args[key]);
					break;
			}
		}
	}


	getAjaxObject : function() {
		var XmlHttpRequest = new XmlHttpRequest();
		if(!XmlHttpRequest) {

		}
	},

	setUrl : function(url) {
		this.url = url;
	},

	parseParams : function(params) {
		// key=value&key=value
	},

	bindCallBack : function(callBack) {

	},

	setTimeOut : function(time) {
		this.timeOut = time;
	}
}
