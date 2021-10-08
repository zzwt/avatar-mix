import { useState, useEffect } from 'react';
import { previewStackOrder } from '../constants';
import { avatarConfig } from '../config';

export const usePreview = (config) => {
  const [preview, setPreview] = useState(``);

  useEffect(() => {
    generatePreview();
  }, [config]);

  const generatePreview = async () => {
    const groups = await Promise.all(
      previewStackOrder.map(async (type) => {
        /* eslint-disable */
        const svgRaw = (
          await require(`!!raw-loader!/public/avatar/preview/${type}/${type}-${config[type]}.svg`)
        ).default;
        return `\n<g id="notion-avatar-${type}">\n
      ${svgRaw.replace(/<svg.*(?=>)>/, '').replace('</svg>', '')}
    \n</g>\n`;
      })
    );
    const { x, y } = avatarConfig['hair'][config['hair'] - 1];

    const previewSvg =
      `<svg viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="bg" >
         ${
           config['background']['enabled']
             ? `<circle cx="350" cy="350" r="350" fill="${config['background']['color']}"/>`
             : ''
         } 
        </g>
        <g id="icon"  transform="translate(${x}, ${y})">
          ${groups.join('\n\n')}
        </g>
      </svg>`
        .trim()
        .replace(/(\n|\t)/g, '');

    setPreview(previewSvg);
  };

  return preview;
};
