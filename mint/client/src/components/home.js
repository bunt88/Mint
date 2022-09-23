import React from "react";

function Home() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Mint
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                  Antiques
                </a>
                <a class="dropdown-item" href="#">
                  Vinyl Records
                </a>
                <a class="dropdown-item" href="#">
                  Comic Books
                </a>
                <a class="dropdown-item" href="#">
                  Vintage Clothes
                </a>
                <a class="dropdown-item" href="#">
                  Trading Cards
                </a>
                <a class="dropdown-item" href="#">
                  Toys and Figurines
                </a>
                <a class="dropdown-item" href="#">
                  Stamps
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Create Listing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                My Listings
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Wish List
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4 text-center">Featured Items</h1>
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

export default Home;
