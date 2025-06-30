import { env } from "@/env";
import { app } from "@/app";

app.listen({
    host:'localhost',
    port:env.PORT,
}).then(() =>{
    console.log('🧑‍🚀 Tamo no AR!')
})

