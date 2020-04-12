import React from 'react';
const Project = (props) => {
  const { title, description, stack, backgroundImageURL } = props.project;
  const width = 15;
  return (
    <div>
      <div className="col-md-4">
        <div class="card" style={{ width: width + 'em' }}>
          <img
            class="card-img-top"
            src="https://source.unsplash.com/random/286x180"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
