import React, {Component} from 'react';
import FileBase64 from "react-file-base64";

class SubAddCategory extends Component{

    getFiles(files){
        this.setState({ files: files });
        this.props.getImageBase64(files[0]?files[0].base64:"");
    }
    render() {
        return (
            <div className={"container"}>
                <FileBase64
                    multiple={ true }
                    onDone={ this.getFiles.bind(this) } />

                {this.props.base64 && (
                    <img  src={this.props.base64} alt={"Subcategory"} />
                )}
                <form onSubmit={this.props.submit}>
                    <div className="form-group row">
                        <div className="col-xs-6">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" id="name" name="name" type="text"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-xs-6">
                            <label htmlFor="description">Description</label>
                            <input className="form-control" id="description" name="description" type="text"/>
                        </div>
                    </div>
                    &nbsp;&nbsp;<button className="btn btn-danger" onClick={this.props.cancel}>Cancel</button>
                    <span style={{"float":"left"}}><button className="btn btn-primary">Submit</button></span>

                </form>
            </div>
        )
    }
}

export default SubAddCategory;