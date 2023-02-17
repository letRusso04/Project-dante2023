import styled from "styled-components";
import logo from "../assets/react.svg";
import { Var } from "../styles/Var";
import { useContext } from "react";
import { ThemeContext } from "../App";
import {
  AiOutlineLeft,
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { NavLink } from "react-router-dom";
export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const Changesidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const { setTheme, theme } = useContext(ThemeContext);
  const ChangeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <Container isOpen={sidebarOpen} themeUse={theme}>
      <button className="Sidebarbutton" onClick={Changesidebar}>
        <AiOutlineLeft />
      </button>
      <div className="logocontent">
        <div className="imgcontent">
          <img src={logo} />
        </div>
        <h2>Dante</h2>
      </div>
      {linksArray.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links ${isActive ? `active` : ``}`}
          >
            <div className="Linkicon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divider />
      {secondarylinksArray.map(({ icon, label, to }) => (
        <div className="LinkContainer" key={label}>
          <NavLink
            to={to}
            className={({ isActive }) => `Links ${isActive ? `active` : ``}`}
          >
            <div className="Linkicon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <Divider />
      <div className="Themecontent">
        {sidebarOpen && <span className="titletheme">Dark Mode</span>}
        <div className="Togglecontent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <label className="switch">
                  <input
                    type="checkbox"
                    className="theme-swither"
                    onClick={ChangeTheme}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

//#region Data links
const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Estadistica",
    icon: <MdOutlineAnalytics />,
    to: "/estadisticas",
  },
  {
    label: "Productos",
    icon: <AiOutlineApartment />,
    to: "/productos",
  },
  {
    label: "Diagramas",
    icon: <MdOutlineAnalytics />,
    to: "/diagramas",
  },
  {
    label: "Reportes",
    icon: <AiOutlineApartment />,
    to: "/reportes",
  },
];
const secondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/configuracion",
  },
  {
    label: "Salir",
    icon: <MdLogout />,
    to: "/salir",
  },
];

//#endregion Datalinks

//#region STYLED COMPONENTS

const Container = styled.div`
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.bg};
  position: sticky;
  padding-top: 20px;

  .Sidebarbutton {
    position: absolute;
    top: ${Var.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bgtgderecha};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
      0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `initial` : `rotate(180deg)`)};
    border: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    padding: 0;
    font-family: inherit;
    outline: none;
  }
  .logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${Var.lgSpacing};
    .imgcontent {
      display: flex;

      img {
        max-width: 100%;
        height: auto;
      }
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({ isOpen }) => (!isOpen ? `scale(1.5)` : `scale(0.7)`)};
    }
    h2 {
      display: ${({ isOpen }) => (!isOpen ? `none` : `block`)};
      white-space: nowrap;
      overflow: hidden;
    }
  }
  .LinkContainer {
    margin: 8px 0;
    padding: 0 15%;
    :hover {
      background: ${({ theme }) => theme.bg3};
    }
  }
  .Links {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: cal(${Var.smSpacing} -2px) 0;
    color: ${({ theme }) => theme.text};
    .Linkicon {
      padding: ${Var.smSpacing} ${Var.mdSpacing};
      display: flex;
      svg {
        font-size: 25px;
      }
    }
    &.active {
      .Linkicon {
        svg {
          color: ${({ theme }) => theme.bg4};
        }
      }
    }
  }
  .Themecontent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .titletheme {
      display: block;
      padding: 10px;
      font-weight: 700;
      opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
      transition: all 0.3s;
      white-space: nowrap;
      overflow: hidden;
    }

    .Togglecontent {
      margin: ${({ isOpen }) => (isOpen ? `auto 40px` : `auto 15px`)};
      width: 36px;
      height: 20px;
      border-radius: 10px;
      transition: all 0.3s;
      position: relative;
      .theme-container {
        background-blend-mode: multiply, multiply;
        transition: 0.4s;
        .grid {
          display: grid;
          justify-items: center;
          align-content: center;
          height: 100vh;
          width: 100vw;
          font-family: "Lato", sans-serif;
        }
        .demo 
        {
          font-size: 32px;
          .switch 
          { 
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
            .theme-swither
            {
              opacity: 0;
              width: 0;
              height: 0;
              &:checked + .slider:before{
                left: 4px;
                content: "🌑";
                transform: translate(26px);
              }
            }
            .slider{
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: ${({themeUse})=>(themeUse==="light"?Var.lightcheckbox:Var.darkcheckbox)};
              transition: 0.4s;
              &::before{
                content: "☀️";
                position: absolute;
                height: 0px;
                height: 0px;
                left: -10px;
                top: 16px;
                line-height: 0px;
                transition: 0.4s;
              }
              &.round{
                border-radius: 34px;
                &:before{
                  border-radius: 50%;
                }
              }
            }
            
           
          }
        }
      }
    }
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${Var.lgSpacing} 0;
`;
//#endregion
