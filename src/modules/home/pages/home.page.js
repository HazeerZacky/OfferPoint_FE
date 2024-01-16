import React from "react";

export const HomePage = ()=>{
    return (
    <div>
        <header>
            <div class="container">
                <div class="page-banner home-banner">
                    <div class="row align-items-center flex-wrap-reverse h-100">
                        <div class="col-md-6 py-5 wow fadeInLeft">
                            <h1 class="mb-4">Find the latest business promotions.</h1>
                            <p class="text-lg text-grey mb-5">We are a dynamic and innovative advertisement agency dedicated to helping businesses</p>
                            <a href="https://www.youtube.com/watch?v=VCPGMjCW0is" target="_blank" class="btn btn-primary btn-split">
                                Watch Video
                                <div class="fab">
                                    <i class="fa fa-play" aria-hidden="true"></i>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-6 py-5 wow zoomIn">
                            <div class="img-fluid text-center">
                                <img className="w-auto" style={{height: 450}} src="https://png.pngtree.com/png-clipart/20220419/original/pngtree-marketing-strategy-campaign-concept-with-people-working-near-a-big-megaphone-png-image_7537111.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
    );
}