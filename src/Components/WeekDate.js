import moment from 'moment';

export default function WeekDate({ correspondingWeekDates }) {
	const clickHandler = () => {
		console.log(`element clicked`);
	};

	function handlerInput() {
		console.log(`element clicked`);
	}

	return (
		<div>
			{correspondingWeekDates.map((date) => {
				return (
					<div
						className={
							'flex p-3 px-5 m-2 justify-between align-center text-left bg-blue-400 text-gray-900 rounded-2xl'
						}
						onClick={clickHandler}
						key={date}>
						<div className={'font-mono'}>
							{moment(date, 'YYYYMMDD ddd').format('DD/MM ddd')}
						</div>
						<div className={'font-sans'}>{'U15'}</div>
						<input
							type={'text'}
							onChange={handlerInput}
							className={
								'font-mono bg-transparent w-14 p-1 border-2 rounded placeholder-amber-50'
							}
							placeholder={'101'}
							value={''}
						/>
					</div>
				);
			})}
		</div>
	);
}
