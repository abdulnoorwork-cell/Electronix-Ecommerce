import express from 'express'
import bodyParser from 'body-parser';
import '../config/db.js';
import cors from 'cors'
import fileUpload from 'express-fileupload'
import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import userRoutes from '../routes/user.routes.js'
import blogRoutes from '../routes/blog.routes.js'
import productRoutes from '../routes/product.routes.js';
import cartRoutes from '../routes/cart.routes.js'
import orderRoutes from '../routes/order.routes.js'

const app = express();
const Port = process.env.PORT || 7000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));
app.use(cookieParser());

const allowedOrigins = [
    process.env.FRONTEND_URL
]
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin !== -1) || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by cors policy'))
        }
    },
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true
}
app.use(cors(corsOptions));

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

app.use('/api/user', userRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/product',productRoutes);
app.use('/api/cart',cartRoutes);
app.use('/api/order',orderRoutes);

app.get('/',(req,res)=>{
    res.send('backend is running')
})

app.listen(Port, () => {
    console.log(`Server is running Port ${Port}`);
})

export default app;