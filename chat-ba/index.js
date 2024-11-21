import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";

const PORT = process.env.PORT || 3001;
const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Chat API is running");
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  socket.emit("welcome", `Welcome to the chat, ${socket.id}`);
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Change app.listen to server.listen since we're using Socket.IO
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
