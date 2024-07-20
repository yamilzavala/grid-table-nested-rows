   //== ROW COMPONENT FUNCTIONS =====
 //toggle (show or hide a single container id) from click in arrow icon
 export function toggleSingleContainerChildren(containerId, expanded) {
  const childrenList = document.querySelectorAll('.expanded, .collapsed');
  childrenList.forEach(container => {
    if(container.id === containerId) {
      if(expanded) {
        container.classList.remove('collapsed-display')
        container.classList.add('expanded-display')
        setTimeout(() => {
          container.classList.remove('collapsed')
          container.classList.add('expanded')
        }, 50)
      } else {
        container.classList.remove('expanded')
        container.classList.add('collapsed')
        setTimeout(() => {
          container.classList.remove('expanded-display')
          container.classList.add('collapsed-display')            
        }, 500)
      }
    } 
  })
  //allways expand first row
  if(childrenList[0].id === 'children-container-0') {
    childrenList[0].classList.remove('collapsed')
    childrenList[0].classList.add('expanded')
  }
}

//toggle all containers
export function toggleAllContainersChildren(expanded) {
    const childrenList = document.querySelectorAll('.expanded, .collapsed');
    childrenList.forEach(container => {    
          if(expanded) {     
            if(container.id !== 'children-container-0') {
              container.classList.remove('collapsed-display')
              container.classList.add('expanded-display')
              setTimeout(() => {
                container.classList.remove('collapsed')
                container.classList.add('expanded')
              }, 50)
             }      
          } else {
           if(container.id !== 'children-container-0') {
              container.classList.remove('expanded')
              container.classList.add('collapsed')
              setTimeout(() => {
                container.classList.remove('expanded-display')
                container.classList.add('collapsed-display')            
              }, 500)
            }
          }
    })
    //validation to first row
    if(childrenList[0].id === 'children-container-0') {
      childrenList[0].classList.remove('collapsed')
      childrenList[0].classList.remove('collapsed-display')
      childrenList[0].classList.add('expanded')
    }
  }

  export function updateRootCells(expanded) {
         //get cells
         const rootCells = document.querySelectorAll('.row-cell');
         rootCells.forEach(cell => {             
            //COLLAPSED  
            if(!expanded) {  
              if(cell.id !== '0') {//cells !== first root    
                cell.classList.remove('cell-expanded')
                cell.classList.add('cell-collapsed')  
              } else { //first root cell
                  cell.classList.remove('cell-collapsed')
                  cell.classList.add('cell-expanded')                        
              }    
              //EXPANDED                        
            } else { 
                cell.classList.remove('cell-collapsed')
                cell.classList.add('cell-expanded') 
            }     
          })   
  }

  //level 4 - set collapsed class
  export function updateLevel4Cells() {
    const level4List = document.querySelectorAll('.level-4');
    level4List.forEach(cell => {
      cell.classList.remove('cell-expanded')
      cell.classList.add('cell-collapsed')      
    })
  }


  //rotate a single arrow with a arrow click
  export function rotateSingleArrow(expanded, cellId) {
    const arrowsList = document.querySelectorAll('.btn-arrow');
    console.log('arrowsList: ', arrowsList)
    let targetArrow;
    arrowsList.forEach(arrow => {
        if(arrow.id === cellId) {
          targetArrow = arrow;
          return;
        }
      }
    )
    if(expanded) {      
      targetArrow?.classList.remove('btn-arrow-rotated')     
    }  else {
      targetArrow?.classList.add('btn-arrow-rotated')  
    }    
  }

  //rotate arrow with global click
  export function rotateArrows(expanded) {
    const arrowsList = document.querySelectorAll('.btn-arrow');
    arrowsList.forEach(arrow => {
      if(expanded) {
        // if(arrow.id !== 'arrow-0') {
        if(arrow.id !== '0') {
            arrow.classList.remove('btn-arrow-rotated')
        }
      } else {     
        // if(arrow.id !== 'arrow-0') {  
        if(arrow.id !== '0') {  
            arrow.classList.add('btn-arrow-rotated') 
        }       
      }
    })
  }

//== CELL COMPONENT FUNCTIONS =====
export function setPaddingLevel(position, level) {
    let result = 0;
    if (position === 0) {
      switch (level) {
        case 1:
          result = 1;
          break;
        case 2:
          result = 3.5;
          break;
        case 3:
          result = 6;
          break;
        case 4:
          result = 10;
          break;
      }
    } else {
      result = 0;
    }    
    return `${result}rem`;
}

export function setClassLevel(level, expanded, position,id) {
    let cellClass = "scroll-container row-cell cell-";
    // set grid template area
    switch (position) {
      case 0:
        cellClass += "a first-cell";
        break;
      case 1:
        cellClass += "b";
        break;
      case 2:
        cellClass += "c";
        break;
      case 3:
        cellClass += "d";
        break;
    }
    // set background cell 
    if(level === 4) {
      cellClass += ' cell-collapsed level-4'
    } else if (level < 4){
      if(id === '0') {
        cellClass += ' cell-expanded'
      } else {           
            if(expanded) {
              cellClass += ' cell-expanded'
            } else {
              cellClass += ' cell-collapsed'
            }   
      }     
    }
    return cellClass
  }