import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import { MadMenFashionApp } from './mad-men/MadMenFashionApp'

// import { TestApp } from './TestApp' (deleted)
// function TestApp... (deleted)

import { MadMenFashionApp } from './mad-men/MadMenFashionApp'

console.log('Main.tsx executing...');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MadMenFashionApp />
  </StrictMode>,
)
