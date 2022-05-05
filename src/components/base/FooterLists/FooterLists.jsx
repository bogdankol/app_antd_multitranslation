import React from 'react';
import { NavLink } from 'react-router-dom';
import { List } from 'antd';
import { useTranslation } from 'react-i18next';

import styles from './FooterLists.module.css';

function FooterLists() {
	const { t } = useTranslation();
	const data = [
		{
			to: '/equipment',
			text: t('navigation.secondLink'),
		},
		{
			to: '/about',
			text: t('navigation.thirdLink'),
		},
		{
			to: '/license',
			text: t('licenseLink'),
		}
	];

	return (
		<div className={styles.div}>
			{/* <Col span={2}> */}
			<List
				className={styles.list}
				itemLayout={'vertical'}
				dataSource={data}
				renderItem={(el) => (
					<NavLink to={el?.to} className={styles.link}>
						{el?.text}
					</NavLink>
				)}
			/>
			{/* </Col> */}
			{/* <Col span={20}> */}
			<List
				className={styles.list}>
				<List.Item className={styles.item}>
					{t('footer.contacts')}
				</List.Item>
				<List.Item className={styles.item}>
					<a href="mailto:bogdank208@gmail.com">
                            bogdank208@gmail.com
					</a>
				</List.Item>
				<List.Item className={styles.item}>
					<a
						href="https://www.youtube.com/watch?v=gPOTwXrxnZc"
						target="_blank" rel="noreferrer"
					>
                            Youtube
					</a>
				</List.Item>
			</List>
			{/* </Col> */}
		</div>
	);
}

export default FooterLists;
