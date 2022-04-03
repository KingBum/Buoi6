const users = [
    {
        userName : "Yasuo" ,
        img : "https://picsum.photos/id/351/400/400",
        gender : "Male" ,
        placeOfOrigin : "DN",
        job : "Coder",
    },
    {
        userName : "Ashe" ,
        img : "https://picsum.photos/id/353/400/400",
        gender : "Female" ,
        placeOfOrigin : "DL",
        job : "BA",
    },
    {
        userName : "Yone" ,
        img : "https://picsum.photos/id/352/400/400",
        gender : "Male" ,
        placeOfOrigin : "QN",
        job : "Manager",
    },
    {
        userName : "Akali" ,
        img : "https://picsum.photos/id/354/400/400",
        gender : "Female" ,
        placeOfOrigin : "QB",
        job : "Suppotor",
    }
]

class userController {
    index(req, res, next) {
        const result = users.filter(item => item.gender.toLowerCase() === req.query.gender);
        if(req.query.gender){
            res.render("index", { users : result});
        }else{
            res.render("index", { users : users});
        }
    }
    infoUser(req, res, next) {
        let user = {}
        users.forEach(item => {
            if(item.userName === req.params.name){
                user = item
            }
        });
        res.render("infoUser", {user})
    }
}

module.exports = new userController