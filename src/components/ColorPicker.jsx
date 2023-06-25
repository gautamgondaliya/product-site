import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio'; 

import state from '../store';


const ColorPicker = () =>{
  const snap = useSnapshot(state);

  return (
    <div className = "absolute left-full ml-3">
    <SketchPicker
      color = {snap.color}
      disableAlpha
      presetColors={[
        "#ccc","#efbd4e","#3d2645","#090580","#99DBF5","#B31312","#116A7B","#DD58D6","#FF0060","#00DFA2","#0079FF","#D4ADFC",
      ]}
      onChange = { (color) => state.color= color.hex}
    />

    </div>
  )
}
export default ColorPicker