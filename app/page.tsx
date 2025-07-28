'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Currency {
	code: string;
	name: string;
	symbol: string;
}

interface ConversionResult {
	currency: string;
	amount: number;
	rate: number;
}

const popularCurrencies: Currency[] = [
	{ code: 'USD', name: 'US Dollar', symbol: '$' },
	{ code: 'EUR', name: 'Euro', symbol: '€' },
	{ code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
	{ code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
	{ code: 'GBP', name: 'British Pound', symbol: '£' },
	{ code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
	{ code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
	{ code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
];

export default function Home() {
	const [amount, setAmount] = useState<string>('1');
	const [fromCurrency, setFromCurrency] = useState<string>('USD');
	const [toCurrency, setToCurrency] = useState<string>('EUR');
	const [conversionResult, setConversionResult] =
		useState<ConversionResult | null>(null);
	const [popularResults, setPopularResults] = useState<ConversionResult[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');

	const convertCurrency = async (from: string, to: string, value: number) => {
		try {
			// Using ExchangeRate-API (free tier)
			const response = await axios.get(
				`https://api.exchangerate-api.com/v4/latest/${from}`
			);
			const rate = response.data.rates[to];
			return {
				currency: to,
				amount: value * rate,
				rate: rate,
			};
		} catch (error) {
			console.error('Error converting currency:', error);
			throw error;
		}
	};

	const handleConversion = async () => {
		if (!amount || parseFloat(amount) <= 0) {
			setError('Please enter a valid amount');
			return;
		}

		setLoading(true);
		setError('');

		try {
			const value = parseFloat(amount);

			// Convert to selected currency
			const result = await convertCurrency(fromCurrency, toCurrency, value);
			setConversionResult(result);

			// Convert to popular currencies
			const popularConversions = await Promise.all(
				popularCurrencies
					.filter((currency) => currency.code !== fromCurrency)
					.map(async (currency) => {
						return await convertCurrency(fromCurrency, currency.code, value);
					})
			);

			setPopularResults(popularConversions);
		} catch (error) {
			setError('Failed to convert currency. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (amount && parseFloat(amount) > 0) {
			handleConversion();
		}
	}, [fromCurrency, toCurrency]);

	const formatCurrency = (amount: number, currency: string) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: currency,
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(amount);
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4'>
			<div className='max-w-4xl mx-auto'>
				{/* Header */}
				<div className='text-center mb-12'>
					<h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
						Currency Converter
					</h1>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Convert currencies in real-time with the latest exchange rates from
						around the world
					</p>
				</div>

				{/* Main Converter */}
				<div className='bg-white rounded-2xl shadow-soft p-8 mb-8'>
					<div className='grid md:grid-cols-3 gap-6 items-end'>
						{/* Amount Input */}
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-2'>
								Amount
							</label>
							<input
								type='number'
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
								className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all'
								placeholder='Enter amount'
								min='0'
								step='0.01'
							/>
						</div>

						{/* From Currency */}
						<div>
							<label
								htmlFor='fromCurrency'
								className='block text-sm font-medium text-gray-700 mb-2'
							>
								From
							</label>
							<select
								id='fromCurrency'
								value={fromCurrency}
								onChange={(e) => setFromCurrency(e.target.value)}
								className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all'
							>
								{popularCurrencies.map((currency) => (
									<option
										key={currency.code}
										value={currency.code}
									>
										{currency.code} - {currency.name}
									</option>
								))}
							</select>
						</div>

						{/* To Currency */}
						<div>
							<label
								htmlFor='toCurrency'
								className='block text-sm font-medium text-gray-700 mb-2'
							>
								To
							</label>
							<select
								id='toCurrency'
								value={toCurrency}
								onChange={(e) => setToCurrency(e.target.value)}
								className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all'
							>
								{popularCurrencies.map((currency) => (
									<option
										key={currency.code}
										value={currency.code}
									>
										{currency.code} - {currency.name}
									</option>
								))}
							</select>
						</div>
					</div>

					{/* Convert Button */}
					<div className='mt-6'>
						<button
							onClick={handleConversion}
							disabled={loading}
							className='w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02]'
						>
							{loading ? 'Converting...' : 'Convert Currency'}
						</button>
					</div>

					{/* Error Message */}
					{error && (
						<div className='mt-4 p-4 bg-red-50 border border-red-200 rounded-lg'>
							<p className='text-red-600'>{error}</p>
						</div>
					)}

					{/* Main Result */}
					{conversionResult && (
						<div className='mt-8 p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-100'>
							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								Conversion Result
							</h3>
							<div className='text-3xl font-bold text-primary-600'>
								{formatCurrency(
									conversionResult.amount,
									conversionResult.currency
								)}
							</div>
							<p className='text-sm text-gray-600 mt-2'>
								Exchange Rate: 1 {fromCurrency} ={' '}
								{conversionResult.rate.toFixed(4)} {toCurrency}
							</p>
						</div>
					)}
				</div>

				{/* Popular Currencies */}
				{popularResults.length > 0 && (
					<div className='bg-white rounded-2xl shadow-soft p-8'>
						<h2 className='text-2xl font-bold text-gray-900 mb-6'>
							Popular Currencies
						</h2>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
							{popularResults.map((result) => (
								<div
									key={result.currency}
									className='p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary-300 transition-all'
								>
									<div className='text-sm font-medium text-gray-600 mb-1'>
										{result.currency}
									</div>
									<div className='text-lg font-semibold text-gray-900'>
										{formatCurrency(result.amount, result.currency)}
									</div>
									<div className='text-xs text-gray-500 mt-1'>
										Rate: {result.rate.toFixed(4)}
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
