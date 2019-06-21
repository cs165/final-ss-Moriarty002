//
// TODO(you): Add the JavaScript necessary to complete your final project.
//
const PageControl = new Page();
(()=>{
    async function test(path,method,STG,LIN) {
        if(method.method === "GET")
        {
            const response = await fetch(path,method);
            const jason = await response.json();
            while (List.hasChildNodes())
            {
                List.removeChild(List.firstChild);
            }
            for (var i =1 ; i<jason.length ; i++) {
                if (STG == jason[i][0]) {
                    var frame = document.createElement("iframe");
                    var S1=jason[i][1];
                    var numg=S1.match(/\d+/g);
                    var aid,pg;
                    aid=numg[0];
                    if(numg[1]!=null)
                        pg=numg[1];
                    else
                        pg=1;
                    Src="//player.bilibili.com/player.html?aid="+aid+"&page="+pg+"";
                    frame.setAttribute("src",Src);
                    frame.setAttribute("scrolling","no");
                    frame.setAttribute("border","0");
                    frame.setAttribute("frameborder","0");
                    frame.setAttribute("width","auto");
                    frame.setAttribute("height","500");
                    frame.setAttribute("framespacing","0");
                    frame.setAttribute("allowfullscreen","true");
                    List.appendChild(frame);
                    break;
                }
            }
            for (var i =1 ; i<jason.length ; i++)
            {
                if(STG == jason[i][0])
                {
                    var par = document.createElement("p");
                    var ach = document.createElement("a");
                    ach.setAttribute("target","_blank");
                    ach.setAttribute("rel","noopener noreferrer");
                    ach.setAttribute("href",jason[i][1]);
                    ach.innerText=jason[i][1];
                    par.appendChild(ach);
                    console.log(par);
                    List.appendChild(par);
                }
            }
        }
        else if(method.method === "POST")
        {
            var bodyObj={};
            bodyObj['stage']=STG;bodyObj['link']=LIN;
            console.log(bodyObj);
            const response = await fetch(path,{
                                                method:'POST',
                                                headers :{
                                                    'Accept': 'application/json',
                                                    'Content-Type': 'application/json'
                                                },
                                                body:JSON.stringify(bodyObj)
                                            });
            const jason = await response.json();
        }
    }

    var Stage=document.querySelectorAll(".button");
    for (var i of Stage)
        i.addEventListener('click',choose);
    var formElement = document.querySelector('form');
    formElement.addEventListener('submit',onSubmit);
    var Stage = document.querySelector('#stage');
    var Link = document.querySelector('#link');
    var List = document.querySelector('#output');

    function choose()  //get
    {
        var text=event.target.textContent;
        var method={method: "GET"}
        test('/api',method,text,null);
    }
    function onSubmit() //post
    {
        event.preventDefault();
        var text='2-'+(Stage.selectedIndex+1);
        var link=Link.value;
        var method={method: "POST"}
        test('/api',method,text,link);
        PageControl.toSecond();
    }
})();
