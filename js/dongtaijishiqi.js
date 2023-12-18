 // 获取计时器元素
 var timerElement = document.getElementById("timer");
    
 // 设置目标时间，以毫秒为单位，这里设置为1小时
 var targetTime = new Date().getTime() + (60 * 60 * 1000);

 // 更新倒计时器显示
 function updateTimer() {
   // 计算当前时间与目标时间之间的差值
   var currentTime = new Date().getTime();
   var remainingTime = targetTime - currentTime;

   // 如果倒计时结束，则停止计时器
   if (remainingTime <= 0) {
     timerElement.textContent = "倒计时结束";
     return;
   }

   // 将毫秒转换为小时、分钟和秒钟
   var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

   // 格式化时间为 HH:MM:SS
   var formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);

   // 更新倒计时器显示
   timerElement.textContent = formattedTime;

   // 每隔一秒执行一次
   setTimeout(updateTimer, 1000);
 }

 // 格式化时间为两位数
 function formatTime(time) {
   return time < 10 ? "0" + time : time;
 }

 // 开始倒计时器
 updateTimer();