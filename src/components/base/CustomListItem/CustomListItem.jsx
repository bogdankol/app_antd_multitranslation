import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image, Typography, Button } from 'antd';
import {useTranslation} from 'react-i18next';

import styles from './CustomListItem.module.css';

const { Title, Paragraph } = Typography;

function CustomListItem({ src, title, text, link, onClickHandler }) {
	const {t} = useTranslation(0);

	return (
		<li className={styles.item}>
			<Image src={src} width={'40%'} height={236} preview={false} />
			<div className={styles.innerDiv}>
				<div>
					<NavLink to={link} >
						<Title className={styles.title}>{title}</Title>
					</NavLink>
					<Paragraph className={styles.paragraph}>{text}</Paragraph>
				</div>
				<Button className={styles.btn} onClick={onClickHandler}>{t('buyBtn')}</Button>
			</div>
		</li>
	);
}

export default CustomListItem;
