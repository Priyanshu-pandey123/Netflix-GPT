

export const validateForm=(email,password)=>{

 const emailValid= /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 const passwordValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
 if(!emailValid) return "enter valid email"
 if(!passwordValid) return "enter valid password"

 return null;

}