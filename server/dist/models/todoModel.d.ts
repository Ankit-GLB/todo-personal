import mongoose from "mongoose";
export declare const todoArray: mongoose.Model<{
    todoId?: number | null | undefined;
    title?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    todoId?: number | null | undefined;
    title?: string | null | undefined;
}> & {
    todoId?: number | null | undefined;
    title?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    todoId?: number | null | undefined;
    title?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    todoId?: number | null | undefined;
    title?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    todoId?: number | null | undefined;
    title?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
