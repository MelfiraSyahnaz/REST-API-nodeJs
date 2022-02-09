const express = require('express')
const app = express()
const port = 8080

app.listen(port, () => console.log(`App running ${port}`))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//celcius
    app.get("/convert/celcius/:angka", (req,res)=>{

    const celcius = Number(req.params.angka)
    const fahrenheit = (celcius * 1.8) + 32
    const kelvin = celcius + 273.15
    const reamur = 4/5 *(celcius)

    res.send({
        celcius : celcius,
        result : {
            reamur,
            fahrenheit,
            kelvin,
        }
    })
})
    
//fahrenheit
app.get("/convert/fahrenheit/:angka", (req,res)=>{

    const fahrenheit = Number(req.params.angka)
    const celcius = (fahrenheit - 32) * 5/9
    const kelvin = (fahrenheit - 32) * 5/9 + 273.15 
    const reamur = (fahrenheit - 32) * 4/9

    res.send({
        fahrenheit : fahrenheit,
        result : {
            reamur,
            kelvin,
            celcius,
        }
    })
})

//kelvin
app.get("/convert/kelvin/:angka", (req,res)=>{

    const kelvin = Number(req.params.angka)
    const fahrenheit = (kelvin - 273.15) * 9/5 + 32
    const celcius =  kelvin - 273.15
    const reamur = 4/5 * (kelvin + 273.15)

    res.send({
        kelvin : kelvin,
        result : {
            reamur,
            fahrenheit,
            celcius,
        }
    })
})

//reamur
app.get("/convert/reamur/:angka", (req,res)=>{

    const reamur = Number(req.params.angka)
    const fahrenheit = (reamur * 2.25) + 32
    const celcius = reamur / 0.8
    const kelvin = (reamur / 0.8) + 273.15

    res.send({
        reamur : reamur,
        result : {
            kelvin,
            fahrenheit,
            celcius,
        }
    })
})


