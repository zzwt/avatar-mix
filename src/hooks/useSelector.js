import { useState, useCallback, useEffect } from 'react';
export const useSelector = (config, setConfig) => {
  const [category, setCategory] = useState('faces');
  const [component, setComponent] = useState(config[category]);

  useEffect(() => {
    setComponent(config[category]);
  }, [config, category]);

  const changeStyle = useCallback(
    (key, value) => {
      setConfig({
        ...config,
        [key]: value,
      });
    },
    [config]
  );
  const changeColor = useCallback(
    (color) => {
      setConfig({
        ...config,
        background: {
          ...config['background'],
          color: color.hex,
        },
      });
    },
    [config]
  );

  const toggleBackground = useCallback(
    () =>
      setConfig({
        ...config,
        background: {
          ...config['background'],
          enabled: !config['background']['enabled'],
        },
      }),
    [config]
  );

  return [
    category,
    component,
    setCategory,
    changeStyle,
    changeColor,
    toggleBackground,
  ];
};
