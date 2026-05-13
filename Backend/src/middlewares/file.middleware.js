const cloudinary = require("cloudinary").v2
const { CloudinaryStorage } = require("multer-storage-cloudinary")
const multer = require("multer")

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => {
        // MIME type se extension nikalo
        const isPdf = file.mimetype === "application/pdf"
        const isDocx = file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"

        if (!isPdf && !isDocx) {
            throw new Error("Only PDF and DOCX files are allowed")
        }

        return {
            folder: "resumes",
            resource_type: "raw",
            // format mat daal — Cloudinary khud detect karega
            public_id: `resume_${Date.now()}_${file.originalname.split(".")[0]}`
        }
    }
})

const upload = multer({
    storage,
    limits: {
        fileSize: 3 * 1024 * 1024 // 3MB
    },
    fileFilter: (req, file, cb) => {
        const allowed = [
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ]
        if (allowed.includes(file.mimetype)) {
            cb(null, true)
        } else {
            cb(new Error("Only PDF and DOCX allowed"), false)
        }
    }
})

module.exports = upload
