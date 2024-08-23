import React from 'react'

const Preset = ({draggedColor, presetList = [], handleTitleChange, handleConjuntoChange, handleDrop, handleRemoveConjunto}) => {
    return (
        <>
          { presetList.length > 0 ? ( presetList.map((preset, presetIndex) => (
            <div key={preset.id} className="col-12 col-md-4 mb-3">
              <div className="card">
                <div className="card-header">
                  <input
                    type="text"
                    value={preset.title}
                    onChange={(event) => handleTitleChange(presetIndex, event)}
                    className="form-control"
                  />
                </div>
                <div className="card-body" 
                     style={{maxHeight:'250px', overflowY:'auto'}}
                     onDragOver={(event) => event.preventDefault()}
                     onDrop={() => handleDrop(presetIndex, draggedColor)}
                >
              <div>
                <strong>Conjunto:</strong>
                {preset?.conjunto.length > 0 ? ( preset.conjunto.map((conjuntoItem, conjuntoIndex) => (
                  <div key={conjuntoIndex} 
                       className="d-flex align-items-center mb-2"
                  >
                    <input
                      type="text"
                      value={conjuntoItem.name}
                      onChange={(event) => handleConjuntoChange(presetIndex, conjuntoIndex, event, )}
                      className="form-control me-2"
                      style={{width: "70%"}}
                    />
                    <p className="mb-0 ms-2" style={{
                        background: conjuntoItem.color,
                        borderRadius: "4px",
                        color: "snow",
                        height: "38px", // Para que coincida con la altura del contenedor
                        display: "flex",
                        alignItems: "center",
                        padding: "0 10px", // Espaciado interno para centrar el texto verticalmente
                      }}>
                      {conjuntoItem.color}
                    </p>
                    <button
                        key={presetIndex}
                        type="button"
                        className="btn btn-danger ms-2"
                        style={{
                            fontWeight: "bolder",
                            cursor: "pointer",
                        }}
                        onClick={() => handleRemoveConjunto(presetIndex, conjuntoIndex)}
                    >
                        <i className="bi bi-trash"></i>
                    </button>

                    
                  </div>))) : 
                  (
                  <div className="alert alert-danger mt-3" role='alert'>
                    <b>Aun no arrastras tus elementos</b>
                  </div>
                  )  
                }
              </div>
            </div>
          </div>
        </div>
          ))) : (  <div className="alert alert-danger mt-3" role='alert'>
            <b>nothing here yet ... </b>
          </div>)}
        </>
      );
}

export default Preset