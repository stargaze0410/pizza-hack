import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Filter = ({ type, setType }) => {
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Select</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <FormControlLabel value="Pizza" control={<Radio />} label="Pizza" />
          <FormControlLabel
            value="Breakfast"
            control={<Radio />}
            label="Breakfast"
          />
          <FormControlLabel value="Sushi" control={<Radio />} label="Sushi" />
          <FormControlLabel value="all" control={<Radio />} label="All Menu" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;
