import { useSelector, useDispatch } from "react-redux";
import { setInteraction } from "../redux/interactionSlice";
import api from "../services/api";

import {
  Paper,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

import { useState } from "react";

function InteractionForm() {
  const dispatch = useDispatch();

  const interaction = useSelector((state) => state.interaction);

  const [open, setOpen] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    dispatch(
      setInteraction({
        [e.target.name]: e.target.value,
      })
    );
  };

  // Save interaction to backend
  const saveInteraction = async () => {
    try {
        console.log("Sending Data:", interaction);

        const response = await api.post("/log-interaction", interaction);

                window.location.reload();

        console.log(response.data);

        alert("Saved Successfully");
    } catch (error) {
        console.log(error);

        if (error.response) {
            console.log(error.response.data);
        alert(JSON.stringify(error.response.data, null, 2));
        } else {
            alert(error.message);
        }
    }
  };

  return (
    <>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Log HCP Interaction
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Doctor Name"
          name="doctor_name"
          value={interaction.doctor_name}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Meeting Type"
          name="meeting_type"
          value={interaction.meeting_type}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          type="date"
          label="Meeting Date"
          name="meeting_date"
          value={interaction.meeting_date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          fullWidth
          margin="normal"
          type="time"
          label="Meeting Time"
          name="meeting_time"
          value={interaction.meeting_time}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />

        <TextField
          fullWidth
          margin="normal"
          multiline
          rows={3}
          label="Topics"
          name="topics"
          value={interaction.topics}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          multiline
          rows={3}
          label="Summary"
          name="summary"
          value={interaction.summary}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Sentiment"
          name="sentiment"
          value={interaction.sentiment}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Outcome"
          name="outcome"
          value={interaction.outcome}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Follow Up"
          name="followup"
          value={interaction.followup}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={saveInteraction}
        >
          Save Interaction
        </Button>
      </Paper>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success" variant="filled">
          Interaction Saved Successfully
        </Alert>
      </Snackbar>
    </>
  );
}

export default InteractionForm;