import jsonServer from 'json-server';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors'; // ✅ 加這行

// 正確取得 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// ✅ 加入 CORS 設定：只允許 GitHub Pages 來源
server.use(cors({
  origin: 'https://wupinfong.github.io',
}));

server.use(middlewares);
server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`✅ JSON Server is running at http://localhost:${PORT}`);
});
