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
				if(this.radio=="登录"){
				// console.log(this.numberValidateForm.user);
				// console.log(this.numberValidateForm.password);
					axios({
						method: 'post',
						url: 'http://47.115.152.5:8080/admin/login.do',
						params: {
							username:this.numberValidateForm.user,
							password:this.numberValidateForm.password
						},
						
					})
					.then(function(res){
						//console.log(res.data.msg);
						if(res.data.msg=="登录成功！")
						{
							alert("登陆成功");
							window.location.replace("../main/main.html");
						}
						else{
							alert("用户名或密码错误");
						}
					});
					}
					else{
						axios({
							method: 'post',
							url: 'http://47.115.152.5:8080/admin/register.do',
							params: {
								username:this.numberValidateForm.user,
								password:this.numberValidateForm.password,
								phone:this.numberValidateForm.phone,
								email:this.numberValidateForm.email
							},
							headers: {
								'Content-Type': 'application/x-www-form-urlencoded'
							},
						})
						.then(function(res){
							if(res.data.msg=="注册成功")
							{
								alert("注册成功，请返回登录");
							}
							else if(res.data.msg=="邮箱已被注册"){
								alert("邮箱已被注册！");
							}
							else if(res.data.msg=="该手机已被注册"){
								alert("该手机已被注册")
							}
							else if(res.data.msg=="用户名已存在"){
								alert("用户名已存在")
							}
						});
					}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	},
	pust: function() {}
})
