import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

import WeekDate from './WeekDate';

const currentWeekNumber = moment().isoWeeks();

export default function DutyList() {
	const [weekNumber, setWeekNumber] = useState(currentWeekNumber);

	const correspondingWeek = (correspondingWeekNumber) => {
		const startOfWeek = moment()
			.isoWeeks(correspondingWeekNumber)
			.startOf('isoWeeks');

		const endOfWeek = moment()
			.isoWeeks(correspondingWeekNumber)
			.endOf('isoWeeks');

		let days = [];
		let day = startOfWeek;
		while (day <= endOfWeek) {
			days.push(day.toDate());
			day = day.clone().add(1, 'd');
		}

		return days;
	};

	function increment() {
		setWeekNumber(weekNumber + 1);
	}

	function decrement() {
		if (weekNumber === 1) return;
		setWeekNumber(weekNumber - 1);
	}

	useEffect(() => {
		correspondingWeek(weekNumber);
	}, [weekNumber]);

	return (
		<div className='flex-col flex bg-gray-900 h-screen'>
			<div className='m-2 flex justify-between'>
				<h1 className={'text-red-700'}>Duty</h1>
				<div className='flex justify-between items-center'>
					<IconButton size={'large'} onClick={decrement}>
						<RemoveIcon fontSize={'inherit'} color={'primary'} />
					</IconButton>
					<h2 className={'text-amber-100'}>{weekNumber}</h2>
					<IconButton size={'large'} onClick={increment}>
						<AddIcon fontSize={'inherit'} color={'primary'} />
					</IconButton>
				</div>
			</div>
			<div>
				<WeekDate correspondingWeekDates={correspondingWeek(weekNumber)} />
			</div>
		</div>
	);
}
