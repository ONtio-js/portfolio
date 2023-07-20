import { node, stream } from "../../assets/img";
import Title from "../Home/Title";
import BlogCard from "./BlogCard";

export default function(){
    return (
        <>
        <section id="blog">
            <Title title={'latest'} subtile={'blog'} />
            <div className="w-full flex items-center gap-2">
                <div className="px-6">
                    <BlogCard  image={node} title={'understanding core nodejs'} category={'Node.js is an open-source, cross-platform runtime environment that allows developers to build server-side applications using JavaScript. Unlike traditional JavaScript, which runs in web browsers, Node.js enables JavaScript to be executed on the server-side, making it a versatile and powerful tool for building scalable and high-performance applications'} date={'april 4, 2023'}/>
                    <BlogCard  image={stream} title={'streams in nodejs'} category={'In the world of Node.js, performance and scalability are vital factors when developing modern applications. Handling large volumes of data efficiently and in real-time can be a daunting task. But fear not! Node.js comes to the rescue with its powerful "Streams" – a feature that empowers developers to process data in a seamless and non-blocking manner.'} date={'may 6, 2022'}/>
                </div>
            </div>
        </section>
        </>
    )
}
