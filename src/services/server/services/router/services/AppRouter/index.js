import { Router } from 'express';

const AppRouter = Router();

AppRouter.use((req, res) => {
    res.set('Content-Type', 'text/html')
        .send('<h1>App</h1>');
});

export default AppRouter;
