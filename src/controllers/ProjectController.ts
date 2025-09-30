import type { Request, Response } from "express"
import Project from "../models/Project"

export class ProjectController {

    static createProject = async (req: Request, res: Response) => {

        const project = new Project(req.body)

        project.manager = req.user.id

        try {
            await project.save()
            res.send('Project created successfully')
        } catch (error) {
            res.status(500).json({ error: 'There was an error' })
        }
    }

    static getAllProjects = async (req: Request, res: Response) => {
        try {
            const projects = await Project.find({
                $or: [
                    { manager: { $in: req.user.id } },
                    { team: { $in: req.user.id } }
                ]
            })
            res.json(projects)
        } catch (error) {
            res.status(500).json({ error: 'There was an error' })
        }
    }

    static getProjectById = async (req: Request, res: Response): Promise<void> => {

        const { id } = req.params

        try {
            const project = await (await Project.findById(id)).populate('tasks')

            if (!project) {
                const error = new Error('Project not found')
                res.status(404).json({ error: error.message })
                return
            }

            if (project.manager.toString() !== req.user.id.toString() && !project.team.includes(req.user.id)) {
                const error = new Error('Invalid action')
                res.status(404).json({ error: error.message })
                return
            }
            res.json(project)
        } catch (error) {
            res.status(500).json({ error: 'There was an error' })
        }
    }

    static updateProject = async (req: Request, res: Response): Promise<void> => {
        try {
            req.project.projectName = req.body.projectName
            req.project.clientName = req.body.clientName
            req.project.description = req.body.description
            await req.project.save()

            res.send('Project updated successfully')
        } catch (error) {
            res.status(500).json({ error: 'There was an error' })
        }
    }

    static deleteProject = async (req: Request, res: Response): Promise<void> => {
        try {
            await req.project.deleteOne()

            res.send('Project deleted successfully')
        } catch (error) {
            res.status(500).json({ error: 'There was an error' })
        }
    }
}