import React from "react";
import { Modal, TextField, Button, Box, Typography } from "@mui/material";

const TaskModal = ({
  open,
  handleClose,
  taskData,
  handleChange,
  handleSave,
  handleFileChange,
  file,
  isEditing,
}) => {
  // Prevent reading from null taskData
  const { _id = "", title = "", description = "", deadline = "", } = taskData || {};

  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        component="form"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
          {isEditing ? "Edit Task" : "Add Task"}
        </Typography>

        <TextField
          label="Title"
          fullWidth
          required
          margin="normal"
          value={title}
          onChange={(e) => handleChange("title", e.target.value)}
        />

        <TextField
          label="Description"
          fullWidth
          required
          margin="normal"
          value={description}
          onChange={(e) => handleChange("description", e.target.value)}
        />

        <TextField
          label="Deadline"
          type="date"
          fullWidth
          required
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={formatDateForInput(deadline)}
          onChange={(e) => handleChange("deadline", e.target.value)}
        />

        {!isEditing && (
          <>
            <Button
              variant="outlined"
              component="label"
              sx={{ mt: 2 }}
            >
              {file ? file.name : "Upload PDF"}
              <input
                type="file"
                hidden
                accept="application/pdf"
                onChange={handleFileChange}
              />
            </Button>

            {file && (
              <Button
                variant="text"
                color="error"
                onClick={() => handleFileChange({ target: { files: [] } })}
              >
                Delete
              </Button>
            )}
          </>
        )}

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3, gap: 2 }}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave}>
            {isEditing ? "Update" : "Save"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default TaskModal;
