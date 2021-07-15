import React from 'react'
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask, MDBContainer } from "mdbreact";
export default function Card() {
  return (
    <div>
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Our best projects
        </h2>
        <p className="grey-text w-responsive text-center mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          est laborum.
        </p>
           <MDBContainer>
        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <img
              src="https://static.toiimg.com/photo/msid-75492547/75492547.jpg?2085616"
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="chart-bar" size="2x" className="indigo-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">xx</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="music" size="2x" className="pink-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">xx</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="smile" size="2x" className="blue-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">xx</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
        <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="chart-bar" size="2x" className="indigo-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">xx</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon icon="music" size="2x" className="pink-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">xx</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol md="1" size="2">
                <MDBIcon far icon="smile" size="2x" className="blue-text" />
              </MDBCol>
              <MDBCol md="11" size="10">
                <h5 className="font-weight-bold mb-3">xx</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                  Reprehenderit maiores nam, aperiam minima elit assumenda
                  voluptate velit.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol lg="5">
            <img
              src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_12/2027591/170606-better-marriage-two-rings-se-258p.jpg"
              alt=""
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
        </MDBRow>
        </MDBContainer>
      </section>
    </div>
  )
}
