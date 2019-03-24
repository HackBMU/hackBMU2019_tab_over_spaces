import React, { Component } from 'react';
import '../dashboard/style.css'
import Sidebar from '../sidebar/sidebar'
import ImageUpload from '../uploadImage/uploadImage'


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
                            <ImageUpload />
                        </div>
                </main>
                </div>
		</main>
    );
  }
}

export default Dashboard
