import express from "express"
import sessionRouter from "./routes/session.route"
import userRouter from "./routes/user.routes"
import vehiclesRouter from "./routes/vehicles.routes"

const app = express()

app.use(express.json())

app.use('/vehicles', vehiclesRouter)
app.use('/users', userRouter)
app.use('/login', sessionRouter)

export default app