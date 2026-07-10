import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";

function InteractionTable({
  interactions,
  onDelete,
  onEdit,
}) {
  return (
    <Paper
      elevation={3}
      sx={{
        mt: 4,
        p: 3,
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
      >
        Saved Interactions
      </Typography>

      <TableContainer>

        <Table>

          <TableHead>

            <TableRow>

              <TableCell>ID</TableCell>

              <TableCell>Doctor</TableCell>

              <TableCell>Meeting</TableCell>

              <TableCell>Date</TableCell>

              <TableCell>Sentiment</TableCell>

              <TableCell>Outcome</TableCell>

              <TableCell align="center">
                Actions
              </TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {interactions.length === 0 ? (

              <TableRow>

                <TableCell
                  colSpan={7}
                  align="center"
                >
                  No Interactions Found
                </TableCell>

              </TableRow>

            ) : (

              interactions.map((item) => (

                <TableRow key={item.id}>

                  <TableCell>
                    {item.id}
                  </TableCell>

                  <TableCell>
                    {item.doctor_name}
                  </TableCell>

                  <TableCell>
                    {item.meeting_type}
                  </TableCell>

                  <TableCell>
                    {item.meeting_date}
                  </TableCell>

                  <TableCell>
                    {item.sentiment}
                  </TableCell>

                  <TableCell>
                    {item.outcome}
                  </TableCell>

                  <TableCell align="center">

                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                      onClick={() => onEdit(item)}
                    >
                      Edit
                    </Button>

                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => onDelete(item.id)}
                    >
                      Delete
                    </Button>

                  </TableCell>

                </TableRow>

              ))

            )}

          </TableBody>

        </Table>

      </TableContainer>

    </Paper>
  );
}

export default InteractionTable;