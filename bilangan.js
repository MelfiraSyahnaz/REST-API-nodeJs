const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => console.log(`App running ${port}`))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//Octal
app.get('/convert/octal/:angka', (req,res)=>{

    let angka = Number(req.params.angka)
    let decimal = parseInt(angka, 8);

    res.send({
        octal : decimal,
        result : {
            decimal : decimal,
            binary : decimal.toString(2),
            hexadecimal : decimal.toString(16)
        }
    })
})

//Decimal
app.get('/convert/decimal/:angka', (req,res)=>{

    let angka = Number(req.params.angka)
    let desimal = parseInt(angka, 8)


    res.send({
        decimal : angka,
        result : {
            octal : desimal.toString(8),
            biner : desimal.toString(2),
            hexadecimal : desimal.toString(16),
        }
    })
})

//Binary
app.get('/convert/binary/:angka', (req, res) => {
    let angka = Number(req.params.angka)
    let desimal = parseInt(angka, 2)

    res.send ({
        decimal: desimal,
        octal: desimal.toString(8),
        hexadecimal: desimal.toString(16)
    })
})


//hexadecimal
app.get('/convert/hexadecimal/:angka', (req, res) => {
    let angka = Number(req.params.angka)
    let desimal = parseInt(angka, 16)

    res.send({
        hexadecimal :angka,
        result :{
            decimal: desimal,
            binary: desimal.toString(2),
            octal: desimal.toString(8),
        }
    })
})

