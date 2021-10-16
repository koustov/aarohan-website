import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import harperive from 'harperive';
import moment from 'moment';
import Modal from 'react-modal';

import './testimonials.scss';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

Modal.setAppElement('#root');

export const Testimonials = () => {
	let { id } = useParams();
	const [searchText, setSearchText] = useState('');
	const [result, setResult] = useState([]);
	const [count, setCount] = useState({});
	const [modalIsOpen, setIsOpen] = React.useState(false);

	const [selectedRow, setSelectedRow] = useState({});

	const [visitorCountUpdate, setVisitorCountUpdate] = React.useState({
		male: 0,
		female: 0,
		kid: 0,
	});
	let subtitle;

	const DB_CONFIG = {
		harperHost: 'https://cloud-aarohan.harperdbcloud.com',
		username: 'aarohan',
		password: 'ItsASecret892',
		schema: 'dev', // optional
	};
	const Client = harperive.Client;
	const db = new Client(DB_CONFIG);

	useEffect(() => {
		getCount().then((res) => {
			setCount(res.data[0]);
		});
	}, []);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		// subtitle.style.color = '#f00';
	}

	function closeModal() {
		setIsOpen(false);
	}
	const getResult = () => {
		return db.query(
			`select * from ${DB_CONFIG.schema}.slots where name LIKE '%${searchText}%' OR mob LIKE '%${searchText}%' OR email='${searchText}'`
		);
	};

	const updateVisit = (r, v) => {
		return db.query(
			`UPDATE ${
				DB_CONFIG.schema
			}.slots SET visited = '${v}',visittime = '${moment().format(
				'MMMM Do YYYY, h:mm:ss a'
			)}',male=${r.male},female=${r.female},kid=${r.kid} where mob = ${
				r['mob']
			}`
		);
	};
	const onSearch = () => {
		setResult([]);
		getResult().then((res) => {
			setResult(res.data);
		});
		getCount().then((res) => {
			setCount(res.data[0]);
		});
	};

	const onVisitedClicked = (r, v) => {
		setSelectedRow(r);
		openModal();
	};

	const onVisitSubmit = () => {
		const r = Object.assign(selectedRow, visitorCountUpdate);
		updateVisit(r, 1).then((res) => {});
		onSearch();
		closeModal();
	};

	const onNotVisitedClicked = (r) => {
		updateVisit(r, 0).then((res) => {});
		onSearch();
	};

	const onTextChanged = (e) => {
		setSearchText(e.target.value);
	};

	const getCount = () => {
		return db.query(
			`select sum(male) as male,sum(female) as female,sum(kid) as kid from ${DB_CONFIG.schema}.slots`
		);
	};

	return (
		<>
			<div>
				<div style={{ display: 'flex' }}>
					<div style={{ flex: 1 }}>
						<h4
							className='img-content'
							style={{ fontSize: '1rem', padding: '1rem' }}>
							Durga Puja 2021 Slots
						</h4>
					</div>
					{id === 'aarohancommette' ? (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<div style={{ paddingRight: '1rem' }}>
								Total Visitors : {count.male + count.female + count.kid}
							</div>
							<div style={{ paddingRight: '1rem' }}>Male : {count.male}</div>
							<div style={{ paddingRight: '1rem' }}>
								Female : {count.female}
							</div>
							<div style={{ paddingRight: '1rem' }}>Kid : {count.kid}</div>
						</div>
					) : null}
				</div>
				<div className='search-wrapper'>
					<div
						style={{
							flex: 1,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<input
							className='search-text'
							type='text'
							value={searchText}
							placeholder={`${
								id === 'aarohancommette'
									? 'Search by Name, Mobile or Email'
									: 'Enter at least three characters from Name, Mobile or Email'
							}`}
							onChange={(e) => onTextChanged(e)}
						/>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<button
							className='content-button status-action'
							href='https://forms.gle/AUdSB3QhUZvoyKN27'
							target='_blank'
							style={{ margin: '0px' }}
							onClick={() => onSearch()}
							disabled={
								id === 'aarohancommette' ? false : searchText.length < 3
							}>
							{' '}
							Search
						</button>
					</div>
				</div>

				{result && result.length ? (
					<div className='result-wrapper'>
						<table className='result-table'>
							<thead>
								<tr>
									<td>#</td>
									<td>Day</td>
									<td>Name</td>
									<td>Mobile</td>
									<td>Email</td>
									<td>Slot</td>
									<td>Status</td>
									<td>When Visited</td>
									{id === 'aarohancommette' ? <td>Action</td> : null}
								</tr>
							</thead>
							<tbody>
								{result.map((r, ri) => {
									return (
										<tr key={ri}>
											<td>{ri + 1}</td>
											<td>{r['day']}</td>
											<td>{r['name']}</td>
											<td>{r['mob']}</td>
											<td>{r['email']}</td>
											<td>{r['slot']}</td>
											<td>
												<div
													className={
														r['visited'] === 1 ? 'visited' : 'not-visited'
													}>
													{r['visited'] === 1 ? 'Done' : 'Pending'}
												</div>
											</td>
											<td>{r['visittime'] || '<NA>'}</td>
											<td>
												{id === 'aarohancommette' ? (
													<>
														{r['visited'] === 1 ? (
															<button
																className='content-button status-action'
																href='https://forms.gle/AUdSB3QhUZvoyKN27'
																target='_blank'
																style={{ margin: '0px' }}
																onClick={() => onNotVisitedClicked(r)}>
																{' '}
																Not Visited
															</button>
														) : (
															<button
																className='content-button status-action'
																href='#open-modal'
																style={{ margin: '0px' }}
																onClick={() => onVisitedClicked(r)}>
																{' '}
																Visited
															</button>
														)}
													</>
												) : null}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				) : (
					<div className='no-result-wrapper'>No result to show</div>
				)}
			</div>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='Example Modal'>
				<h2 ref={(_subtitle) => (subtitle = _subtitle)}>
					Update visitors numbers
				</h2>
				<div className='modal-form-wrapper'>
					<div>
						<label>Adult Male</label>
						<input
							type='number'
							className='search-text'
							value={visitorCountUpdate.male}
							placeholder='Adult Male'
							onChange={(e) => {
								visitorCountUpdate.male = e.target.value;
								setVisitorCountUpdate({ ...visitorCountUpdate });
							}}
						/>
					</div>

					<div>
						<label>Adult Female</label>
						<input
							type='number'
							className='search-text'
							value={visitorCountUpdate.female}
							placeholder='Adult Female'
							onChange={(e) => {
								visitorCountUpdate.female = e.target.value;
								setVisitorCountUpdate({ ...visitorCountUpdate });
							}}
						/>
					</div>

					<div>
						<label>Kid</label>
						<input
							type='number'
							className='search-text'
							value={visitorCountUpdate.kid}
							placeholder='Kid'
							onChange={(e) => {
								visitorCountUpdate.kid = e.target.value;
								setVisitorCountUpdate({ ...visitorCountUpdate });
							}}
						/>
					</div>
				</div>
				<button
					onClick={() => onVisitSubmit()}
					className='content-button status-action'>
					SUBMIT
				</button>

				<button
					onClick={() => closeModal()}
					className='content-button status-action'
					style={{ background: 'none' }}>
					Close
				</button>
			</Modal>
		</>
	);
};
