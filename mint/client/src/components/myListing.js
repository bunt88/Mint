import React from "react";

function MyListing() {
  return (
    <>
      <main>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4 text-center"></h1>
          </div>
        </div>

        <div class="container">
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-ttile">Card Title</h5>
              <p class="card-text">...</p>
              <a href="#" class="btn btn-primary">
                ...
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MyListing;
