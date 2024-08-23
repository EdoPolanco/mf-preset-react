import {useState, useEffect} from 'react'
import { getPresetList } from '../helpers/getPreset'


export const usePreset = () => {
    const [presetList, setPresetList] = useState(getPresetList());

    const handleTitleChange = (index, event) => {
        const updatedPresets = [...presetList];
        updatedPresets[index].title = event.target.value;
        setPresetList(updatedPresets);
      };
    
      const handleConjuntoChange = (presetIndex, conjuntoIndex, event) => {
        const updatedPresets = [...presetList];
        updatedPresets[presetIndex].conjunto[conjuntoIndex] = {
          ...updatedPresets[presetIndex].conjunto[conjuntoIndex],
          name: event.target.value
        };
        setPresetList(updatedPresets);
      };

      const handleDrop = (presetIndex, draggedColor) => {
        if (draggedColor) {
            const updatedPresets = [...presetList];
            const conjunto = updatedPresets[presetIndex].conjunto || [];

            conjunto.push({
                name: `conjunto-${conjunto.length + 1}`,
                color: draggedColor
            });
    
            updatedPresets[presetIndex].conjunto = conjunto;
            setPresetList(updatedPresets);
        }
    };

    const handleRemoveConjunto = (presetIndex, conjuntoIndex) => {
      const updatedPresets = [...presetList];
      const conjunto = updatedPresets[presetIndex].conjunto;
  
      if (conjunto && conjunto.length > 0) {
          conjunto.splice(conjuntoIndex, 1);
  
          conjunto.forEach((item, index) => {
              item.name = `conjunto-${index + 1}`;
          });
  
          updatedPresets[presetIndex].conjunto = conjunto;
          setPresetList(updatedPresets);
      }
  };

  useEffect(() => {
    localStorage.setItem("preset", JSON.stringify(presetList))
  }, [presetList])

  return {presetList, handleTitleChange, handleConjuntoChange, handleDrop, handleRemoveConjunto}
}