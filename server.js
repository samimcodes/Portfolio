// Created automatically by @samimcodes/ai-shield init
import express from 'express';
import { aiShield } from '@samimcodes/ai-shield';

const app = express();

// 🛡️ Live AI Defense + Real-Time Security Monitor
app.use(aiShield({
  enableDashboard: true,
}));

app.get('/', (req, res) => {
  res.send('<h1>My Website</h1><p>Protected from AI scrapers by ai-shield.</p>');
});

app.get('/api/products', (req, res) => {
  res.json({ secretCatalog: [{ id: 1, name: 'Premium Item', price: 99 }] });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
  console.log('Live Security Monitor: http://localhost:' + PORT + '/admin/ai-shield');
});
