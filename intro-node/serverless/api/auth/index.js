const jwt = require("jsonwebtoken")
const users = require("../models/users")

const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization
    if(!token){
        return res.sendStatus(403)
    }
    jwt.verify(token, "mi-secreto", (err, decoded) => {
        const { _id } = decoded
        users.findOne({ _id }).exec()
            .then(user => {
                next()
            })
        })
}

const hasRole = role => (req, res, next) => {
    if(req.user.role === role) {
        return next()
    }

    res.sendStatus(403)
}

module.exports = {
    isAuthenticated,
    hasRole,
}