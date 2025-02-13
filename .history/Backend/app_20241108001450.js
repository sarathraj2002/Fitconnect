const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socketio = require('socket.io');
const app = express();
const PORT = process.env.PORT ;

app.use(express.json());
app.use(cors());

require('dotenv').config()
require('./db/db')
// // Connect to MongoDB
// mongoose.connect('mongodb://localhost/fitness-app', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));

// Routes
app.use('/api/client', require('./routes/clientRoutes'));
app.use('/api/trainer', require('./routes/trainerRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Start the server
 app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Socket.io setup
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
