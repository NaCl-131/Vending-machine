var login=new Vue({
	el:"#login",
 data() {
      return {
        numberValidateForm: {
          user: '',
		  password:''
        }
      };
    },
	methods: {
	      submitForm(formName) {
	        this.$refs[formName].validate((valid) => {
	          if (valid) {
	            // alert('submit!');
				console.log(this.numberValidateForm.user);
				console.log(this.numberValidateForm.password);
				//点击成功
	          } else {
	            console.log('error submit!!');
	            return false;
	          }
	        });
	      },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      }
	    },
		pust:function(){
			}
})