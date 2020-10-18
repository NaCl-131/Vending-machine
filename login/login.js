var login = new Vue({
	el: "#login",
	data: {
		numberValidateForm: {
			user: '',
			password: '',
			phone:'',
			email:'',
			
		},
		l_or_r: "",
		radio: "登录",	//0为登录，1为注册
	},

	// },
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				/*
			 	if (valid) {
					alert('submit!');
					console.log(this.numberValidateForm.user);
					console.log(this.numberValidateForm.password);
				 	axios.post("47.115.152.5:8080/admin/login.do",{user:this.numberValidateForm.user,password:this.numberValidateForm.password}).then(function(res) {
						console.log(res); 
					})
					//点击成功
				} else {
					console.log('error submit!!');
					return false;
				} */
				console.log(this.numberValidateForm.user);
				console.log(this.numberValidateForm.password);
				// axios.post("http://47.115.152.5:8080/admin/login.do",{user:this.numberValidateForm.user,password:this.numberValidateForm.password}).then(function(res) {
				// 	console.log(res); 
				//})
				// axios.post("http://4k3s59.natappfree.cc/admin/login.do",
				// {
				// 	username:this.numberValidateForm.user,
				// 	password:this.numberValidateForm.password
				// })
				// .then(function(response){
				// 			console.log(response);
				// 		})
				// axios.get("http://4k3s59.natappfree.cc/manage/product/list.do").then(function(res){
				// 	console.log(res);
				// })

				// axios.post('http://47.115.152.5:8080/admin/login.do', {
				// 	//username:this.numberValidateForm.user,
				// 	//password:this.numberValidateForm.password
				// 	"username":this.numberValidateForm.user,
				// 	"password":this.numberValidateForm.password
				//   })
				//   .then(function (response) {
				// 	console.log(response);
				// 	console.log(this.numberValidateForm.user);
				// 	console.log(this.numberValidateForm.password);
				//   })
				//   .catch(function (error) {
				// 	console.log(error);
				//   });

				// axios.post('http://47.115.152.5:8080/admin/login.do', {
				// 	params: {
				// 		username:'admin',
				// 	 	password:'admin'
				// 	}
				//   })
				//   .then(function (response) {
				// 	console.log(response);
				//   })
				//   .catch(function (error) {
				// 	console.log(error);
				//   });
				// 发送 POST 请求
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
						console.log(res);
					});
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	},
	pust: function() {}
})
