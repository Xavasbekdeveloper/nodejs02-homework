const express = require("express");
const app = express();

app.use(express.json());

const Router = require("./routes/users");
app.use("/users", Router);

const PORT = 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
