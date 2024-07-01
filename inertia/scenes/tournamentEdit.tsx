import { useState } from 'react';
import { Grid, TextField, IconButton, FormLabel, Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import axios from 'axios';

import './tournamentEdit.scss';

interface Field {
  label: string;
  value: string;
  disabled: boolean;
}

const TournamentEdit = ({ detail }: any) => {
  const [fields, setFields] = useState<{ [key: string]: Field }>({
    name: {
      label: 'Name',
      value: detail.name,
      disabled: true,
    },
    description: {
      label: 'Description',
      value: detail.description,
      disabled: true,
    },
  });

  const [open, setOpen] = useState(false);

  const handleEditClick = (fieldName: string) => {
    setFields((prevFields) => ({
      ...prevFields,
      [fieldName]: {
        ...prevFields[fieldName],
        disabled: false,
      },
    }));
  };

  const handleSaveClick = (fieldName: string) => {
    setFields((prevFields) => ({
      ...prevFields,
      [fieldName]: {
        ...prevFields[fieldName],
        disabled: true,
      },
    }));
  };

  const handleChange = (fieldName: string, value: string) => {
    setFields((prevFields) => ({
      ...prevFields,
      [fieldName]: {
        ...prevFields[fieldName],
        value: value,
      },
    }));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveButtonClick = async () => {
    try {
      await axios.post('/tournaments/update', fields);
      // Optionally provide feedback to the user upon successful save
    } catch (error) {
      console.error('Error saving changes:', error);
      // Optionally provide error feedback to the user
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete('/tournaments/delete', detail.id).then((res) => {
        setOpen(false);
      });
      // Optionally provide feedback to the user upon successful delete
    } catch (error) {
      console.error('Error deleting tournament:', error);
      // Optionally provide error feedback to the user
    }
  };

  return (
    <div>
      {Object.keys(fields).map((fieldName) => (
        <Grid container spacing={2} alignItems="center" className="edit-grid" key={fieldName}>
          <Grid item xs={2} className="edit-grid-label" sx={{ mr: 0.5, p: 1 }}>
            <FormLabel className="edit-grid-label">{fields[fieldName].label}</FormLabel>
          </Grid>
          <Grid item xs={7} sx={{ p: 1 }}>
            <TextField
              fullWidth
              variant="outlined"
              value={fields[fieldName].value}
              disabled={fields[fieldName].disabled}
              onChange={(e) => handleChange(fieldName, e.target.value)}
            />
          </Grid>
          <Grid item xs={2} sx={{ p: 1 }}>
            {fields[fieldName].disabled ? (
              <IconButton onClick={() => handleEditClick(fieldName)}>
                <EditIcon />
              </IconButton>
            ) : (
              <IconButton onClick={() => handleSaveClick(fieldName)}>
                <SaveIcon />
              </IconButton>
            )}
          </Grid>
        </Grid>
      ))}
      <Button variant="contained" color="success" sx={{ marginTop: '20px', marginLeft: '25px' }} onClick={saveButtonClick}>
        Save Changes
      </Button>
      <Button variant="contained" color="error" sx={{ marginTop: '20px', marginLeft: '25px' }} onClick={handleOpen}>
        Delete Tournament
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Confirmation"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TournamentEdit;
