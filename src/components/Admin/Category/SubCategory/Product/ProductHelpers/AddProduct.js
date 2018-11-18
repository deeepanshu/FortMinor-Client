import React, { Component } from "react";
import FileBase64 from "react-file-base64";
class AddProduct extends Component {
  getFiles(files) {
    this.setState({ files: files });
    this.props.getImageBase64(files[0] ? files[0].base64 : "");
  }
  render() {
    return (
      <div className={"container"}>
        <form onSubmit={this.props.submit}>
          <div className="form-group row">
            <div className="col-xs-6">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                id="name"
                name="name"
                type="text"
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-xs-6">
              <label htmlFor="description">Description</label>
              <input
                className="form-control"
                id="description"
                name="description"
                type="text"
              />
            </div>
          </div>
          <FileBase64 multiple={true} onDone={this.getFiles.bind(this)} />
          {this.props.base64 && <img src={this.props.base64} alt={"Product"} />}
          <br />
          <br />
          <button onClick={this.props.toggleAddMoreHandler}>
            Add More Information
          </button>
          {this.props.toggleAddMore && (
            <div>
              <div className="form-group row">
                <div className="col-xs-6">
                  <label htmlFor="field">Field Name</label>
                  <input
                    className="form-control"
                    id="field"
                    name="field"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-xs-6">
                  <label htmlFor="field">Field Value</label>
                  <input
                    className="form-control"
                    id="value"
                    name="value"
                    type="text"
                  />
                </div>
              </div>
              <button>Add</button>
            </div>
          )}
          <br />
          <br />
          &nbsp;&nbsp;
          <button className="btn btn-danger" onClick={this.props.cancel}>
            Cancel
          </button>
          <span style={{ float: "left" }}>
            <button className="btn btn-primary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

export default AddProduct;
