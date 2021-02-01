<template>
  <!-- Start footer section -->
  <footer class="footer-section section-gap-half">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <img class="admin-logo img-fluid" src="../assets/img/admin logo.png">
        </div>
        <div class="col-md-3 col-sm-12">
          <p><strong>Company</strong></p>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Press & Media</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-12">
          <p><strong>Resources</strong></p>
          <ul>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="privacy-policy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="terms-of-use.html">Terms of Use</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-12">
          <p><strong>Follow Us</strong></p>
          <ul id="social">
            <li>
              <a class="first-icon" target="_blank" href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="#">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <!-- End footer section -->
</template>
<style scoped>
a,
a:focus,
a:hover {
  text-decoration: none;
  outline: 0;
}

.admin-logo {
  object-fit: cover;
  width: 170px;
}

@media (max-width: 576px) {
    .admin-logo {
        margin-bottom: 20px;
    }
    .footer-section {
        text-align: center !important;
    }
  .footer-cols,
  .copyright-text,
  #social {
    text-align: center !important;
  }
}
</style>