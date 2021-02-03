import React from 'react';
// import { useRouter } from 'next/router';
// import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

// const myLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

const ReturnHomeButton = ({ position, top, right, margin, centered }) => (
  <Link href="/ux">
    <a>
      <div>
        <svg
          width="146"
          height="32"
          viewBox="0 0 146 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M27.8597 13.4253H18.3854L20.3238 11.4869C20.5967 11.2141 20.5967 10.7717 20.3238 10.4989C20.0509 10.2259 19.6086 10.226 19.3357 10.4989L16.2046 13.63C15.9318 13.9029 15.9318 14.3452 16.2046 14.6181L19.3357 17.7491C19.4721 17.8856 19.6509 17.9538 19.8297 17.9538C20.0085 17.9538 20.1873 17.8855 20.3237 17.7491C20.5966 17.4763 20.5966 17.0339 20.3237 16.7611L18.3853 14.8227H27.8597C29.3721 14.8227 30.6026 16.0532 30.6026 17.5656C30.6026 19.0781 29.3721 20.3086 27.8597 20.3086H22.0963C21.7104 20.3086 21.3977 20.6213 21.3977 21.0072C21.3977 21.3931 21.7104 21.7059 22.0963 21.7059H27.8597C30.1426 21.7059 31.9999 19.8485 31.9999 17.5656C31.9999 15.2827 30.1427 13.4253 27.8597 13.4253Z"
              fill="#011B69"
            />
          </g>
          <path
            d="M45.258 21L42.682 16.968H41.296V21H40.022V11.13H43.27C44.39 11.13 45.23 11.4007 45.79 11.942C46.35 12.474 46.63 13.1833 46.63 14.07C46.63 14.8727 46.406 15.5213 45.958 16.016C45.51 16.5013 44.8613 16.8047 44.012 16.926L46.7 21H45.258ZM41.296 16.044H43.158C44.6047 16.044 45.328 15.4093 45.328 14.14C45.328 12.8707 44.6047 12.236 43.158 12.236H41.296V16.044ZM55.2541 16.73C55.2541 17.0007 55.2354 17.234 55.1981 17.43H49.0521C49.0801 18.3073 49.3274 18.9653 49.7941 19.404C50.2701 19.8427 50.8488 20.062 51.5301 20.062C52.1461 20.062 52.6594 19.908 53.0701 19.6C53.4901 19.2827 53.7468 18.8627 53.8401 18.34H55.1981C55.1048 18.872 54.8948 19.348 54.5681 19.768C54.2508 20.188 53.8354 20.5147 53.3221 20.748C52.8088 20.9813 52.2301 21.098 51.5861 21.098C50.8488 21.098 50.1954 20.9393 49.6261 20.622C49.0568 20.3047 48.6088 19.852 48.2821 19.264C47.9648 18.6667 47.8061 17.9667 47.8061 17.164C47.8061 16.3613 47.9648 15.6613 48.2821 15.064C48.6088 14.4667 49.0568 14.0093 49.6261 13.692C50.1954 13.3747 50.8488 13.216 51.5861 13.216C52.3328 13.216 52.9814 13.3747 53.5321 13.692C54.0921 14.0093 54.5168 14.434 54.8061 14.966C55.1048 15.498 55.2541 16.086 55.2541 16.73ZM53.9661 16.814C53.9941 16.2447 53.9008 15.7687 53.6861 15.386C53.4714 15.0033 53.1774 14.7187 52.8041 14.532C52.4308 14.3453 52.0248 14.252 51.5861 14.252C50.8861 14.252 50.2981 14.4713 49.8221 14.91C49.3461 15.3393 49.0894 15.974 49.0521 16.814H53.9661ZM60.5884 19.88V21H59.6364C58.8524 21 58.2644 20.8133 57.8724 20.44C57.4898 20.0667 57.2984 19.4413 57.2984 18.564V14.42H56.1504V13.314H57.2984V11.396H58.5864V13.314H60.5744V14.42H58.5864V18.592C58.5864 19.0867 58.6751 19.4273 58.8524 19.614C59.0391 19.7913 59.3564 19.88 59.8044 19.88H60.5884ZM68.9751 13.314V21H67.7011V19.194C67.5051 19.8193 67.1551 20.3 66.6511 20.636C66.1564 20.9627 65.5778 21.126 64.9151 21.126C64.0284 21.126 63.3098 20.8413 62.7591 20.272C62.2084 19.6933 61.9331 18.8673 61.9331 17.794V13.314H63.2071V17.668C63.2071 18.4333 63.4031 19.026 63.7951 19.446C64.1871 19.8567 64.7191 20.062 65.3911 20.062C66.0911 20.062 66.6511 19.838 67.0711 19.39C67.4911 18.9327 67.7011 18.27 67.7011 17.402V13.314H68.9751ZM72.2901 14.868C72.5421 14.336 72.9108 13.9253 73.3961 13.636C73.8815 13.3373 74.4601 13.188 75.1321 13.188V14.574H74.7401C74.0215 14.574 73.4335 14.7607 72.9761 15.134C72.5188 15.498 72.2901 16.1047 72.2901 16.954V21H71.0161V13.314H72.2901V14.868ZM80.4352 13.188C81.3312 13.188 82.0545 13.4773 82.6052 14.056C83.1559 14.6253 83.4312 15.4513 83.4312 16.534V21H82.1572V16.646C82.1572 15.8807 81.9612 15.2927 81.5692 14.882C81.1772 14.4713 80.6452 14.266 79.9732 14.266C79.2732 14.266 78.7132 14.4947 78.2932 14.952C77.8732 15.4 77.6632 16.058 77.6632 16.926V21H76.3892V13.314H77.6632V15.134C77.8592 14.5087 78.2045 14.028 78.6992 13.692C79.2032 13.356 79.7819 13.188 80.4352 13.188ZM96.4183 11.13V21H95.1303V16.436H90.1183V21H88.8443V11.13H90.1183V15.4H95.1303V11.13H96.4183ZM101.942 13.216C102.679 13.216 103.337 13.3747 103.916 13.692C104.504 14.0093 104.961 14.4667 105.288 15.064C105.624 15.6613 105.792 16.3613 105.792 17.164C105.792 17.9667 105.624 18.6667 105.288 19.264C104.961 19.852 104.504 20.3047 103.916 20.622C103.337 20.9393 102.679 21.098 101.942 21.098C101.204 21.098 100.542 20.9393 99.9536 20.622C99.3749 20.3047 98.9176 19.852 98.5816 19.264C98.2456 18.6667 98.0776 17.9667 98.0776 17.164C98.0776 16.3613 98.2456 15.6613 98.5816 15.064C98.9176 14.4667 99.3749 14.0093 99.9536 13.692C100.542 13.3747 101.204 13.216 101.942 13.216ZM101.942 14.336C101.484 14.336 101.06 14.4387 100.668 14.644C100.285 14.8493 99.9723 15.1667 99.7296 15.596C99.4963 16.016 99.3796 16.5387 99.3796 17.164C99.3796 17.78 99.4963 18.3027 99.7296 18.732C99.9723 19.152 100.285 19.4647 100.668 19.67C101.06 19.8753 101.484 19.978 101.942 19.978C102.399 19.978 102.819 19.8753 103.202 19.67C103.594 19.4647 103.906 19.152 104.14 18.732C104.382 18.3027 104.504 17.78 104.504 17.164C104.504 16.5387 104.382 16.016 104.14 15.596C103.906 15.1667 103.594 14.8493 103.202 14.644C102.819 14.4387 102.399 14.336 101.942 14.336ZM116.902 13.188C117.798 13.188 118.516 13.4773 119.058 14.056C119.608 14.6253 119.884 15.4513 119.884 16.534V21H118.61V16.646C118.61 15.89 118.423 15.3113 118.05 14.91C117.686 14.5087 117.182 14.308 116.538 14.308C115.866 14.308 115.324 14.532 114.914 14.98C114.512 15.4187 114.312 16.0673 114.312 16.926V21H113.038V16.646C113.038 15.89 112.851 15.3113 112.478 14.91C112.104 14.5087 111.6 14.308 110.966 14.308C110.284 14.308 109.738 14.532 109.328 14.98C108.926 15.4187 108.726 16.0673 108.726 16.926V21H107.452V13.314H108.726V15.064C108.912 14.4573 109.244 13.9953 109.72 13.678C110.205 13.3513 110.76 13.188 111.386 13.188C112.039 13.188 112.604 13.356 113.08 13.692C113.565 14.0187 113.91 14.504 114.116 15.148C114.33 14.5227 114.69 14.042 115.194 13.706C115.698 13.3607 116.267 13.188 116.902 13.188ZM128.932 16.73C128.932 17.0007 128.913 17.234 128.876 17.43H122.73C122.758 18.3073 123.005 18.9653 123.472 19.404C123.948 19.8427 124.527 20.062 125.208 20.062C125.824 20.062 126.337 19.908 126.748 19.6C127.168 19.2827 127.425 18.8627 127.518 18.34H128.876C128.783 18.872 128.573 19.348 128.246 19.768C127.929 20.188 127.513 20.5147 127 20.748C126.487 20.9813 125.908 21.098 125.264 21.098C124.527 21.098 123.873 20.9393 123.304 20.622C122.735 20.3047 122.287 19.852 121.96 19.264C121.643 18.6667 121.484 17.9667 121.484 17.164C121.484 16.3613 121.643 15.6613 121.96 15.064C122.287 14.4667 122.735 14.0093 123.304 13.692C123.873 13.3747 124.527 13.216 125.264 13.216C126.011 13.216 126.659 13.3747 127.21 13.692C127.77 14.0093 128.195 14.434 128.484 14.966C128.783 15.498 128.932 16.086 128.932 16.73ZM127.644 16.814C127.672 16.2447 127.579 15.7687 127.364 15.386C127.149 15.0033 126.855 14.7187 126.482 14.532C126.109 14.3453 125.703 14.252 125.264 14.252C124.564 14.252 123.976 14.4713 123.5 14.91C123.024 15.3393 122.767 15.974 122.73 16.814H127.644Z"
            fill="#011B69"
          />
          <path
            d="M0 0V-1H-1V0H0ZM146 0H147V-1H146V0ZM146 32V33H147V32H146ZM0 32H-1V33H0V32ZM0 1H146V-1H0V1ZM145 0V32H147V0H145ZM146 31H0V33H146V31ZM1 32V0H-1V32H1Z"
            fill="#011B69"
          />
          <defs>
            <clipPath id="clip0">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(16 8)"
              />
            </clipPath>
          </defs>
        </svg>
        <style jsx>{`
          div {
            position: ${position};
            top: ${top};
            right: ${right};
            margin: ${margin};
          }
          svg {
            display: block;
            transition: all 0.25s ease;
            margin: ${centered ? '0 auto 80px auto' : 'initial'};
          }
          svg:hover {
            cursor: pointer;
            transform: scale(1.05);
          }
        `}</style>
      </div>
    </a>
  </Link>
);

const ImageWithCaption = ({ image, caption }) => (
  <>
    <img src={`/static/${image}.jpg`} className="imageframe" alt="image" />

    <span>{caption}</span>

    <style jsx>{`
      img.imageframe {
        display: block;
      }
      span {
        font-size: 14px;
        font-weight: 300;
        display: block;
        margin: 8px 0 64px 0;
      }
    `}</style>
  </>
);

const veryLightBlue = '#e2edf1';
const darkBlue = '#011B69';

const Header = styled.h1`
  font-size: 52px;
  font-weight: 300;
  margin: 40px 0 0 0;
  /* color: ${p => p.color}; */
  color: var(--color);
  height: 62px;
`;

const SmallText = styled.p`
  font-size: 14px;
  font-weight: 300;
  margin: 0 0 0 0;
`;

const Line = styled.hr`
  max-width: 792px;
  border: 1px solid ${darkBlue};
`;

const LineHeader = () => {
  return (
    <>
      <SmallText>Project</SmallText>
      <Line />
    </>
  );
};

export default function Anthemai() {
  // const router = useRouter();
  // const { projectPage } = router.query;

  return (
    <div className="outer-container">
      <div className="container">
        {/* <p>This is a project page named {projectPage}</p> */}

        {/* <img src="/static/btn_returnhome.svg" className="button" alt="button" /> */}

        <ReturnHomeButton
          position={'absolute'}
          top={'40px'}
          right={0}
          margin={null}
        />

        <div className="inner">
          {/* <img src="/static/projectbadge.svg" className="badge" alt="badge" /> */}

          <LineHeader />

          <div className="flex-container">
            <img
              src="/static/logobox-anthemai.jpg"
              alt="logobox-anthemai"
              width="96"
              height="96"
              className="logobox"
            />

            <div className="text-container">
              <Header style={{ '--color': '#011b69' }}>Anthem AI</Header>

              <h3>
                Telemedicine web application connecting physicians and their
                patients
              </h3>
            </div>
          </div>
          {/* <Image
          src="/static/Blockparty-800x400-2.jpg"
          alt="portfolio image"
          width={792}
          height={512}
          // layout="fill"
          // layout="fixed"
          // layout="intrinsic"
          // layout="responsive"
          // objectFit="cover"
          // quality={100}
          // loader={myLoader}
          // className="imageframe"
        /> */}

          <ImageWithCaption
            image={'anthemai/provider__healthos--dashboard'}
            caption="two This is a one-line area for a caption"
          />

          <ImageWithCaption
            image={'anthemai/Patients_rev'}
            caption="three This is a one-line area for a caption"
          />
          <ImageWithCaption
            image={'anthemai/provider__telehealth--patients'}
            caption="three This is a one-line area for a caption"
          />

          <ImageWithCaption
            image={'anthemai/patient__telehealth--appointments'}
            caption="one This is a one-line area for a caption"
          />
          <ImageWithCaption
            image={'anthemai/Sign-In_rev'}
            caption="three This is a one-line area for a caption"
          />

          <br />
          <br />

          {/* <img
          src="/static/btn_returnhome.svg"
          className="button-bottom"
          alt="button"
        /> */}

          <ReturnHomeButton
            position={'static'}
            top={'initial'}
            right={'initial'}
            margin={'0 auto'}
            centered={true}
          />

          <br />
          <br />
        </div>
      </div>
      <style jsx>{`
        * {
          color: #011b69;
        }
        .badge {
          position: relative;
        }
        .text-container {
          background: none;
        }

        .flex-container {
          display: flex;
          margin: 0 0 48px 0;
        }
        .logobox {
          margin: 48px 24px 0 0;
        }
        .inner {
          position: relative;
          top: 112px;
        }

        .outer-container {
          background-color: ${veryLightBlue};
          height: 140%;
        }
        .container {
          position: relative;
          max-width: 792px;
          margin: auto;
        }
        h1 {
          font-size: 56px;
          font-weight: 300;
          margin: 40px 0 0 0;
        }
        h3 {
          font-size: 18px;
          font-weight: 300;
          max-width: 480px;
          line-height: 1.3;
          margin: 0px 0 40px 0;
        }
      `}</style>
    </div>
  );
}
