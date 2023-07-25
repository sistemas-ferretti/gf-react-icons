import React, { useMemo } from 'react';
import * as Icons from 'gf-react-icons';
import {  toast } from 'react-toastify';

const IconList = ({ searchWord }) => {
  const iconsArray = Object.entries(Icons);
  const iconsList = iconsArray.map(([name, component]) => ({ name, component }));

  const filteredIcons = useMemo(() => {
    const text = searchWord ? searchWord.trim().toLowerCase() : "";
    if (text) {
      return iconsList.filter((icon) => icon.name.toLowerCase().includes(text));
    } else {
      return iconsList;
    }
  }, [searchWord, iconsList]);

  const copyIcon = (iconName) => {
    const el = document.createElement('textarea');
     el.value = `<${iconName}/>`
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    toast.success(`Copiado: <${iconName}/>`);
  }

  return (
    <div className='px-4 px-lg-5'>
      <h1>Lista de Iconos</h1>
      <div className='row my-5 justify-content-between'>
        {filteredIcons.map((icon, index) => (
          <div className='col-6 col-md-4 col-lg-2 text-center p-2' 
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
              <p>
                {icon.name}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconList;