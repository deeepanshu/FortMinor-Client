import React from "react";
import "./Contact.css";

const Contact = props => {
    return (
        <div class="container" id="box" >
            <div class="row">
                <div class="col-4">
                    <img class="d-block w-100" src="http://via.placeholder.com/720x866" />
                </div>
                <div class="col-8">
                    <h3>Send us your message</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Full name" />
                        </div>
                        <div class="form-group">
                            <input
                                type="numeric"
                                class="form-control"
                                placeholder="Phone number"
                            />
                        </div>
                        <div class="form-group">
                            <input
                                type="email"
                                class="form-control"
                                placeholder="Email address"
                            />
                        </div>
                        <div class="form-group">
              <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
              />
                        </div>
                        <button type="submit" class="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;