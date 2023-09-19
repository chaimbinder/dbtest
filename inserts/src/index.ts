import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { resolve } from 'path';
import { writeText } from './DB/index';
import { Request, Response, NextFunction } from 'express';

const envPath = resolve(__dirname, '../../.env');
dotenv.config();

const ROUTE_NAME_INSERTS = process.env.ROUTE_NAME_INSERTS;

async function createRouter() {
  const router = express.Router();

  router.post<{ string: string }, { result?: string; error?: string }>(
    `/${ROUTE_NAME_INSERTS}`,
    async (req, res) => {
      try {
        const { string } = req.body;

        // if (!string) {
        //   return res.status(400).json({ error: 'The "string" property is required in the request body' });
        // }
        // const insert: { result?: string; error?: string } | undefined = await writeText(string);
        const insert = await writeText(string) as {
          result?: string | undefined;
          error?: string | undefined;
      } | undefined;
      

        // const insert = await writeText(string);
        res.send(insert);
        // if (typeof insert === 'string') {
        //   res.json({ result: insert });
        // } else {
        //   res.status(500).json({ error: 'An internal server error occurred' });
        // }
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An internal server error occurred' });
      }
    },
  );

  return router;
}

createRouter().then((router) => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(router);

  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('body = ', req.body);
    console.log('params = ', req.params);
    console.log('url = ', req.url);
    console.log('\n');
    next();
  });

  const PORT = parseInt(process.env.MYPORT_INSERTS as string) || 3000;
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
});
