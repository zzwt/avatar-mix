import { avatarConfig } from './config';
import { initialColors } from './constants';
import html2canvas from 'html2canvas';

export const getRandomStyle = (withBackground = true) => {
  return Object.keys(avatarConfig).reduce((result, key) => {
    if (Array.isArray(avatarConfig[key])) {
      return {
        ...result,
        [key]: Math.floor(Math.random() * avatarConfig[key].length) + 1,
      };
    }
    if (typeof avatarConfig[key] === 'object') {
      return {
        ...result,
        [key]: {
          enabled: withBackground,
          color:
            initialColors[Math.floor(Math.random() * initialColors.length)],
        },
      };
    }
    return {
      ...result,
      [key]: Math.floor(Math.random() * avatarConfig[key]) + 1,
    };
  }, {});
};
export const sortByOrder = (order) => {
  return (a, b) => {
    return order.indexOf(a) - order.indexOf(b);
  };
};

export const range = (start, end) => {
  var ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
};

export const downLoadImage = async (e) => {
  const type = e.target.value;
  const dom = document.querySelector('#avatar-preview');
  let base64Image;
  if (type.toLowerCase() === 'svg') {
    const svgElement = dom.querySelector('svg');
    const imageStr = new XMLSerializer().serializeToString(svgElement);
    base64Image = `data:image/svg+xml;base64,${window.btoa(imageStr)}`;
  } else if (type.toLowerCase() === 'png') {
    const canvas = await html2canvas(dom, {
      logging: false,
      scale: window.devicePixelRatio,
      width: dom.offsetWidth,
      height: dom.offsetHeight,
    });
    base64Image = canvas.toDataURL();
  } else {
    return;
  }

  const a = document.createElement('a');
  a.href = base64Image;
  a.download = `avatar-${new Date().getTime()}.${type}`;
  a.click();
};
