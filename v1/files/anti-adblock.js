class {classname}{
    mode;iter;
    a1 = "{tag}";
    a1s;
    a2="{script}";
    a2s;
    $;
    {f5}(){
        let randElem = atob(this.{f2}(this.a1s)),k=true;
        if (randElem[0]==="#"){
            let id = randElem.slice(1,randElem.length);
            this.$("body").append("<div style=\"height: 10px;\" id = \""+id+"\"></div>");
            k = (!(this.$(randElem).css("display") === "none" || this.$(randElem).css("height") == "0"));
        }else{
            let classa = randElem.slice(1,randElem.length);
            this.$("body").append("<div style=\"height: 10px;\" class = \""+classa+"\"></div>");
            k=  (!(this.$(randElem).css("display") === "none" || this.$(randElem).css("height") == "0"));
        }
        this.$(randElem).remove();
        return k;
    }

    fav(i){
        var Ping=function(a){this.opt=a||{},this.favicon=this.opt.favicon||"/favicon.ico",this.timeout=this.opt.timeout||0,this.logError=this.opt.logError||!1};Ping.prototype.ping=function(a,b){function c(a){f.wasSuccess=!0,e.call(f,a)}function d(a){f.wasSuccess=!1,e.call(f,a)}function e(){g&&clearTimeout(g);var a=new Date-h;if("function"==typeof b)return this.wasSuccess?b(null,a):(f.logError&&console.error("error loading resource"),b("error",a))}var f=this;f.wasSuccess=!1,f.img=new Image,f.img.onload=c,f.img.onerror=d;var g,h=new Date;f.timeout&&(g=setTimeout(function(){e.call(f,void 0)},f.timeout)),f.img.src=a+f.favicon+"?"+ +new Date},"undefined"!=typeof exports?"undefined"!=typeof module&&module.exports&&(module.exports=Ping):window.Ping=Ping;
        return Ping.ping(i);
    }
    async {f6}(){
        var s = this;
        return new Promise(async function(resolve){
            resolve(await s.{f4}(atob(s.{f2}(s.a2s))));
        });
    }

    async check() {
        var b = this;
        return new Promise(async function(resolve){
            $(document).ready(async  function () {
                while (b.iter > 0) {
                    let aa = true;
                    switch (b.iter === 1) {
                        case false:
                            aa = b.{f5}();
                            break;
                        case true:
                            aa = await b.{f6}();
                            break;
                    }
                    if (!aa) {
                        resolve(true);
                        return;
                    } else {
                        b.iter--;
                    }
                }
                resolve(false);
            })

        });

    }
    {f3}(a,b){
        return Math.floor(Math.random() * (b - a + 1) ) + a;

    }
    async {f4}(a){
        var s = this;
        return new Promise(function(resolve){
            s.$.ajax({
                url:a,
                dataType: "script",
                success:function(data, text,r){
                    resolve(true);
                },
                error:function(data, text){
                    if (data.status == 404) {
                        resolve(true);
                    }else{
                        resolve(false);
                    }                }
            });
        });
    }
    {f2}(a){
        return a[this.{f3}(0,a.length -1)];
    }
    {f1}(){

        this.mode++;
        this.a1s= this.a1.split(";");
        this.a2s= this.a2.split(";");

        this.iter=this.{f3}(this.mode * 10 + 10, 5);
    }

    constructor(mode,j) {
        switch (mode) {
            case "low":
                this.mode = 0;
                break;
            case "normal":
                this.mode = 1;
                break;
            case "strict":
                this.mode = 2;
                break;
            default:
                this.mode = 1;
                break;
        }
        this.$ = j;
        this.{f1}();
    }

}
(async function(){
    var po = new {classname}("normal",$);
    console.log("There is adblock?:", await po.check());
})();