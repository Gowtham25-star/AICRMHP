import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import Navbar from "../components/Navbar";
import InteractionForm from "../components/InteractionForm";
import AIChat from "../components/AIChat";
import InteractionTable from "../components/InteractionTable";

import api from "../services/api";
import { setInteraction } from "../redux/interactionSlice";

function Home() {
  const dispatch = useDispatch();

  const [interactions, setInteractions] = useState([]);
  const [search, setSearch] = useState("");

  // Load all interactions
  const loadInteractions = async () => {
    try {
      const response = await api.get("/interactions");
      setInteractions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Search Doctor
  const searchDoctor = async (value) => {
    setSearch(value);

    if (value.trim() === "") {
      loadInteractions();
      return;
    }

    try {
      const response = await api.get(`/search/${value}`);
      setInteractions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Interaction
  const deleteInteraction = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this interaction?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/delete/${id}`);
      loadInteractions();
    } catch (error) {
      console.log(error);
      alert("Unable to delete interaction");
    }
  };

  // Edit Interaction
  const editInteraction = (interaction) => {
    dispatch(setInteraction(interaction));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    loadInteractions();
  }, []);

  return (
    <>
      <Navbar />

      <Container maxWidth="xl" sx={{ mt: 4 }}>

        <Grid container spacing={3}>

          <Grid item xs={12} md={6}>
            <InteractionForm />
          </Grid>

          <Grid item xs={12} md={6}>
            <AIChat />
          </Grid>

        </Grid>

        <Typography
          variant="h5"
          sx={{
            mt: 5,
            mb: 2,
          }}
        >
          Search Interaction
        </Typography>

        <TextField
          fullWidth
          label="Search Doctor Name"
          value={search}
          onChange={(e) => searchDoctor(e.target.value)}
        />

        <InteractionTable
          interactions={interactions}
          onDelete={deleteInteraction}
          onEdit={editInteraction}
        />

      </Container>
    </>
  );
}

export default Home;