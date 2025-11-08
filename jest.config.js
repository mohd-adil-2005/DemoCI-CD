import { transform } from "@babel/core"

 export default{
    testEnvironment:"node",
    transform:{
        "^.+\\.jsx?$": "babel-jest"
    }
}