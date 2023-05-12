import { useEffect } from 'react';
import {useSelector} from "react-redux";

const colors = [
  {
    name: '--second-color',
    color: {
      dark: '#464866',
      bright: '#D3CDB5'
    }
  },
  {
    name: '--base-color',
    color: {
      dark: '#383A52',
      bright: '#C8C0A3'
    }
  },
  {
    name: '--inactive-text',
    color: {
      dark: '#29648A',
      bright: '#AF3E35'
    }
  },
  {
    name: '--text-color',
    color: {
      dark: '#2E9CCA',
      bright: '#3C110E'
    }
  },
  {
    name: '--inactive-color',
    color: {
      dark: '#25274D',
      bright: '#948E78'
    }
  },
  {
    name: '--active-color',
    color: {
      dark: '#3f4282',
      bright: '#D0BA6A'
    }
  }
]

export default function useThemeChange() {
  const theme = useSelector((state) => state.ui.theme);

  useEffect(() => {
    const root = document.documentElement;
    console.log(root.style);
    colors.forEach(({name, color}) => {
      root?.style.setProperty(name, color[theme]);
    })
  }, [theme]);

  return theme;
}