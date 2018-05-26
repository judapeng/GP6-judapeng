;
$(function(){

    new renderPage("http://mce.meilishuo.com/jsonp/get/3?offset=0&frame=1&trace=0&limit=10&endId=0&pid=106888&_=1526528205879",".body1box");

})
    //创建函数对象
    function renderPage(url,sel){
        this.url = url;
        //console.log(this.url)
        this.sel = $(sel)
        console.log(this)
       // if(!this.url || !this.sel) return;
        this.init();
    }
    renderPage.prototype = {
        constructor:renderPage,
        init(){
            //console.log(this.url)
            // this.loading()
            // .then(function(res){
            //    // console.log(res)
            // this.json = res.data.list;
            //   console.log(this.json)
            // this.render()
            // }.bind(this));
            this.render()

        },
        render(){
            // console.log(this.url)
            // var opt ={
            //     url:this.url,
            //     type:"get"
            // }
            // return $.ajax(opt);
            $.ajax({
                //请求方式为get
                type:"GET",
                //json文件位置
                url:this.url,
                //返回数据格式为jsonp
                dataType: "jsonp",
                //请求成功完成后要执行的方法
                success: function(data){
                    this.json = data.data.list;
                    console.log(this.json)
                    var html1 = "";
                    this.json.forEach(function(item){
                                 console.log(item)
                                html1 += ` <div class="shopbox">
                                <div class="imgbox">
                                    <img src="${item.image}" alt="">
                                </div>
                                <div class="money">
                                    <span class="fuhao">￥</span>
                                    <i class="shuzi">${item.discountPrice}</i>
                                    <span class="xing"></span>
                                    <span class="shoucang">${item.itemLikes}</span>
                                </div>
                                <div class="filt" data-id="${item.userId}>
                                    <span class="bg-font">优选</span>
                                    <i class="font-style">${item.title}</i>
                                </div>
                            </div>
                            `
                             }.bind(this))
                             this.sel.html(html1);


                }.bind(this)
            })
                    //使用$.each方法遍历返回的数据date,插入到id为#result中
                    //console.log(data)
                   //  console.log(data.data)
                  
        },
        // render(){
        //     var html1 = "";
        //     //console.log(this.json)
        //     //遍历json，找到所需内容
        //      this.json.forEach(function(item){
        //          console.log(item)
        //         html1 += ` <div class="shopbox">
        //         <div class="imgbox">
        //             <img src="${item.image}" alt="">
        //         </div>
        //         <div class="money">
        //             <span class="fuhao">￥</span>
        //             <i class="shuzi">${item.discountPrice}</i>
        //             <span class="xing"></span>
        //             <span class="shoucang">${item.itemLikes}</span>
        //         </div>
        //         <div class="filt" data-id="${item.userId}>
        //             <span class="bg-font">优选</span>
        //             <i class="font-style">${item.title}</i>
        //         </div>
        //     </div>
        //     `
        //      }.bind(this))
        //      this.sel.html(html1);

        // }
        


    }