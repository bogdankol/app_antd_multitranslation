import React from 'react';
import { Row, Col } from 'antd';

import LogoSvg from '../../../assets/icons/ScientificEquipment';
import FooterLists from '../FooterLists';

import styles from './Footer.module.css';

function Footer() {
	return (
		<Row className={styles.div}>
			<Col span={8}>
				<LogoSvg className={styles.svg} />
			</Col>
			<Col span={10} offset={6}>
				<FooterLists />
			</Col>
			<Col span={1}>©2022ScientificEquipment</Col>
		</Row>
	);
}

export default Footer;
