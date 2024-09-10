import blogImage1 from '../assets/images/blogImage1.jpg'

function Article1() {
  return (
    <article>
            <time datetime="2024-09-07" className="time">9/7/2024</time>
            <h2 className="title">On the Street in Brooklyn</h2>
            <img src={blogImage1} alt="blog-image-1"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident delectus labore nam, quae porro pariatur, vel molestias omnis obcaecati maiores cupiditate voluptas, doloremque distinctio atque adipisci mollitia similique quo quod?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime officia nulla saepe molestias quae. Officiis sit eligendi nemo dolorem quis dolores facilis recusandae, illo, accusantium obcaecati aliquid, minima quas eaque?</p>
            <a href="full-article-url.html" className="continue">Continues...</a>
                <aside>
                    <h3>Related Articles</h3>
                    <ul>
                        <li><a href="#">Related Article</a></li>
                <li><a href="#">Related Article</a></li>
                
                    </ul>
                </aside>
        </article>
  )
}

export default Article1;