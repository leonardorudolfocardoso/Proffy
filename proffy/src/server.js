const express = require("express")
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, pageSaveClasses 
} = require('./pages')

// configurar nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server
// receber do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", pageSaveClasses)

.listen(5500)