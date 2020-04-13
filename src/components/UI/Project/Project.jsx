import React from 'react';
const Project = (props) => {
  const { title, description, stack, imageURL } = props.project;
  return (
    <>
      <div className="col-md-4">
        <div className="services">
          <h5>
            <b>{title}</b>
          </h5>
          <img
            className="card-img-top"
            src={imageURL}
            alt="Card image cap"
            width="250"
            height="180"
          />
          <div className="card-body">
            <p className="card-text">{description}</p>
            <a href="#" class="btn btn-danger btn-sm">
              View
            </a>
            <span className="badge badge-primary pull-right">{stack}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
