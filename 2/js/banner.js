;
$(function(){
    new banner(".bannerbox",".arrow",".now","1","1000")
  
})
function banner(ele,sel,morebtn,settype,target){
    this.ele = $(ele);
    this.sel = $(sel);
    this.morebtn = $(morebtn);
    this.settype = settype;
    this.target = target;
    //console.log(this.ele);
    if(!this.ele) return;
    this.sel = this.sel?this.sel:"";
    this.morebtn = this.morebtn?this.morebtn:"";
    this.settype = this.settype?this.settype:"opacity";
    //console.log(this.settype)
    this.init();
}
banner.prototype = {
    constructor:banner,
    init(){
        this.banner_li = this.ele.children();
        //console.log(this.banner_img)
        this.selbtn = this.sel.children();
        //console.log(this.selbtn)
        this.Index = 0;
       // console.log(this.settype)
       console.log(this.settype)
       //判断是否是透明度
        if(this.settype == "opacity"){
        this.selbtn.eq(0).on("click",$.proxy(this.setopacity,this))
        this.selbtn.eq(1).on("click",$.proxy(this.setopacity2,this))
        
        }else{
        this.selbtn.eq(0).on("click",$.proxy(this.natureUp,this))
        this.selbtn.eq(1).on("click",$.proxy(this.natureUp1,this))

        }


    },
    //从左到右刷新
    natureUp(){
        if (this.Index <= 0) {
            //return; 此时不应该return,应该让index变成最大的值，left也变成最大的left
        this.Index = 6;
        this.banner_li.eq(this.Index).css({
            zIndex:"2"
        })
        .siblings().css({
            zIndex:"0"
        })
        this.banner_li.eq(this.Index - 1).css({
            width:"0"
        })
        this.banner_li.eq(this.Index - 1).animate({
            width:"500px"
        },1000)
        }
        
        this.Index--;
        this.banner_li.eq(this.Index).css({
            zIndex:"2"
        })
        .siblings().css({
            zIndex:"0"
        })
        console.log(this.Index)
        this.banner_li.eq(this.Index).css({
            width:"0"
        })
        this.banner_li.eq(this.Index).animate({
            width:"500px"
        },1000)


    },
    natureUp1(){
        if (this.Index >= 6) {
            //让index变成0
           this.Index = 0;
           this.banner_li.eq(this.Index).css({
            zIndex:"1"
            })
            .siblings().css({
                zIndex:"0"
            })
            //              	让ul的left值瞬间变成0
            this.banner_li.eq(this.Index).css({
                width:"0"
            })
            this.banner_li.eq(this.Index).animate({
                width:"500px"
            },1000)
        }
        this.Index++;
        this.banner_li.eq(this.Index).css({
            zIndex:"1"
        })
        .siblings().css({
            zIndex:"0"
        })
        this.banner_li.eq(this.Index).css({
            width:"0"
        })
        this.banner_li.eq(this.Index).animate({
            width:"500px"
        },1000)

    },
    //淡入淡出
    setopacity(){
    //     this.banner_img.timer = setInterval(function(){
    //         console.log(this)
    //         var iNow = parseInt(getComputedStyle(this.banner_img)[this.settype] * 100);
    //         console.log(iNow)
    //         var speed = (this.target - iNow) / 6;
    //         speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
    //         if(iNow == this.target){
    //             clearInterval(this.banner_img.timer)
    //         }else{
    //             iNow == iNow + speed;
    //             this.banner_img.opacity = iNow / 100;
    //         }
    //     }.bind(this),5000);
    // },
    if (this.Index <= 0) {
        //return; 此时不应该return,应该让index变成最大的值，left也变成最大的left
    this.Index = 6;
    this.banner_li.eq(this.Index-1).css({
        zIndex:"1"
    })
    .siblings().css({
        zIndex:"0"
    })
    this.banner_li.eq(this.Index).fadeIn(300).siblings().fadeOut(300);
    
    }
    
    this.Index--;
    this.banner_li.eq(this.Index).css({
        zIndex:"1"
    })
    .siblings().css({
        zIndex:"0"
    })
    console.log(this.Index)
    this.banner_li.eq(this.Index).fadeIn(500).siblings().fadeOut(500);
    },
    setopacity2(){
        if (this.Index >= 6) {
            //让index变成0
           this.Index = 0;
           this.banner_li.eq(this.Index).css({
            zIndex:"1"
            })
            .siblings().css({
                zIndex:"0"
            })
            //              	让ul的left值瞬间变成0
            this.banner_li.eq(this.Index).fadeIn(500).siblings().fadeOut(500);
        }
        this.Index++;
        this.banner_li.eq(this.Index).css({
            zIndex:"1"
        })
        .siblings().css({
            zIndex:"0"
        })
         this.banner_li.eq(this.Index).fadeIn(500).siblings().fadeOut(500);
       
    }
}