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
                    <BlogCard  image={node} title={'understanding core nodejs'} category={'Lorem ipsu m dolor, sit amet consectetur adipisicing elit. Ad placeatm dolor, sit amet consectetur adipisicing elit. Ad placeat'} date={'sep 4, 2022'}/>
                    <BlogCard  image={stream} title={'streams in nodejs'} category={'Lorem ipsum dolor, m dolor, sit amet consectetur adipisicing elit. Ad placeatsit amet consectetur adipisicing elit. Ad placeat'} date={'may 6, 2021'}/>
                </div>
            </div>
        </section>
        </>
    )
}
