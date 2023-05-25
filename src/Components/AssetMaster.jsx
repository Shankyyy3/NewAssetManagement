import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, Button, Container } from '@mui/material';

const AssetMaster = () => {
  const [itemType, setItemType] = useState('');
  const [item, setItem] = useState('');
  const [subItem, setSubItem] = useState('');
  const [model, setModel] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [isActive, setIsActive] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      itemType,
      item,
      subItem,
      model,
      serialNumber,
      selectedDate,
      isActive
    };

    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal">
          <InputLabel>Item Type</InputLabel>
          <Select value={itemType} onChange={(event) => setItemType(event.target.value)}>
            <MenuItem value="consumable">Consumable</MenuItem>
            <MenuItem value="non-consumable">Non-Consumable</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Item</InputLabel>
          <Select value={item} onChange={(event) => setItem(event.target.value)}>
            <MenuItem value="item1">Item 1</MenuItem>
            <MenuItem value="item2">Item 2</MenuItem>
            {/* Add more items as needed */}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Sub-Item</InputLabel>
          <Select value={subItem} onChange={(event) => setSubItem(event.target.value)}>
            <MenuItem value="subitem1">Sub-Item 1</MenuItem>
            <MenuItem value="subitem2">Sub-Item 2</MenuItem>
            {/* Add more sub-items as needed */}
          </Select>
        </FormControl>

        <TextField fullWidth margin="normal" label="Model" value={model} onChange={(event) => setModel(event.target.value)} />

        <TextField fullWidth margin="normal" label="Serial Number" value={serialNumber} onChange={(event) => setSerialNumber(event.target.value)} />

        <TextField
          fullWidth
          margin="normal"
          label="Date"
          type="date"
          value={selectedDate}
          onChange={(event) => setSelectedDate(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <FormControl component="fieldset" margin="normal">
          <FormLabel component="legend">Status</FormLabel>
          <RadioGroup value={isActive} onChange={(event) => setIsActive(event.target.value === 'true')}>
            <FormControlLabel value={true} control={<Radio />} label="Active" />
            <FormControlLabel value={false} control={<Radio />} label="Inactive" />
          </RadioGroup>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default AssetMaster;
