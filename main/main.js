var main = new Vue({
	el: "#main",
	data() {
		return {
			tableData: [{
				id: '10005',
				name: 'shenzhen_01',
				location: '深圳',
				address: '广东省广州市天河区五山街五山路483号',
			}, {
				id: '115',
				name: 'shenzhen_01',
				location: '深圳',
				address: '广东省广州市天河区五山街五山路483号',
			}],

			FruitData: [{
				FruitId: '001',
				FruitName: '苹果',
				subtitle: 'sb',
				price: '广东省广州市天河区五山街五山路483号',
			}, {
				FruitId: '002',
				FruitName: '苹w果',
				subtitle: 'saab',
				price: '广东省wdad广州市天河区五山街五山路483号',
			}],

			search: '',
			Fruit_Search: '',
			cookie: '' //保存登录信息
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
			 var that=this;
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
						var i=that;
						console.log(res);
						console.log(res.request.responseURL)
					//window.location.assign(res.request.responseURL)
						// window.location.assign("http://47.115.152.5:8080/admin/login.do?username=admin&password=admin")
						  //var headers = getAllResponseHeaders();
						  console.log(res.data)
						 // console.log(res.headers['set-cookie'])
					//	  let allCookies = document.cookie
					//	console.log(allCookies)
						 // console.log(this.getAllResponseHeaders())

					} else {
						alert("用户名或密码错误");
					}
				});
		},
		doit: function() {
			axios({
					method: 'get',
					url: "http://47.115.152.5:8080/manage/devicies/list.do",

					withCredentials: true,
				})
				.then(function(res) {
					//console.log(res.data.msg);
					console.log(res.data);
				});
		}
	},
})
