import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MapTutorialModal from '../../../Modals/MapTutorialModal';
import PropTypes from 'prop-types';
// import { ReactComponent as AdjustAreaImg } from '../../../../assets/images/map/adjustArea.svg';
import gif from '../../../../assets/images/map/adjustArea.gif';
import styles from './styles.module.scss';

export default function AdjustAreaModal({ dismissModal }) {
  const { t } = useTranslation();

  return (
    <MapTutorialModal
      title={t('FARM_MAP.TUTORIAL.ADJUST_AREA.TITLE')}
      dismissModal={dismissModal}
    >
      {/* svg implementation */}
      {/* <div className={styles.imageContainer}>
        <AdjustAreaImg className={styles.image} />
      </div> */}
      <img src={gif} alt="Adjust Area GIF" style={{'marginBottom': '16px'}} />
      <div className={styles.instruction}>{t('FARM_MAP.TUTORIAL.ADJUST_AREA.TEXT')}</div>
    </MapTutorialModal>
  );
}

AdjustAreaModal.prototype = {
  dismissModal: PropTypes.func,
};