/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'pega-embed': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
				id: string
				action: string
				pageID: string
				pageClass: string
				casePage: string
				appAlias: string
				pegaServerUrl: string
				autoReauth: string
				authService: string
				clientId: string
				style: { width: string }
			}
		}
	}
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'make real starter',
	description: 'draw a website and make it real',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<script src="https://lab-02600-bos.lab-internal.pega.com/prweb/PRRestService/c11nsvc/v1/pega-embed.js"></script>

				<div className="pega-header">
					<img
						className="pega-logo"
						src="https://www.pega.com/themes/custom/pegawww_theme/images/pega-logo.svg"
						alt="Pega logo"
					></img>
					<h1>| Hackathon 11 Make Real</h1>
				</div>
				<div className="intro"> Draw and enter values to generate a Constellation UI form</div>

				<pega-embed
					id="theEmbed"
					action="openPage"
					pageID="pyHome"
					pageClass="Data-Portal"
					casePage="assignment"
					appAlias="hackathon-11-make-real"
					pegaServerUrl="https://lab-02600-bos.lab-internal.pega.com/prweb/"
					autoReauth="true"
					authService="pega"
					clientId="20176203091056372686"
					style={{ width: '100%' }}
				></pega-embed>

				{children}
			</body>
		</html>
	)
}
