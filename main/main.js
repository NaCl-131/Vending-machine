var main=new Vue({
    el:"#main",
    data() {
      return {
        tableData: [{
          id: '10005',
          name: 'shenzhen_01',
          location: '深圳',
          address:'广东省广州市天河区五山街五山路483号',
        }, {
          id: '115',
          name: 'shenzhen_01',
          location: '深圳',
          address:'广东省广州市天河区五山街五山路483号',
        }],

        FruitData:[{
          FruitId: '001',
          FruitName: '苹果',
          subtitle: 'sb',
          price:'广东省广州市天河区五山街五山路483号',
        },{
          FruitId: '002',
          FruitName: '苹w果',
          subtitle: 'saab',
          price:'广东省wdad广州市天河区五山街五山路483号',
        }],

        search: '',
        Fruit_Search:''
      }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
        handleClose(key, keyPath) {
        console.log(key, keyPath);
          },
          //test
        login:function(){
          axios({
						method: 'post',
						url: 'http://47.115.152.5:8080/admin/login.do',
						params: {
							username:"admin",
							password:"admin"
						},
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
					})
					.then(function(res){
						//console.log(res.data.msg);
						if(res.data.msg=="登录成功！")
						{
							console.log(res);
						}
						else{
							alert("用户名或密码错误");
						}
          });

          
          
        },
        doit:function(){
          axios({
						method: 'get',
						url:"http://47.115.152.5:8080/manage/devicies/list.do",
						headers:{
                'Cookie': 'JSESSIONID=3EF1CBCD0DC057CE541EF04A4D27501D'
            }
					})
					.then(function(res){
						//console.log(res.data.msg);
            console.log(res);
          });
        }
    },
})