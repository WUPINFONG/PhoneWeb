import jsonServer from 'json-server'; // ✅ ES Module 用法
import path from 'path';
import { fileURLToPath } from 'url';

// 確保正確獲取當前檔案路徑
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`✅ JSON Server is running at http://localhost:${PORT}`);
});
