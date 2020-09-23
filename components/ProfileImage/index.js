import React, { Component } from 'react'
import './style.scss'
import  LazyLoad from 'react-lazyload'
export default class ProfileImage extends Component {
    render() {
        return (
            <div className="circleContainer">
                <div className="profileImage">
                    <LazyLoad>
                        <img src="/icons/profileImage.jpeg" />
                    </LazyLoad>
                </div>
            </div>
        )
    }
}
