/*roles dizisi içinde tanımlı rollerim olacak student, teacher, admin şeklinde 
formdan gelen rol değerini alıp roles dizisi içinde arayıp varsa devam ettiriyor
yoksa da yetkisiz erişim sonucu üretiyor
*/

module.exports = (roles) => {
    return (req, res, next) => {
        const userRole = req.body.role;
        if(roles.includes(userRole)){
            next();
        } else{
            return res.status(401).send("yetkisiz erişim")
            
        }
    }
}