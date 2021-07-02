import Layout from "./Components/MyLayout";
import fetch from "isomorphic-unfetch";

const Post = (props) => {
    console.log(props.show)
    return (
        <Layout>
            <h1>{props.url.query.title}</h1>
            <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
            <img src={props.show.image.medium} />
        </Layout>
    )
}


Post.getInitialProps = async (context) => {
    const { id } = context.query
    const res = await fetch('https://api.tvmaze.com/shows/' + id)
    const show = await res.json()

    console.log('Fatched show: ' + show.name)

    return { show }
}

export default Post


// export default (props) => {
//     return (
//         <Layout>
//             <Content url={props.url} />
//         </Layout>
//     )
// }
