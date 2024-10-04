import prisma from "../adapter/prisma"
import { User } from "@prisma/client"
import Result, {BaseError} from "../../lib/result"

export async function getAllUsers():Promise<User[]> {
    const users = await prisma.user.findMany()
    return users
}

export async function getUser(user_id:string):Promise<User> {
    const user = await prisma.user.findFirst({
        where: {
            user_id: user_id
        }
    })
    if(user===null)
        throw "aaa"
    return user