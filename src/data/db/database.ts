import mongoose, { ConnectOptions } from "mongoose";

export class Database {
    constructor(public uri: string) { };

    public db?: mongoose.Connection;

    public connect(): void {
        if (this.db) {
            return;
        }

        mongoose.connect(this.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);

        this.db = mongoose.connection;

        this.db.once("open", async () => {
            console.log("Connected to database");
        })

        this.db.on("error", () => {
            console.log("Error connecting to database");
        })
    }
}

