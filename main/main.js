var main = new Vue({
	el: "#main",
	data() {
		return {
			tableData: [
				
					//设备信息
				
			],

			FruitData: [
				
					//商品信息
				
			],

			search: '',
			Fruit_Search: '',
			//cookie: '' //保存登录信息
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
		login: function() {

			axios({
					method: 'post',
					url: 'http://47.115.152.5:8080/admin/login.do',
					params: {
						username: "admin",
						password: "admin"
					},
					withCredentials: true,	
			
				})
				.then(function(res) {
					//console.log(res.data.msg);
					if (res.data.msg == "登录成功！") {
						//var i=that;
						console.log(res);
						console.log(res.request.responseURL)
						
						  console.log(res.data)
						//   console.log(cookie);

					} else {
						alert("用户名或密码错误");
					}
				});
		},
		doit: function() {
					 var that=this;
			axios({
					method: 'get',
					url: "http://47.115.152.5:8080/manage/devicies/list.do",

					withCredentials: true,
					//允许携带
				})
				.then(function(res) {
					 that.tableData=res.data.data;
					console.log(res.data);
				});
		},
		sp:function(){
			var that = this;
			axios({
				method:"get",
				url:"http://47.115.152.5:8080/manage/product/list.do",
				withCredentials:true,
			})
			.then(function(res){
				that.FruitData=res.data.data.list;
				console.log(res.data.data.list);
				
			})
		}
	},
})
