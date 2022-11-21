import moment from 'moment';

export default function WeekDate({ correspondingWeekDates }) {
	function handlerInput() {}

	return (
		<div>
			{correspondingWeekDates.map((date) => {
				return (
					<div
						className={
							'flex p-3 px-5 m-2 justify-between text-left bg-blue-400 text-gray-900 rounded-2xl'
						}
						onClick={handlerInput}
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
