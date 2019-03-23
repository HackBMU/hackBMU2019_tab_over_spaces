import React, { Component } from 'react';
import './style.css'
import Sidebar from '../sidebar/sidebar'
import image from '../login/image.jpg'

class Dashboard extends Component {
  render() {


    return (
        <main>
            <div className="s-layout">
                <Sidebar />
            
                <main className="s-layout__content">
                    <div className="dash_contain">
                        <p>DASHBOARD</p>
                        <br /><br />
                            <h1>Design</h1>
                        <br /><br />
                            <div className="grid">
                                <div className="grid-item">
                                    <div id="content" style={{backgroundImage: `url(${image})`, backgroundSize: "cover"}}></div>
                                </div>
                            </div>
                        </div>
                </main>
                </div>
		</main>
    );
  }
}

export default Dashboard
