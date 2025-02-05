import express from 'express';
import cors from 'cors';

import classifyRoutes from './src/routes/classifyRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/', classifyRoutes);

const PORT =process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}

)
