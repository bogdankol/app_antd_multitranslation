import React from 'react';
import { List, Popover } from 'antd';
import { NavLink } from 'react-router-dom';

import useData from './hooks/useData';
import styles from './HeaderList.module.css';

function HeaderList() {
	const response = useData();

	const content = (
		<List className={styles.popupList}>
			<List.Item  className={styles.popupItem}>
				<NavLink to="equipment/drill/1">Переносной мотобур для отбора ориентированных образцов ПМБ-2б</NavLink>
			</List.Item>
			<List.Item  className={styles.popupItem}>
				<NavLink   to="equipment/tank/1">Бак переносной с ручным насосом</NavLink>
			</List.Item>
			<List.Item  className={styles.popupItem}>
				<NavLink    to="equipment/tube/1">Безрезьбовая буровая коронка с алмазным наконечником</NavLink>
			</List.Item>
		</List>
	);

	return (
		<div className={styles.div}>
			<List
				dataSource={response.length ? response : []}
				grid={{columns: 3}}
				renderItem={(el, index) => {
					return index === 1 ? (
						<Popover
							placement="bottomLeft"
							content={content}
							trigger="hover"
						>
							<div>
								<NavLink
									to={el?.to}
									className={({ isActive }) =>
										isActive ? styles.activeLink : styles.link
									}
								>
									{el?.text}
								</NavLink>
							</div>
						</Popover>
					) : (
						<NavLink
							to={el?.to}
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.link
							}
						>
							{el?.text}
						</NavLink>
					);
				}}
			/>
		</div>
	);
}

export default HeaderList;
