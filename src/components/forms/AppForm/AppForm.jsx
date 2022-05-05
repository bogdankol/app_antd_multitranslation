import React from 'react';
import { Row, Form, Input, Button, message } from 'antd';
import { useTranslation } from 'react-i18next';

import styles from './AppForm.module.css';

function AppForm({ onSubmit }) {
	const { t } = useTranslation();
	const [form] = Form.useForm();

	function submitHandler(data) {
		onSubmit(data);
		form.resetFields();
		message.success('Submit done!');
	}

	return (
		<Form
			layout="vertical"
			form={form}
			onFinish={() => submitHandler(form.getFieldsValue())}
			className={styles.list}
		>
			<Form.Item
				name="name"
				label={t('leaveAnApp.nameInputLabel')}
				required
				rules={[
					{
						required: true,
					},
					{
						type: 'string',
						warningOnly: false,
					},
					{
						type: 'string',
						min: 2,
					},
				]}
			>
				<Input
					placeholder="enter you name"
					name="name"
					className={styles.input}
				/>
			</Form.Item>
			<Form.Item
				name="tel"
				label={t('leaveAnApp.telInputLabel')}
				required
				rules={[
					{
						required: true,
					},
					{
						warningOnly: false,
					},
					{
						type: 'string',
						min: 10,
					},
				]}
			>
				<Input
					placeholder="enter you phone"
					name="tel"
					className={styles.input}
				/>
			</Form.Item>
			<Form.Item name="comment" label={t('leaveAnApp.commentInputLabel')}>
				<Input.TextArea
					autoSize={{ minRows: 6, maxRows: 6 }}
					placeholder="leave a commentary"
					name="comment"
					className={styles.input}
				/>
			</Form.Item>
			<Form.Item  >
				<Row className={styles.row}>
					<Button type="primary" htmlType="submit" className={styles.button}>
                    Submit
					</Button>
				</Row>
               
			</Form.Item>
		</Form>
	);
}

export default AppForm;
