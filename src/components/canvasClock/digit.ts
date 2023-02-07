
export const renderDigitalClock = (context: any, props: any) => {
  let {
    top,
    left,
    width,
    height,
    bgColor,
    timeoffset,
    dialColor,
    time24h,
    fontSize,
  } = props;

  const now = new Date();
  now.setTime(now.getTime() + timeoffset * 1000);
  let sec: number | string = now.getSeconds();
  let min: number | string = now.getMinutes();
  let hour: number | string = time24h ? now.getHours() : now.getHours() % 12 ;
  let secBlink = ":"
  if (hour < 10) hour = "0" + hour.toString();
  if (min < 10) min = "0" + min;
  if (sec < 10) sec = "0" + sec;

  if (Number(sec) % 2 === 0) {
    secBlink = ":";
  }

  context.clearRect(left, top, width, height);
  context.beginPath();
  context.fillStyle = bgColor;
  context.rect(top, left, width, height);
  context.fill();
  context.closePath();

  context.fillStyle = dialColor;
  context.textAlign = "center";
  context.font = fontSize + "px DigitalNumbers-Regular";
  context.fillText(hour + secBlink + min + ":" + sec, (width / 2), height / 2.5);
  setTimeout(() => renderDigitalClock(context, props), 50);
}
