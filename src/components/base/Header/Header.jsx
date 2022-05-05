import React from 'react';
import { Row, Col } from 'antd';

import LogoSvg from '../../../assets/icons/ScientificEquipment';
import HeaderList from '../HeaderList';
import ContactAndLanguage from '../ContactAndLanguage';

import styles from './Header.module.css';

function Header() {

	return (
		<Row className={styles.div}>
			<Col span={9} className={styles.svgCol}>
				<LogoSvg className={styles.svg} />
			</Col>
			<Col span={10}>
				<HeaderList />
			</Col>
			<Col span={5}>
				<ContactAndLanguage />
			</Col>
		</Row>
	);
}

export default Header;
