import Head from 'next/head'

import '@styles/globals.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/img/logo.jpeg" />
                <title>검은나무 블로그</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
