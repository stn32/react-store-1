import React from 'react';
import slide1 from './img/slide1.jpg';


export default function Content() {
    return (
        <div className='content'>
            <div className='content__presentation'>
                <img src={slide1} alt="slide" />
                <h1>All for your live</h1>
            </div>
            <div className='content__description'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis cupiditate, consequatur harum dignissimos esse maiores accusamus aliquid ullam? Quos vero nam maxime eius nulla in minus blanditiis quod facere temporibus, alias ab tempore?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi vitae nesciunt debitis ipsum quidem velit non quis optio est, officia, omnis sapiente iure reprehenderit ad quae magni praesentium doloremque cumque! Odit cum possimus neque necessitatibus, optio dolorem asperiores, quos, cumque earum ullam soluta voluptas animi incidunt esse nihil!</p>
            </div>
        </div>
    )
}
