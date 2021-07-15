import React from "react";



import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBInput,
} from "mdbreact";

class AppPage extends React.Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
     
        <div id="apppage">
          
          <MDBView className="viewe">
            <MDBMask className="d-flex justify-content-center align-items-center gradient">
              <MDBContainer>
                <MDBRow>
                  <MDBCol
                    md="6"
                    className="white-text text-center text-md-left mt-xl-5 mb-5"
                  >
                    <MDBAnimation type="fadeInLeft" delay=".3s">
                      <h1 className="h1-responsive font-weight-bold mt-sm-5">
                        Shaadi Aapki, Tension Hamaari...
                      </h1>
                      <hr className="hr-light" />
                      <h6 className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Rem repellendus quasi fuga nesciunt dolorum nulla
                        magnam veniam sapiente, fugiat! Commodi sequi non animi
                        ea dolor molestiae iste.
                      </h6>

                      <MDBBtn outline color="white">
                        Learn More
                      </MDBBtn>
                    </MDBAnimation>
                  </MDBCol>

                  <MDBCol md="6" xl="5" className="mt-xl-5">
                    <MDBAnimation type="fadeInRight" delay=".3s">
                      <img
                        src="https://lh4.googleusercontent.com/zxO8ir_ZtvRbedKF8ql3UxlOBh3XKlf0Jjlu-ZOw2a5Pd_gsRb7hfEWZoN1XPETQ81qjVwFsmZKw9jWbkJJBE3pKma2fsjc-BQ7PUS-lLz0xKgJY0VZzXJUaOxiEsNb99EjPfgyr"
                        alt=""
                        className="img-fluid"
                      />
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
          </MDBView>

          <MDBContainer>
            <MDBRow className="">
              <MDBCol md="12" className="text-center">
            
              </MDBCol>
            </MDBRow>
          </MDBContainer>

          <section id="sec2">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                  <h1>Band Baaja Baaraat!</h1>
                  <p>
                    Shaadi Mubarak aims to revolutionize Indian wedding culture
                    through a digital experience. We provide a unified virtual
                    platform that can host zoom live coverages, showcase
                    pre-wedding photoshoots, and experiencing blessings that
                    would supersede the sharing of invitations via Social Media.
                    The cherry on top, Shaadi Mubarak designs a personalized
                    caricature as a token of love for the lovely couple!
                  </p>
                </MDBCol>
                <MDBCol md="6">
                  <MDBAnimation type="fadeInLeft " delay=".10s">
                    <img
                      src="https://static.wixstatic.com/media/d62739_01b569e1ad8b4a0ca7f294dad9e65075~mv2.png/v1/fill/w_336,h_387,al_c,q_85,usm_0.66_1.00_0.01/covid.webp"
                      alt=""
                      className="img-fluid"
                    />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <section>
            <MDBContainer id="sec3">
              <h1 className="sec3H">
                Plan Your Dream Wedding Online In 4 Easy Steps!
              </h1>
              <MDBRow>
                <MDBCol md="3">
                  <MDBCard>
                    <MDBCardBody>
                      <img src="https://img.icons8.com/doodle/48/000000/box--v2.png" />
                      <MDBCardTitle className="cardtitle1">
                        Select a wedding website.
                      </MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="3">
                  <MDBCard>
                    <MDBCardBody>
                      <img src="https://img.icons8.com/bubbles/50/000000/upload.png" />
                      <MDBCardTitle className="cardtitle1">
                        Upload your pictures and bio.
                      </MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="3">
                  <MDBCard>
                    <MDBCardBody>
                      <img src="https://img.icons8.com/ios/50/000000/delete-link.png" />
                      <MDBCardTitle className="cardtitle1">
                        Share URL with guests.
                      </MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol md="3">
                  <MDBCard>
                    <MDBCardBody>
                      <img src="https://img.icons8.com/bubbles/50/000000/couple-icloud.png" />
                      <MDBCardTitle className="cardtitle1">
                        Get married. We'll do the rest!
                      </MDBCardTitle>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>

              

              
          </section>
             
          <section className="text-center my-5  ">
            <h2 className="h1-responsive font-weight-bold ">
              Handcrafted For You...
            </h2>
            <p className="lead grey-text w-responsive mx-auto mb-5">
              From design to color, you have control over every little detail on
              your website.
            </p>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="3">
                  <img
                    src="https://static.wixstatic.com/media/d62739_db38eb339021410b9155f04b1a29219d~mv2.png/v1/fill/w_74,h_74,al_c,q_85,usm_0.66_1.00_0.01/wedding-invitation.webp"
                    alt=""
                  />
                  <h5 className="font-weight-bold my-4">Digital Invitations</h5>
                  <p className="grey-text mb-md-0 mb-5">
                    Get over WhatsApp forwards and share the all-inclusive
                    digital invitation card hassle free.
                  </p>
                </MDBCol>

                <MDBCol md="3">
                  <i class="fas fa-camera fa-4x "></i>
                  <h5 className="font-weight-bold my-4">
                    Pre-Wedding Shenanigans
                  </h5>
                  <p className="grey-text mb-md-0 mb-5">
                    Make your loved ones feel included by sharing your
                    pre-nuptials and photoshoots across.
                  </p>
                </MDBCol>
                <MDBCol md="3">
                  <img
                    src="https://static.wixstatic.com/media/d62739_314b31c4293841f28e021933e84f03c1~mv2.png/v1/fill/w_74,h_74,al_c,q_85,usm_0.66_1.00_0.01/video-camera.webp"
                    alt=""
                  />
                  <h5 className="font-weight-bold my-4">
                    Live Wedding Coverage
                  </h5>
                  <p className="grey-text mb-md-0 mb-5">
                    Now the wedding isn’t limited to just its venue. Show the
                    wedding via live stream to friends and family around the
                    globe.
                  </p>
                </MDBCol>
                <MDBCol md="3">
                  <img
                    src="https://static.wixstatic.com/media/d62739_cad8ec68c7254cc38400f7933aceb3ec~mv2.png/v1/fill/w_74,h_74,al_c,q_85,usm_0.66_1.00_0.01/envelope.webp"
                    alt=""
                  />
                  <h5 className="font-weight-bold my-4">Digital Shagun</h5>
                  <p className="grey-text mb-md-0 mb-5">
                    Blessings come in every form. Our secured payment gateway
                    lets you accept shagun instantly.
                  </p>
                </MDBCol>
                <MDBCol md="3">
                  <img
                    src="https://static.wixstatic.com/media/d62739_ca144c45db584d8d8f67ebf80de326f3~mv2.png/v1/fill/w_75,h_74,al_c,q_85,usm_0.66_1.00_0.01/gift%20(1).webp"
                    alt=""
                  />
                  <h5 className="font-weight-bold my-4">Gifts Cards</h5>
                  <p className="grey-text mb-md-0 mb-5">
                    Gift cards make the gifting experience easy and flexible
                    too!
                  </p>
                </MDBCol>
                <MDBCol md="3">
                  <img
                    src="https://static.wixstatic.com/media/d62739_88abfdc084f445c584e8543323fff72c~mv2.png/v1/fill/w_75,h_74,al_c,q_85,usm_0.66_1.00_0.01/social-services.webp"
                    alt=""
                  />
                  <h5 className="font-weight-bold my-4">Celebrate Together</h5>
                  <p className="grey-text mb-md-0 mb-5">
                    Keep updating your well-wishers with pictures and videos
                    from in house ceremonies.
                  </p>
                </MDBCol>
                <MDBCol md="3" >
                  <img
                    src="https://static.wixstatic.com/media/d62739_8a34df92414242f085e6be212f032918~mv2.png/v1/fill/w_75,h_75,al_c,q_85,usm_0.66_1.00_0.01/girlfriends.webp"
                    alt=""
                  />
                  <h5 className="font-weight-bold my-4">Wedding Caricature</h5>
                  <p className="grey-text mb-md-0 mb-5">
                    Relive the special moment with a handcrafted and
                    personalized caricature.
                  </p>
                </MDBCol>
                <MDBCol md="3"  >
                  <img
                    src="https://static.wixstatic.com/media/d62739_3eabe17fbebc4c47970550a1d62d5c0a~mv2.png/v1/fill/w_146,h_63,al_c,q_85,usm_0.66_1.00_0.01/Screenshot%25202020-10-25%2520020927_edited_.webp"
                    alt=""
                  />
                  <h5 className="font-weight-bold my-4">Cherish Forever</h5>
                  <p className="grey-text mb-md-0 mb-5">
                    Do you want to show this to your kids or even grandkids? We
                    got you covered!
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <section id="sec5">
            <MDBContainer>
              <MDBRow>
                <MDBCol lg="5" className="text-center text-lg-left">
                  <img
                    className="img-fluid"
                    src="https://i.cdn.newsbytesapp.com/images/l141_1961525344055.jpg"
                    alt=""
                  />
                </MDBCol>
                <MDBCol lg="7">
                  <MDBRow className="mb-3">
                    <MDBCol size="1">
                      <MDBIcon icon="share" size="lg" className="indigo-text" className="my-4 pb-2"/>
                    </MDBCol>
                    <MDBCol xl="10" md="11" size="10">
                      <h5 className="font-weight-bold mb-3">
                        Effortlessly Chic
                      </h5>
                      <p className="grey-text">
                        Custom-designed templates that will take your breath
                        away and are perfectly capable to represent your story.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <MDBCol size="1">
                      <MDBIcon icon="share" size="lg" className="indigo-text" className="my-4 pb-2"/>
                    </MDBCol>
                    <MDBCol xl="10" md="11" size="10">
                      <h5 className="font-weight-bold mb-3">Artfully Social</h5>
                      <p className="grey-text">
                        Artfully Social Invite and delight your guests with a
                        one-stop platform for engaging in your celebrations.
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-3">
                    <MDBCol size="1">
                      <MDBIcon icon="share" size="lg" className="indigo-text" className="my-4 pb-2" />
                    </MDBCol>
                    <MDBCol xl="10" md="11" size="10">
                      <h5 className="font-weight-bold mb-3">Truly Modern</h5>
                      <p className="grey-text">
                        Truly Modern Stay on top of it all wherever you are.
                        Timeless templates that never goes out of fashion,
                        letting you relive the memorable day
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          {/* pricing */}

          <section className="text-center fullsec6 ">
            <h2 className="h1-responsive font-weight-bold text-center ">
              Our pricing plans
            </h2>
            <p className="grey-text text-center w-responsive mx-auto mb-5" className="my-4 pb-2">
              Royal or Grand way, Choose from two personalized price plans based
              on your needs!
            </p>
            <MDBContainer>
              <MDBRow>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <img
                    src="https://cdn.modernghana.com/images/content/lovev%20s%20marriage.jpg"
                    alt=""
                  />
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBCard pricing>
                    <div className="price header white-text indigo rounded-top">
                      <i class="fas fa-tags fa-2x "></i>
                      <div className="version">
                        <h5 className="mb-0">Royal</h5>
                      </div>
                    </div>
                    <MDBCardBody className="striped mb-1">
                      <p className="mt-2">
                        <MDBIcon icon="check" className="green-text pr-2" />
                        Digital Invitations
                      </p>

                      <p>
                        <MDBIcon icon="check" className="green-text pr-2" />4
                        Email Digital Shagun
                      </p>

                      <p>
                        <MDBIcon icon="check" className="green-text pr-2" />
                        Live video Coverage Embeddings
                      </p>

                      <p>
                        <MDBIcon icon="check" className="green-text pr-2" />
                        Wedding Gallery
                      </p>

                      <p>
                        <MDBIcon icon="check" className="green-text pr-2" />
                        Website Bandwidth{" Limited to 5GB "}
                      </p>
                      <p>
                        <MDBIcon icon="check" className="green-text pr-2" />
                        Website Validity{" 6 months "}
                      </p>
                      <p>
                        <MDBIcon icon="times" className="red-text pr-2" />
                        Personalized Handcrafted Caricature
                      </p>
                      <p>
                        <MDBIcon icon="times" className="red-text pr-2" />
                        Custom URL Domains
                      </p>
                      <p>
                        <MDBIcon icon="times" className="red-text pr-2" />
                        Catalogue as a Memory
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                  <MDBCard pricing>
                    <div className="price header white-text deep-purple rounded-top">
                      <i class="fas fa-tags fa-2x"></i>
                      <div className="version">
                        <h5 className="mb-0">Grand</h5>
                      </div>
                    </div>
                    <MDBCardBody className="striped mb-1">
                      <p className="mt-2">
                        <MDBIcon icon="check" className="green-text pr-2" />
                        Digital Invitations
                      </p>

                      <p>
                        <MDBIcon icon="check" className="green-text pr-2" />4
                        Email Digital Shagun
                      </p>

                      <p>
                        <MDBIcon icon="check" className="green-text pr-2" />
                        Live video Coverage Embeddings
                      </p>

                      <p>
                        <MDBIcon icon="check" className="green-text pr-2" />
                        Wedding Gallery
                      </p>

                      <p>
                        <MDBIcon icon="check" className="green-text pr-2" />
                        Website Bandwidth{" Unlimited "}
                      </p>
                      <p>
                        <MDBIcon icon="check" className="green-text pr-2" />
                        Website Validity{" 12 months "}
                      </p>
                      <p>
                        <MDBIcon icon="check" className="green-text pr-2" />
                        Personalized Handcrafted Caricature
                      </p>
                      <p>
                        <MDBIcon icon="check" className="green-text pr-2" />
                        Custom URL Domains
                      </p>
                      <p>
                        <MDBIcon icon="check" className="green-text pr-2" />
                        Catalogue as a Memory
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <section>
            <MDBCard className=" px-5 pb-5 text-center">
              <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold ">
                  Our amazing team
                </h2>
                <p className="grey-text w-responsive mx-auto mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident voluptate esse quasi,
                  veritatis totam voluptas nostrum quisquam eum porro a pariatur
                  veniam.
                </p>
                <MDBRow>
                  <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                    <h5 className="font-weight-bold mt-4 mb-3">
                      Anna Williams
                    </h5>
                    <p className="text-uppercase blue-text"className="my-4 pb-2">xxr</p>
                    <p className="grey-text">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci sed quia non numquam modi
                      tempora eius.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="facebook-f" className="blue-text"className="my-4 pb-2" />
                      </a>
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="twitter" className="blue-text" className="my-4 pb-2"/>
                      </a>
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="instagram" className="blue-text" className="my-4 pb-2"/>
                      </a>
                    </ul>
                  </MDBCol>

                  <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                    <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
                    <p className="text-uppercase blue-text"className="my-4 pb-2">xx</p>
                    <p className="grey-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem ipsa accusantium doloremque rem laudantium
                      totam aperiam.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="facebook-f" className="blue-text" className="my-4 pb-2"/>
                      </a>
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="instagram" className="blue-text" className="my-4 pb-2"/>
                      </a>
                    </ul>
                  </MDBCol>

                  <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                    <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
                    <p className="text-uppercase blue-text"className="my-4 pb-2">Photographer</p>
                    <p className="grey-text">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim est fugiat nulla id
                      eu laborum.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="facebook-f" className="blue-text"  className="my-4 pb-2"/>
                      </a>
                      <a href="#!" className="p-2 fa-lg" >
                        <MDBIcon fab icon="instagram" className="blue-text" className="my-4 pb-2"/>
                      </a>
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="dribbble" className="blue-text" className="my-4 pb-2"/>
                      </a>
                    </ul>
                  </MDBCol>

                  <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
                    <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
                    <p className="text-uppercase blue-text"className="my-4 pb-2">xx</p>
                    <p className="grey-text " >
                      Perspiciatis repellendus ad odit consequuntur, eveniet
                      earum nisi qui consectetur totam officia voluptates
                      perferendis voluptatibus aut.
                    </p>
                    <ul className="list-unstyled mb-0">
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="facebook-f" className="blue-text" className="my-4 pb-2"/>
                      </a>
                      <a href="#!" className="p-2 fa-lg">
                        <MDBIcon fab icon="github" className="blue-text"className="my-4 pb-2" />
                      </a>
                    </ul>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </section>





             













          <section id="sec7">
            <MDBCard>
              <MDBContainer>
                <MDBRow>
                  <MDBCol lg="8">
                    <MDBCardBody className="form">
                      <h3 className="mt-4">
                        <MDBIcon icon="envelope" className="pr-2" />
                        Liked the idea? Let's talk !
                      </h3>
                      <MDBRow>
                        <MDBCol md="6">
                          <div className="md-form mb-0">
                            <MDBInput
                              type="text"
                              id="form-contact-name"
                              label="Your name"
                            />
                          </div>
                        </MDBCol>
                        <MDBCol md="6">
                          <div className="md-form mb-0">
                            <MDBInput
                              type="text"
                              id="form-contact-email"
                              label="Your email"
                            />
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="6">
                          <div className="md-form mb-0">
                            <MDBInput
                              type="text"
                              id="form-contact-phone"
                              label="Your phone"
                            />
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="12">
                          <div className="md-form mb-0">
                            <MDBInput
                              type="textarea"
                              id="form-contact-message"
                              label="Your message"
                            />
                            <MDBBtn rounded color="blue">
                              <MDBIcon icon="paper-plane" />
                            </MDBBtn>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCol>
                  <MDBCol lg="4">
                    <MDBCardBody className="contact text-center h-100 white-text">
                      <h3 className="my-4 pb-2">Contact information</h3>
                      <ul className="text-lg-left list-unstyled ml-4">
                        <li>
                          <p className="my-4 pb-2">
                            <MDBIcon icon="map-marker-alt" className="pr-2" />
                            Khakaguda, Karkhana, Secunderabad, Telangana.
                          </p>
                        </li>
                        <li>
                          <p className="my-4 pb-2">
                            <MDBIcon icon="phone" className="pr-2" />
                            +91 951 551 7921
                          </p>
                        </li>
                        <li>
                          <p className="my-4 pb-2">
                            <MDBIcon icon="envelope" className="pr-2" />
                            shaadi@thestorii.com
                          </p>
                        </li>
                      </ul>
                      <hr className="hr-light my-4" />
                      <ul className="list-inline text-center list-unstyled">
                        <li className="list-inline-item">
                          <a href="#!" className="p-2 fa-lg w-ic">
                            <MDBIcon fab icon="twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#!" className="p-2 fa-lg w-ic">
                            <MDBIcon fab icon="linkedin-in" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#!" className="p-2 fa-lg w-ic">
                            <MDBIcon fab icon="instagram" />
                          </a>
                        </li>
                      </ul>
                      <MDBBtn color="primary">BOOK A CONSULTATION</MDBBtn>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBCard>
          </section>
        </div>
      
    );
  }
}

export default AppPage;
