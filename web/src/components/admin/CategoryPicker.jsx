import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function CategoryPicker({categories,setSelectedCategory,selectedCategory}) {

  const [categoryName, setCategoryName] = useState([]);

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };
   try {
      console.log(categories)
   } catch (error) {
    
   }
   
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select
          multiple
          native
          value={categoryName}
          onChange={(e)=>handleChange(e)}
          label="Native"
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {categories?.map((a) => (
            <option key={a.name} value={a.name}>
              {a.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}