import 'dotenv/config';   // Load .env
import app from './src/app.js';

const PORT = 4567;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
