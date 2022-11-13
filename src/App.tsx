import './App.css';
import { useState } from "react";

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

import { Circle } from "./Circle";
import { Positioning } from './Positioning';
import { getPosition } from './MathPosition';

const whiteShades = {
  1: '#FFFFFF',
  2: '#F5F5F5',
};

const StyledButton = styled(ButtonUnstyled)`
  font-weight: bold;
  font-size: 1rem;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 3px;
  background-color: ${whiteShades[1]};
  color: black;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: ${whiteShades[2]};
    }
  }`;
  
export const App = () => {
  const [circles, setCircles] = useState<Positioning[]>([]);

  function handleButtonAdd() {
    try {
      const newPosition = getPosition(circles);
      circles.push(newPosition);
    } catch (e) {
      // Handling maximum call stack size exceeded
      console.log(e);
    }
      setCircles([...circles]);
  }

  function handleButtonRemove() {
    circles.pop();
    setCircles([...circles]);
  }

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ justifyContent: "space-between", position: "static" }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Zadanie techniczne
            </Typography>
            
              <StyledButton onClick={() => {
                  handleButtonAdd();
                }}>Dodaj nowe kółko
                </StyledButton>

              <StyledButton onClick={() => {
                  handleButtonRemove();
                }}>Usuń ostatnie kółko
                </StyledButton>
          </Toolbar>
        </AppBar>
      </Box>

      {circles.map((coordsSet) => (
        <Circle {...coordsSet} />
            ))}

    </div>
  );
}

export default App;