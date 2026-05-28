import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next on Cloudflare Pages (Edge)</title>
      </Head>
      <main style={{fontFamily: 'system-ui, sans-serif', padding: 24}}>
        <h1>Next.js on Cloudflare Pages (Edge)</h1>
        <p>This is a minimal example project scaffolded to run with @cloudflare/next-on-pages.</p>
      </main>
    </>
  )
}
