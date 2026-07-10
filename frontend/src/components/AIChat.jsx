import { useState } from "react";
import { useDispatch } from "react-redux";
import { setInteraction } from "../redux/interactionSlice";
import api from "../services/api";

import {
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

function AIChat() {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeMeeting = async () => {
    if (!message.trim()) {
      alert("Please enter meeting notes");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/chat", {
        message: message,
      });

      console.log(response.data);

      // Auto-fill the form
      dispatch(setInteraction(response.data));

      alert("AI Analysis Completed");

    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert(error.message);
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        AI Assistant
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={8}
        label="Paste Meeting Notes"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={analyzeMeeting}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          "Analyze"
        )}
      </Button>
    </Paper>
  );
}

export default AIChat;