import Link from 'next/link'

const IndexPage = () => (
  <>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </>
)

export const getStaticProps = () => {
  return {
    props: {
      title: "Home | Next.js + TypeScript Example"
    }
  }
}

export default IndexPage
