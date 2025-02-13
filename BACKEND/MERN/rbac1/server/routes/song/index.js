import express from "express"
import { Song } from "../../models/index.js"
import { canUserDownloadSong, canUserLikeSong } from "../../middlewares/authorize.js";

const router = express.Router()

router.get("/",async (req,res)=>{
    const songs = await Song.find({});
    res.status(200).json({
        data:{songs}
    })
})

router.post("/like",canUserLikeSong,async(req,res)=>{
    res.status(201).json({
        data:"song liked"
    })
})

router.post("/download",canUserDownloadSong,async(req,res)=>{
    res.status(200).json({
        data:"Downloaded"
    })
})

export default router