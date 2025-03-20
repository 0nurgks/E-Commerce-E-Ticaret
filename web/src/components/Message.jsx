import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function Message({title,description}) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
          
    </div>
  );
}