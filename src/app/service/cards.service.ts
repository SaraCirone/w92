import { Card } from "../models/card.interface";

export async function getPost(): Promise <Card[]> {
    return await (await fetch('../../assets/db.json')).json();
}
