import { Request, Response } from "express"
import createVehiclesService from "../services/Vehicles/createVehicle.service"
import listVehiclesService from "../services/Vehicles/listVehicles.service"
import { instanceToPlain } from "class-transformer"
import favoriteVehicleService from "../services/Vehicles/favoriteVehicle.service"
import unfavoriteVehicleService from "../services/Vehicles/unfavoriteVehicle.service"
import listVehicleService from "../services/Vehicles/listVehicle.service"
import updateVehicleService from "../services/Vehicles/updateVehicle.service"
import deleteVehicleService from "../services/Vehicles/deleteVehicle.service"

export const createVehiclesController = async (req: Request, res: Response) => {
  try {
    const vehicle = req.body
    const userId = req.userId
    const createdVehicle = await createVehiclesService(vehicle, userId)

    return res.status(201).json(instanceToPlain(createdVehicle))
    
  } catch (error) {
    if(error instanceof Error){
      return res.status(400).json({
        message: error.message
      })
    }
  }
}

export const listVehiclesController = async (req: Request, res: Response) => {
  try {
    const vehicles = await  listVehiclesService()

    return res.status(200).json(instanceToPlain(vehicles))
    
  } catch (error) {
    if(error instanceof Error){
      return res.status(400).json({
        message: error.message
      })
    }
  }
}

export const listVehicleController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const vehicle = await listVehicleService(id)

    return res.status(200).json(vehicle)
    
  } catch (error) {
    if(error instanceof Error){
      return res.status(404).json({
        message: error.message
      })
    }
  }
}

export const updateVehicleController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const newVehicle = req.body
    const userId = req.userId

    const updatedVehicle = await updateVehicleService(id, userId, newVehicle)

    return res.status(200).json(updatedVehicle)
    
  } catch (error) {
    if(error instanceof Error){
      return res.status(400).json({
        message: error.message
      })
    }
  }
}

export const deleteVehicleController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const userId = req.userId

    await deleteVehicleService(id,userId)

    return res.status(204).send()
  } catch (error) {
    if(error instanceof Error){
      return res.status(400).json({
        message: error.message
      })
    }
  }
}

export const favoriteVehicleController = async (req: Request, res: Response) => {
  try {
    const userId = req.userId
    const vehicleId = req.params.vehicleId

    const favorite = await favoriteVehicleService(vehicleId, userId)

    return res.status(200).json(favorite)
    
  } catch (error) {
    if(error instanceof Error){
      return res.status(400).json({
        message: error.message
      })
    }
  }
}

export const unfavoriteVehicleController = async (req: Request, res: Response) => {
  try {
    const userId = req.userId
    const vehicleId = req.params.vehicleId

    const unfavorite = await unfavoriteVehicleService(vehicleId, userId)

    return res.status(200).json(unfavorite)
    
  } catch (error) {
    if(error instanceof Error){
      return res.status(400).json({
        message: error.message
      })
    }
  }
}