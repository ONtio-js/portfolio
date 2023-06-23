import { spacee } from "../../assets/img";
import Title from "../Home/Title";
import BlogCard from "./BlogCard";

export default function(){
    return (
        <>
        <section id="blog">
            <Title title={'latest'} subtile={'blog'} />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
                <div className="px-6">
                    <BlogCard  image={spacee} title={'apartment booking'} category={'personal project'} subtitle={'streaming in nodejs'}/>
                    <BlogCard  image={spacee} title={'apartment booking'} category={'personal project'}/>
                </div>
                <div className="px-6 lgl:mt-20">
                    <BlogCard  image={spacee} title={'apartment booking'} category={'personal project'}/>
                    <BlogCard  image={spacee} title={'apartment booking'} category={'personal project'}/>
                </div>
            </div>
        </section>
        </>
    )
}