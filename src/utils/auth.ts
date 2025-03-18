import bcrypy from 'bcrypt'

export const hashPassword = async (password: string) => {
    const salt = await bcrypy.genSalt(10)
    return await bcrypy.hash(password, salt)
}

export const checkPassword = async (enteredPassword: string, storedHash: string) => {
    return await bcrypy.compare(enteredPassword, storedHash)
}