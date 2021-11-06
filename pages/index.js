import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import BarChart from '../components/BarChart';

const data = [
	{ year: 1992, efficiency: 27.9, sales: 8213000 },
	{ year: 1993, efficiency: 28.4, sales: 8518000 },
	{ year: 1994, efficiency: 28.3, sales: 8991000 },
	{ year: 1995, efficiency: 28.6, sales: 8620000 },
	{ year: 1996, efficiency: 28.5, sales: 8479000 },
	{ year: 1997, efficiency: 28.7, sales: 8217000 },
	{ year: 1998, efficiency: 28.8, sales: 8085000 },
	{ year: 1999, efficiency: 28.3, sales: 8638000 },
	{ year: 2000, efficiency: 28.5, sales: 8778000 },
	{ year: 2001, efficiency: 28.8, sales: 8352000 },
];

export default function Home() {
  return (
		<div className={styles.container}>
			<Head>
				<title>R3ACT Charts</title>
				<meta name="description" content="R3ACT Charts" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>R3act Charts</h1>
				<div>
					<Link href="/barchart">
						<a>Bar Chart</a>
					</Link>
					<span> | </span>
					<Link href="/multi">
						<a>Multi Line</a>
					</Link>
					<span> | </span>
					<Link href="/circles">
						<a>Circle fun</a>
					</Link>
				</div>

				<BarChart
					data={data}
					yAxisLabel={"Sales Volume"}
					xAxisLabel={"Years"}
					barColor={"steelBlue"}
				/>
				
			</main>

			<footer className={styles.footer}>
				<a href="#" target="_blank" rel="noopener noreferrer">
					Powered by <span className={styles.logo}>R3ACT</span>
				</a>
			</footer>
		</div>
	);
}
