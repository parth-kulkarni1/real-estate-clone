import express from 'express';
import { myDataSource } from './app-data-source';

const app = express();
const port = process.env.PORT || 3000;

// establish database connection
myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
