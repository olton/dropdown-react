import React from "react";
import { createRoot } from 'react-dom/client';
import {
    Dropdown,
} from "../src/index";

import "./index.less"

const App = () => {
    return (
        <>
            <Dropdown>
                <button>Toggle</button>
                <ul>
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