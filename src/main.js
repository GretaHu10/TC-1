let html = document.querySelector('#html');
let style = document.querySelector('#style');
let string = `/* 你好，打个招呼，认识一下
* 我要做一个太极
* 首先准备一个div
*/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我要把 div 变成一个八卦图
 * 首先，把 div 变成一个圆圈
 */
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*
 * 八卦是阴阳相成的
 * 一黑一白，可以用两个div
 * 这里使用背景渐变 CSS gradient background generator
 */
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 双鱼呈现 使用伪元素
 */
#div1::before {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border-radius: 50%;
}

#div1::after {
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    border-radius: 50%;
}
/* 画鱼点睛
 */
#div1::before {
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}

#div1::after {
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/* 旋转起来吧
 */
#div1{
    animation: abc 2s linear infinite;
}
`;
let string2 = "";

let n = 0;

// string = string.replace(/\n/g,'<br>')

// html.innerHTML = string.substring(0,n);这一行不要了，只改一个innerHTML,删掉的话，n就要=-1

let step = () => {
    setTimeout(() => {
        // console.log(n)
 
        if (string[n] === "\n"){
            //如果是回车，就把原文加上换行
            string2 = string2 + '<br>'
        }else if(string[n] === " "){ 
            string2 = string2 + "&nbsp";
        }else{  //如果不是回车，就照搬原文
            string2 = string2 + string[n] 
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,9999); 
        html.scrollTo(0,9999); 
        
    
     
        if(n < string.length - 1){
            n += 1;
            step();
        }
        
    }, 1);

};

step();

