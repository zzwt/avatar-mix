import React from 'react';
import styles from './styles.module.css';
import { usePreview } from '../../hooks/usePreview';

export default function Preview({ config }) {
  const preview = usePreview(config);

  return (
    <div className={styles.preview_container}>
      <div
        id="avatar-preview"
        dangerouslySetInnerHTML={{
          __html: preview,
        }}
        style={{
          width: 250,
          height: 250,
        }}
      />
    </div>
  );
}
