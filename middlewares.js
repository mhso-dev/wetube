import multer from "multer";
import routes from "./routes";

const multerVideo = multer({dest: "videos/"});

// local 변수를 global 변수로 사용하게 만들어 준다. 
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    }
    next();
};

export const uploadVideo = multerVideo.single("videoFile");