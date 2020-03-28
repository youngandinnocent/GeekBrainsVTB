import React, { Component } from 'react';

import { Header } from 'components/Header';
import './Pages.css';

export class ProfilePage extends Component {
    render() {
        return (
            <div className="profile">
                <Header />
                <div>
                    <h1>Profile</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Aliquam ipsa deserunt repudiandae impedit ut delectus iste,
                        eum esse atque facilis, ex aspernatur minus in? Vero officiis
                        suscipit aliquid voluptatem est.
                    </p>
                </div>
            </div>
        );
    }
}
