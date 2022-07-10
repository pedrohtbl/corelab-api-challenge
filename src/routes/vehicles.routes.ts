import { Router } from "express"
import { createVehiclesController, deleteVehicleController, favoriteVehicleController,unfavoriteVehicleController, listVehicleController, listVehiclesController, updateVehicleController } from "../controllers/vehicles.controllers"
import auth from "../middlewares/auth.middleware"
import plateVerify from "../middlewares/plateVerify.middleware"

const vehiclesRouter = Router()

vehiclesRouter.post('',auth, createVehiclesController)
vehiclesRouter.get('',auth, listVehiclesController)
vehiclesRouter.get('/:id',auth, listVehicleController)
vehiclesRouter.patch('/:id',auth, updateVehicleController)
vehiclesRouter.delete('/:id',auth, deleteVehicleController)
vehiclesRouter.post('/favorite/:vehicleId',auth, favoriteVehicleController)
vehiclesRouter.delete('/favorite/:vehicleId',auth, unfavoriteVehicleController)

export default vehiclesRouter