import React, { useMemo } from 'react';
import styles from './styles.module.css';
import { TwitterPicker } from 'react-color';
import { useSelector } from '../../hooks/useSelector';
import Image from 'next/image';
import { range, downLoadImage, getRandomStyle } from '../../utils';
import { avatarConfig } from '../../config';
import { categoryDisplayOrder } from '../../constants';
import Button from '../button';
import Dropdown from '../dropdown';

import * as ga from '../../ga';

export default function Selection({ config, setConfig }) {
  const [
    category,
    component,
    setCategory,
    changeStyle,
    changeColor,
    toggleBackground,
  ] = useSelector(config, setConfig);

  const generateComponents = () => {
    if (
      typeof avatarConfig[category] === 'object' &&
      !Array.isArray(avatarConfig[category])
    ) {
      return (
        <div className={styles.color_picker}>
          <ColorPicker
            config={config}
            changeColor={changeColor}
            toggleBackground={toggleBackground}
          />
        </div>
      );
    }

    const componentsIndex = range(
      1,
      Array.isArray(avatarConfig[category])
        ? avatarConfig[category].length
        : avatarConfig[category]
    );

    return componentsIndex.map((index) => {
      const classname =
        index === component
          ? `${styles.component_image} ${styles.component_image_active}`
          : styles.component_image;
      return (
        <div key={index} className={styles.component}>
          <Image
            src={`/avatar/part/${category}/${category}-${index}.svg`}
            width={70}
            height={70}
            className={classname}
            alt=""
            onClick={() => changeStyle(category, index)}
          ></Image>
        </div>
      );
    });
  };

  return (
    <>
      <div className={styles.categories_container}>
        {categoryDisplayOrder.map((key, index) => {
          return (
            <Button
              active={key === category}
              content={key}
              key={index}
              onClick={() => setCategory(key)}
              style={{ marginRight: 10 }}
            />
          );
        })}
      </div>
      <div className={styles.component_wrapper}>
        <div className={styles.component_container}>{generateComponents()}</div>
      </div>

      <div className={styles.button_group_container}>
        <Button
          content={'Randomize'}
          onClick={() => setConfig(getRandomStyle(config.background.enabled))}
        />
        <Dropdown
          content="Download"
          options={['SVG', 'PNG']}
          onClick={(e) => {
            console.log(ga);
            ga.event({ action: 'download', params: { ...config } });
            downLoadImage(e);
          }}
        />
      </div>
    </>
  );
}

const ColorPicker = ({ config, changeColor, toggleBackground }) => {
  const enabled = useMemo(() => config['background']['enabled'], [config]);
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        checked={enabled}
        className={styles.checkbox}
        onChange={toggleBackground}
      />
      {!enabled && <span>Disabled</span>}
      {enabled && (
        <TwitterPicker
          onChangeComplete={changeColor}
          color={config['background']['color']}
        />
      )}
    </>
  );
};
