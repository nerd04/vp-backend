//loading evironment variabls as early as possible
// require('dotenv').config({path: './env'})

import mongoose from 'mongoose'
import connectDB from './db/index.js'

import dotenv from 'dotenv'
dotenv.config({
        path: './env'
    })

connectDB()