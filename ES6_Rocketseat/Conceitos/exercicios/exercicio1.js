class Usuario{
  constructor(newEmail, newPassword){
    this.email = newEmail;
    this.password = newPassword;
  }

  isAdmin(){
    this.adminVerification = false;
    if (this.admin === true){
      this.adminVerification = true;
    }
  }
  

  imprimir(){
    this.isAdmin();
    console.log(this.email);
    console.log(this.password)
    console.log(this.adminVerification);
  }
}

class Admin extends Usuario{
  constructor(newEmail, newPassword){
    super(newEmail, newPassword);
    this.admin = true;
  }
}

const User1 = new Usuario('user@teste.com', 'user123');
const Adm1 = new Admin('admin@teste.com', 'admin123');


// document.querySelector("button.botao").onclick = () =>{
  Adm1.imprimir();
  console.log("");
  User1.imprimir();
// }