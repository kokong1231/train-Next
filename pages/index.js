import Layout from './Components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


const Index = (props) => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(({show}) => (
          <li key={show.id}>
            <Link as={'/p/' + show.id} href={'/post?id=' + show.id}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}


Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log('Show data fetched. Count' + data.length)

  return {
    shows: data
  }
}

export default Index


// const PostLink = (props) => {
//   return (
//     <li>
//       <Link as={'/p/' + props.id} href={'/post?title=' + props.title}>
//       <a>{props.title}</a>
//       </Link>
//     </li>
//   )
// }

// export default () => {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="hello-nextjs" title="Heelo Next.js" />
//         <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
//         <PostLink id="deploy-nextjs" title="Deploy apps with Ohs" />
//       </ul>
//     </Layout>
//   )
// }
