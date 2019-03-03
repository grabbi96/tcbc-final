import validator from 'validator'

const registerValidator = ({name, email, password, confirmPassword}) =>{
  const error = {}



  if(name.touched && !name.value){
    error.name = "you must provide name"
  }

  if(email.touched && !email.value){
    error.email = "you must provide email"
  }else if (email.touched && !validator.isEmail(email.value)) {
    error.email = "email not valid"
  }

  if(password.touched && !password.value){
    error.password = "your musht provide password"
  }else if (password.touched && password.value.length < 6) {
    error.password = "password must ne greater or equal 6 character"
  }

if(confirmPassword.touched && !confirmPassword.value){
  error.confirmPassword = "you must provide confirm password"
}else if (confirmPassword.touched && (password.value !== confirmPassword.value)) {
  error.confirmPassword = "password dosen\' match"
}




  return error

}



export default registerValidator
