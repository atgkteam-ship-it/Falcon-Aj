export function truncateText(text,length=40){
if(text.length<=length)return text;
return text.substring(0,length)+'...';
}