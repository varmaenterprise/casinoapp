import React from 'react';
import './twocards.css';

function Twocards() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div class="card">
                        <img src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">Sports</h5>
                            <p class="card-text">
                                Our team continues to work hard to make something special for all sports. we are very confident that we can exceed our players' expectations for a perfect gaming experience which encompasses a product with a wide variety of markets for punters to choose from.
                            </p>
                            <p className='card-text'>We offering many different types of sports to bet on. Some of the most popular ones are definitely cricket, football, tennis, basketball, horse racing, and many more.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div class="card">
                        <img src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg" class="card-img-top" />
                        <div class="card-body">
                            <h5 class="card-title">Casino</h5>
                            <p class="card-text">
                                We’ve all grown to love the typical brick and mortar casino but there’s just something about online casino that triumphs over the rest. At 3rdEmpire, we believe that playing casino online should be an experience of its own. With thousands of titles available at the click of a button, it’s become possible to play casino online from the comfort of your home. All the while, sit back and immerse yourself in a world of mythical creatures and vigorous jokers
                            </p>
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Twocards;
