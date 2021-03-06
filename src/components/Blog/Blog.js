import React from "react";
import "./Blog.css";

const Blog = props => {
    return (
        <div className={"container"}>
            <div >
                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                        <a className="p-2 text-muted" href="/">
                            World
                        </a>
                        <a className="p-2 text-muted" href="/">
                            U.S.
                        </a>
                        <a className="p-2 text-muted" href="/">
                            Technology
                        </a>
                        <a className="p-2 text-muted" href="/">
                            Design
                        </a>
                        <a className="p-2 text-muted" href="/">
                            Culture
                        </a>
                        <a className="p-2 text-muted" href="/">
                            Business
                        </a>
                        <a className="p-2 text-muted" href="/">
                            Politics
                        </a>
                        <a className="p-2 text-muted" href="/">
                            Opinion
                        </a>
                        <a className="p-2 text-muted" href="/">
                            Science
                        </a>
                        <a className="p-2 text-muted" href="/">
                            Health
                        </a>
                        <a className="p-2 text-muted" href="/">
                            Style
                        </a>
                        <a className="p-2 text-muted" href="/">
                            Travel
                        </a>
                    </nav>
                </div>

                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="display-4 font-italic">
                            Title of a longer featured blog post
                        </h1>
                        <p className="lead my-3">
                            Multiple lines of text that form the lede, informing new readers
                            quickly and efficiently about whats most interesting in this posts
                            contents.
                        </p>
                        <p className="lead mb-0">
                            <a href="/" className="text-white font-weight-bold">
                                Continue reading...
                            </a>
                        </p>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="card flex-md-row mb-4 box-shadow h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-primary">
                                    World
                                </strong>
                                <h3 className="mb-0">
                                    <a className="text-dark" href="/">
                                        Featured post
                                    </a>
                                </h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <p className="card-text mb-auto">
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content.
                                </p>
                                <a href="/">Continue reading</a>
                            </div>
                            <img
                                className="card-img-right flex-auto d-none d-lg-block"
                                data-src="holder.js/200x250?theme=thumb"
                                alt="Card"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card flex-md-row mb-4 box-shadow h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-success">
                                    Design
                                </strong>
                                <h3 className="mb-0">
                                    <a className="text-dark" href="/">
                                        Post title
                                    </a>
                                </h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="card-text mb-auto">
                                    This is a wider card with supporting text below as a natural
                                    lead-in to additional content.
                                </p>
                                <a href="/">Continue reading</a>
                            </div>
                            <img
                                className="card-img-right flex-auto d-none d-lg-block"
                                data-src="holder.js/200x250?theme=thumb"
                                alt="Card"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8 blog-main">
                    <h3 className="pb-3 mb-4 font-italic border-bottom">
                        From the Firehose
                    </h3>

                    <div className="blog-post">
                        <h2 className="blog-post-title">Sample blog post</h2>
                        <p className="blog-post-meta">
                            January 1, 2014 by <a href="/">Mark</a>
                        </p>

                        <hr />
                        <h2>Heading</h2>
                        <h3>Sub-heading</h3>
                        <p>
                            Cum sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus.
                        </p>
                        <pre>
              <code>Example code block</code>
            </pre>
                        <h3>Sub-heading</h3>
                        <ul>
                            <li>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                et.
                            </li>
                            <li>Donec id elit non mi porta gravida at eget metus.</li>
                            <li>Nulla vitae elit libero, a pharetra augue.</li>
                        </ul>
                        <ol>
                            <li>Vestibulum id ligula porta felis euismod semper.</li>
                            <li>
                                Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus.
                            </li>
                            <li>
                                Maecenas sed diam eget risus varius blandit sit amet non magna.
                            </li>
                        </ol>
                    </div>
                    <div className="blog-post">
                        <h2 className="blog-post-title">Another blog post</h2>
                        <p className="blog-post-meta">
                            December 23, 2013 by <a href="/">Jacob</a>
                        </p>

                        <p>Cum sociis natoque penatibus et magnis </p>
                        <div className="blog-post" />
                        <h2 className="blog-post-title">New feature</h2>
                        <p className="blog-post-meta">
                            December 14, 2013 by <a href="/">Chris</a>
                        </p>

                        <ul>
                            <li>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                et.
                            </li>
                            <li>Donec id elit non mi porta gravida at eget metus.</li>
                            <li>Nulla vitae elit libero, a pharetra augue.</li>
                        </ul>
                    </div>
                    <nav className="blog-pagination">
                        <a className="btn btn-outline-primary" href="/">
                            Older
                        </a>
                        <a className="btn btn-outline-secondary disabled" href="/">
                            Newer
                        </a>
                    </nav>
                </div>

                <aside className="col-md-4 blog-sidebar">
                    <div className="p-3 mb-3 bg-light rounded">
                        <h4 className="font-italic">About</h4>
                    </div>

                    <div className="p-3">
                        <h4 className="font-italic">Archives</h4>
                        <ol className="list-unstyled mb-0">
                            <li>
                                <a href="/">March 2014</a>
                            </li>
                            <li>
                                <a href="/">February 2014</a>
                            </li>
                            <li>
                                <a href="/">January 2014</a>
                            </li>
                            <li>
                                <a href="/">December 2013</a>
                            </li>
                            <li>
                                <a href="/">November 2013</a>
                            </li>
                            <li>
                                <a href="/">October 2013</a>
                            </li>
                            <li>
                                <a href="/">September 2013</a>
                            </li>
                            <li>
                                <a href="/">August 2013</a>
                            </li>
                            <li>
                                <a href="/">July 2013</a>
                            </li>
                            <li>
                                <a href="/">June 2013</a>
                            </li>
                            <li>
                                <a href="/">May 2013</a>
                            </li>
                            <li>
                                <a href="/">April 2013</a>
                            </li>
                        </ol>
                    </div>

                    <div className="p-3">
                        <h4 className="font-italic">Elsewhere</h4>
                        <ol className="list-unstyled">
                            <li>
                                <a href="/">GitHub</a>
                            </li>
                            <li>
                                <a href="/">Twitter</a>
                            </li>
                            <li>
                                <a href="/">Facebook</a>
                            </li>
                        </ol>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Blog;