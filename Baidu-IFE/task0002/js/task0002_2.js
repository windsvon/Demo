function timeCount() {
	// 目标时间
	var timeTemp = t.value.split("-"); //return an array [year, month, day]
	timeTarget = new Date(timeTemp[0], timeTemp[1]-1, timeTemp[2], 0, 0, 0 ,0);
	// 计算时间差
	var timeCurrent = new Date();
	var timeDiff = (Number(timeTarget) - Number(timeCurrent))/1000; //return the time diff in seconds
	var daysDiff = Math.floor(timeDiff/86400);
	var hoursDiff = Math.floor((timeDiff % 86400)/3600);
	var minutesDiff = Math.floor(((timeDiff % 86400) % 3600)/60);
	var secondsDiff = Math.floor(((timeDiff % 86400) % 3600) % 60);

	//将时间差写入文件	
	if (timeDiff >= 0) {
		elMsg.textContent = "距离" + timeTemp[0] + "年" + timeTemp[1] + "月" + timeTemp[2] + "日还有" + daysDiff + "天" + hoursDiff + "小时" + minutesDiff + "分" + secondsDiff + "秒";
		setTimeout(timeCount, 1000);
	} else {
		elMsg.textContent = "请输入一个未来的日期！"
	}

}

var t = document.getElementById("target-time");
var elMsg = document.getElementById("time-count");
var btn = document.getElementById("btn");
addEvent(btn, "click", timeCount);
