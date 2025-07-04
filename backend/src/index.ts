import express from "express";
import cors from "cors";
import connectDb from "./Config/db";
import postRoutes from "./routes/postRoutes";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/posts", postRoutes);

connectDb();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
