import React from 'react';
import { Nav } from "react-bootstrap";
import './Aside.css';
// eslint-disable-next-line

const Aside = () => {
    return (
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <div className="sidebar-sticky"></div>
            <div className="leftsidebar_accordion_panel show" id="img_fn_list_panel">
                <div id="project_info_panel">
                    <div className="rows">
                        <span className="cols">Name:</span>
                        <span className="cols">
                            <input type="text" id="project_name" title="VIA project name" />
                        </span>    
                    </div>
                </div>
                <div id="project_tools_panel">
                    <div className="button_panel">
                        <select id="filelist_preset_filters_list" title="Filter file list using predefined filters">
                            <option value="all">All Faces</option>
                            <option value="files_without_region">Show files without regions</option>
                            <option value="files_missing_region_annotations">Show files missing region annotations</option>
                            <option value="files_missing_file_annotations">Show files missing file annotations</option>
                            <option value="files_error_loading">Files that could not be loaded</option>
                            <option value="regex">Regular Expression</option>
                        </select>
                    </div>
                </div>

                <div id="img_fn_list"></div>
            </div>
        </Nav>
    );
}
export default Aside;