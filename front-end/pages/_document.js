import Document, { Html, Head, Main, NextScript } from 'next/document';

class MercuryDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link href="https://fonts.googleapis.com/css?family=Cantarell:400,700&display=swap" rel="stylesheet"/>
					<link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>
					<style dangerouslySetInnerHTML={{ __html: `
						body, * {
							font-family: 'Cantarell', sans-serif;
						}
						#__next {
							display: flex;
							min-height: 100vh;
							width: 100%;
						}
					`}}/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<div id="toast-container"/>
					<div id="modal-container"/>
				</body>
			</Html>
		);
	}
}

export default MercuryDocument;  