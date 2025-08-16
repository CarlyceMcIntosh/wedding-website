const { connectDB } = require('./config/db');
const uri = process.env.MONGODB_URI;

if (uri && uri.trim()) {
  connectDB(uri).catch(err => {
    console.error('DB connection failed:', err?.message || err);
  });
} else {
  console.warn('MONGODB_URI not set — starting API without DB');
}
