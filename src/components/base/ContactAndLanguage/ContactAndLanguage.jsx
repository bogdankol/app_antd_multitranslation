import React from 'react';
import { Select } from 'antd';
import i18next from 'i18next';

import styles from './ContactAndLanguage.module.css';

const { Option } = Select;

function ContactAndLanguage() {
	const handleChange = (value) => {
		i18next.changeLanguage(value, (err, t) => {
			if (err) return console.log('something went wrong loading', err);
			t('key');
		});
	};

	return (
		<div className={styles.div}>
			<a href="mailto:bogdank208@gmail.com" className={styles.link}>bogdank208@gmail.com</a>
			<Select
				defaultValue="ua"
				style={{ width: 80 }}
				onChange={handleChange}
				className={styles.dropdown}
			>
				<Option value="ua" className={styles.option}>ua</Option>
				<Option value="ru" className={styles.option}>ru</Option>
				<Option value="en" className={styles.option}>en</Option>
			</Select>
		</div>
	);
}

export default ContactAndLanguage;
