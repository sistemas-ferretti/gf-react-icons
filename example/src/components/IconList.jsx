import React, { useEffect, useMemo, useState } from 'react';
import * as Icons from 'gf-react-icons';
import {  toast } from 'react-toastify';
import '../css/categories.css';

const IconList = ({ searchWord, setSearchWord }) => {
  const [isShowName, setIsShowName] = useState(true);
  const [activeCategorie, setActiveCategorie] = useState('outlined');
  const iconsArray = Object.entries(Icons);
  let timeoutId;

  const iconsList = iconsArray.map(([name, component]) => ({ name, component }));

  const filteredIcons = useMemo(() => {
    const text = searchWord ? searchWord.trim().toLowerCase() : "";

    return iconsList.filter((icon) => {
      const lowerCaseName = icon.name.toLowerCase();
      const matchesName = lowerCaseName.includes(text);
      const matchesCategory = lowerCaseName.includes(activeCategorie);

      return matchesName && matchesCategory;
    });
  }, [searchWord, activeCategorie, iconsList]);

  const copyIcon = (iconName) => {
    const el = document.createElement('textarea');
     el.value = `<${iconName}/>`
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    toast.success(`Copiado: <${iconName} />`);
  }

  const ocultarName = () => {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (viewportWidth < 600) {
      setIsShowName(false);
    } else {
      setIsShowName(true);
    }
  };

  const handleResize = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(ocultarName, 300);
  };

  const filteredIconsCategorie = (e) => {
    const text = e.target.textContent.trim().toLowerCase();
    setActiveCategorie(text);
    setSearchWord(text);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setSearchWord(activeCategorie);
  }, []);

  return (
    <div className='px-4 px-lg-5'>
      <h1>Lista de Iconos</h1>
        <ul className='list-categories'>
          <li className={`categorie ${activeCategorie === 'outlined' ? 'active' : ''}`}><button onClick={filteredIconsCategorie} className="link-categorie">Outlined</button></li>
          <li className={`categorie ${activeCategorie === 'filled' ? 'active' : ''}`}><button onClick={filteredIconsCategorie} className="link-categorie">Filled</button></li>
          <li className={`categorie ${activeCategorie === 'twotone' ? 'active' : ''}`}><button onClick={filteredIconsCategorie} className="link-categorie">TwoTone</button></li>
        </ul>
      <ul className='my-4 gf-icon-list' style={{display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center"}}>
        {filteredIcons.map((icon, index) => (
          <li className='text-center p-2'
            key={index}
            onClick={() => copyIcon(icon.name)}
          >
            <div
              className='p-2 gf-icon-container'
            >
              <div style={{
                fontSize: '2.5rem',
              }}
                className='gf-icon my-1'
              >
                {React.createElement(icon.component)}
              </div>
              <p
                style={{
                  fontSize: '14px',
                }}
              >
                {isShowName ? icon.name : ""}
              </p>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IconList;
