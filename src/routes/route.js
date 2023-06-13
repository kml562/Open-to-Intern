import express from 'express';
import {getCollage,postCollage}from '../controllers/collegeController.js'
import { getIntern, postIntern } from '../controllers/internController.js'

const router = express.Router()

// collage--------------------------------------------------------
router.get('/functionup/collegeDetails', getCollage)
router.post('/colleges', postCollage)





// intern----------------------------------------------------------
router.post('/interns', postIntern)
router.get('/collegeDetails', getIntern)



export default router