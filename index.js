const express = require('express');
const {PrismaClient} = require('@prisma/client')

const app = express();
const prisma = new PrismaClient();
app.use(express.json())

app.get("/", async (req, res) => {
    const userCount = await prisma.user.count();
    res.json(
        userCount == 0
        ? "No users have been added yet" : "Sonme users have been added to the database"
    );
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})