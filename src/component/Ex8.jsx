import React, {Component, createRef} from "react";

class Ex8 extends Component {
    constructor(props){
        super(props);
    this.fName = createRef()
    this.fEmail = createRef()
    this.fMobile = createRef()
    }

     submitHandler (e) {
       e.preventDefault();
       try {
           const user ={
               name : this.fName.current.value,
               email :this.fEmail.current.value,
               mobile : this.fMobile.current.value
           };

           console.log("user =" ,user)
           
       } catch (error) {
           console.log(error.message)
       }
    }
 render() {
    return(
   <div className="container">
       <div className="row">
           <div className="col-md-12 text-center">
               <h3 className="display-3 text-success">createRef class(React Mutable Ref)</h3>
           </div>
       </div>

       <div className="row">
           <div className="col-md-6 offset-md-3">
               <div className="card">
                   <div className="card-body">
                       <form onSubmit={this.submitHandler.bind(this)}>
                           <div className="form-group mt-2">
                               <label htmlFor="name">Name</label>
                               <input type="text" name="name" id="name" ref={this.fName} className="form-control" required/>
                           </div>

                           <div className="form-group mt-2">
                               <label htmlFor="email">Email</label>
                               <input type="email" name="email" id="email" ref={this.fEmail} className="form-control" required/>
                           </div>

                           <div className="form-group mt-2">
                               <label htmlFor="mobile">Mobile</label>
                               <input type="number" name="mobile" id="name" ref={this.fMobile} className="form-control" required/>
                           </div>

                           <div className="form-group mt-2">
                               <input type="submit" value="register" className="btn btn-outline-success"/>
                           </div>
                       </form>
                   </div>
               </div>
           </div>

         
       </div>
   </div>
   )
 }
}


export default Ex8