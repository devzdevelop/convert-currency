import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Currency Converter',
	description: 'Convert currencies in real-time with the latest exchange rates',
	keywords: 'currency converter, exchange rates, money converter',
	authors: [{ name: 'Currency Converter App' }],
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='min-h-screen bg-background'>{children}</body>
		</html>
	);
}
