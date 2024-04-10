import Datastore from "nedb-promises-ts";
const db = new Datastore({ filename: "./data/db", autoload: true })

interface Pokemon {
    id: number
    name: string
}