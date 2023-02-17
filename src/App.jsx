import React from "react";
import { Rute } from "./routers/Routes";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Light, Dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components";
export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  const [sidebarOpen, setSiderbarOpen] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
              <Container
                className={sidebarOpen ? "sidebarState active" : " "}
              >
              <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSiderbarOpen}
                theme={theme}
              />
              <Rute />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 90px auto;
    background: ${({ theme }) => theme.bgtotal};
    transition: all 0.3s;
    &.active {
      grid-template-columns: 300px auto;
    }
    color:${({theme})=>theme.text};
  
`;
export default App;
