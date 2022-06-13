import React from "react";
export default function Footer() {
    return (
      <>
        <footer
          className="w-100 py-4 flex-shrink-0"
          style={{ backgroundImage: "url(https://images.i-diamants.com/images/news2.jpg)" }}
          
        >
          <section class="mb-4" style={{ textAlign: "center" }}>
            <span
              style={{ textAlign: "center", color: "#FFF", fontWeight: "bold" }}
            >
              <i>N'oubliez pas de vous s'abonner!</i>
            </span>
            <br />
            <br />
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com/BYJARRAYA"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
   
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </section>
   
          <div className="container py-4">
            <div className="row gy-4 gx-5">
              <div className="col-lg-4 col-md-6">
                <img
                  className="d-none d-md-block"
                  src="https://diamelle.tn/wp-content/uploads/2020/09/logo-footer.png"
                  alt="home"
                  style={{ marginBottom: "10px" }}
                />
                <p className="small text-muted">
                  DIAMELLE By JARRAYA est une bijouterie installée sur Tunis
                  depuis 1978.
                </p>
                <p className="small text-muted mb-0">
                  &copy; Copyrights. All rights reserved.{" "}
                </p>
              </div>
              <div className="col-lg-2 col-md-6">
                <h5 className="text-white mb-3">Liens</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <a>Acceuil</a>
                  </li>
                  <li>
                    <a>propos</a>{" "}
                  </li>
                  <li>
                    <a>Collections</a>
                  </li>
                  <li>
                    <a>FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className="text-white mb-3">Adresses</h5>
                <ul className="list-unstyled text-muted">
                  <li>
                    <p>
                      Adresse 1 : 42 Complexe Carré du Lac -1053 – Les berges du
                      lac. <br /> Contact 1 : 70 294 666 / 29 776 641 / 29 777 894
                    </p>
                  </li>
                  <li>
                    <p>
                      Adresse 2 : 5 rue lac victoria centre commercial kenzet –
                      Les berges du lac. <br /> Contact 2 : 70 297 455 / 28 280
                      838
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
  