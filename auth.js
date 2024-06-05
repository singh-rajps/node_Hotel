const Person = require("./models/person")

passport.use(new LocalStratgy(async(usernmae,password,done)=>{
    try {
        const user = await Person.findOne({usernmae})
        if(!user){
            return done(null,false,{message:"Incorrect username"});

            const isPasswordMatch = user.comparePassword(password)
            if(isPasswordMatch){
                return done(null,user)
            }else{
                return done(null,false,{message:"Incorrect password."})
            }
        }
    } catch (err) {
        return done(err)
    }
}))