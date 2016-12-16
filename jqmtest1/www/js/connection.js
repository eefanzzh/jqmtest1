var resolve;

var s,f;
$(document).ready(function() {
	try {
		//ble.initialize(resolve, {request:true, statusReceiver:false});
//		$("#msg").text(cordova.version);
		for(var p in bluetoothSerial) {
			if(typeof bluetoothSerial[p] == "function") {
				$("#msg").text($("#msg").text()+"\n"+p);
			}
		}
//		cordova.register();
//		cordova.exec(s, f, "BluetoothSerial", "isEnabled", []);
//		var bts = new cordova-plugin-bluetooth-serial.BluetoothSerial_browser();
//		$("#msg").text(cordova.BluetoothSerial.isEnabled);
//		for(s in cordova.BluetoothSerial) {
//			if(typeof cordova.BluetoothSerial[s] == 'function') {
//				$("#msg").text($("#msg").text()+cordova.BluetoothSerial[s]);
//			}
//			alert("aaa");
//		}
//		var bts = new require("cordova-plugin-bluetooth-serial.bluetoothSerial");
		
		$("#msg").text(""+bts);
	}catch (e) {
		$("#msg").text(e.message);
	}
	//console.log("resolve = "+resolve);
});