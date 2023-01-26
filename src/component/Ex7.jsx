import React, {useRef} from 'react'

function Ex7() {
     const fName = useRef()
     const fEmail = useRef()
     const fMobile = useRef()

     const submitHandler = (e) =>{
        e.preventDefault();
        try {
            const user ={
                name : fName.current.value,
                email : fEmail.current.value,
                mobile : fMobile.current.value,
            };

            console.log("user =" ,user)
            
        } catch (error) {
            console.log(error.message)
        }
     }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">UseRef hook(React Mutable Ref)</h3>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={submitHandler}>
                            <div className="form-group mt-2">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" ref={fName} className="form-control" required/>
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" ref={fEmail} className="form-control" required/>
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="number" name="mobile" id="name" ref={fMobile} className="form-control" required/>
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

export default Ex7