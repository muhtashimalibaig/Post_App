import mongoose, {Document, Schema} from "mongoose";

interface IPosts extends Document{
    title: string;
    description: string;
    author: string;
    createdAt: Date;
};

const PostSchema: Schema = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        requre: true,
    },
}, {timestamps: true});

const Post = mongoose.model<IPosts>('Posts', PostSchema);
export default Post;