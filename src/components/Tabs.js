import React, {Component} from 'react';

class Tabs extends Component{
    render(){
        return(
            <div>
                <h1>Tabs</h1>
                <div className="container-tab">
                    This is the container
                    <div className="tab-header">
                        This is the header section of the table
                        <ul className="tab-header-block">
                          <li className = "active">Cap</li>
                          <li>Stark</li>
                          <li>Banner</li>
                          <li>Black Widow</li>  
                        </ul>
                    </div>
                        <div className="tab-body">
                            This is the body section of the tab
                            <div className="tab-body-content">
                                This is where the content of the tab will be displayed according to the tab selected.<br />
                                what we need to do: <ol>
                                    <li>Design the whole tab system with CSS</li>
                                    <li>Ensure that the header block has the header content listed</li>
                                    <li>Create click action on the header to change the css to make it look like it is the content that is selected</li>
                                    <li>Make the body change content accordingly</li>
                                    <li>Refactor the code break into smaller components if necessary</li>
                                    <li>Add animations</li>
                                </ol>
                            </div>
                        </div>
                </div>
            </div>
        );
    };
};

export default Tabs;