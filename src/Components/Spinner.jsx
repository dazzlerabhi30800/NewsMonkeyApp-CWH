import React, { Component } from 'react';

export default class Spinner extends Component {
    render() {
        return (
            <div>
                <img className='mx-auto w-14 my-4' src="./images/loading.gif" alt="loading" />
            </div>
        )
    }
}