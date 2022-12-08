# Metro UI Dropdown for React
Dropdown component for Metro ui for React.

## Install
```shell
npm i -S @metroui/dropdown
```

## Using
```typescript
import React from "react";
import { createRoot } from 'react-dom/client';
import { Dropdown } from "@metroui/dropdown";

const App = () => {
    return (
        <>
            <Dropdown>
                <button>Toggle</button>   <-- Toggle
                <ul>                      <-- Dropdown Menu
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </Dropdown>
        </>
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />, );
```