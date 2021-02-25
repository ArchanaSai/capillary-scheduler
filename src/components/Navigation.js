import React from 'react'
import logo from './logo.jpg'

const Navigation = ({onRouteChange}) => {
    return (
        <div>
            <nav class="db dt-l w-100 border-box pa3 ph5-l bg-white row">
                <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" onClick={() => {onRouteChange("home")}} href="#hairImage" title="Home">
                    <img src={logo} class="dib w2 h2 br-100" alt="Logo"/>
                </a>
                <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" onClick={() => {onRouteChange("home")}} href="#hairImage" title="Home">Home</a>
                    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" onClick={() => {onRouteChange("home")}} href="#whatPanel" title="What">What is</a>
                    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" onClick={() => {onRouteChange("home")}} href="#workingPanel" title="How it Works">How it Works</a>
                    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" onClick={() => {onRouteChange("home")}} href="#benefitsPanel" title="Benefits">Benefits</a>
                    <p class="link dim dark-gray f6 f5-l dib mr3 mr4-l" onClick={() => {onRouteChange("products")}} title="Products">Products</p>
                    <a class="link dim dark-gray f6 f5-l dib" onClick={() => {onRouteChange("contact")}} href="#commentsPanel" title="Contact">Contact</a>
                </div>
            </nav>
        </div>
    );
}

export default Navigation