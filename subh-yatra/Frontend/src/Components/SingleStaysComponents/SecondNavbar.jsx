import { Box } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import AreaSection from "./AreaSection";
import InfoSection from "./InfoSection";
import RoomsSection from "./RoomsSection";
import "../../Pages/SingleStay.css";
import AboutProperty from "./AboutProperty";
import PoliciesSection from "./PoliciesSection";
import useTimeout from "use-timeout";
import Gallery from "./Gallery";
const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
const SecondNavbar = ({ singleProduct }) => {
  const [message, setMessage] = useState(false);

  useTimeout(() => setMessage(!message), 2000);

  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const overviewRef = useRef(null);
  const roomsRef = useRef(null);
  const locationRef = useRef(null);
  const aboutpropertyRef = useRef(null);
  const policiesRef = useRef(null);
  const reviewsRef = useRef(null);

  const sectionRefs = [
    { section: "Over View", ref: overviewRef },
    { section: "Rooms", ref: roomsRef },
    { section: "Location", ref: locationRef },
    { section: "About Property", ref: aboutpropertyRef },
    { section: "Policies", ref: policiesRef },
    { section: "Reviews", ref: reviewsRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  return (
    <div>
      {message === true ? (
        <Box
          style={{
            width: "100%",
            left: "0",
            borderBottom: "0.1px solid grey",
          }}
        >
          <Box ref={overviewRef}>
            <Box>
              <Gallery singleProduct={singleProduct} />
              <Box className="sticky">
                <Box className="header" ref={headerRef}>
                  <button
                    type="button"
                    className={`header_link ${
                      visibleSection === "Over View" ? "selected" : ""
                    }`}
                    onClick={() => {
                      scrollTo(overviewRef.current);
                    }}
                  >
                    Over View
                  </button>
                  <button
                    type="button"
                    className={`header_link ${
                      visibleSection === "Rooms" ? "selected" : ""
                    }`}
                    onClick={() => {
                      scrollTo(roomsRef.current);
                    }}
                  >
                    Rooms
                  </button>
                  <button
                    type="button"
                    className={`header_link ${
                      visibleSection === "Location" ? "selected" : ""
                    }`}
                    onClick={() => {
                      scrollTo(locationRef.current);
                    }}
                  >
                    Location
                  </button>
                  <button
                    type="button"
                    className={`header_link ${
                      visibleSection === "About Property" ? "selected" : ""
                    }`}
                    onClick={() => {
                      scrollTo(aboutpropertyRef.current);
                    }}
                  >
                    About Property
                  </button>
                  <button
                    type="button"
                    className={`header_link ${
                      visibleSection === "Policies" ? "selected" : ""
                    }`}
                    onClick={() => {
                      scrollTo(policiesRef.current);
                    }}
                  >
                    Policies
                  </button>
                </Box>
              </Box>
            </Box>
            <InfoSection singleProduct={singleProduct} />
          </Box>
          <Box ref={roomsRef}>
            <RoomsSection singleProduct={singleProduct} />
          </Box>
          <Box ref={locationRef}>
            <AreaSection singleProduct={singleProduct} />
          </Box>
          <Box ref={aboutpropertyRef}>
            <AboutProperty singleProduct={singleProduct} />
          </Box>
          <Box ref={policiesRef}>
            <PoliciesSection singleProduct={singleProduct} />
          </Box>
        </Box>
      ) : (
        <Box
          style={{
            width: "100%",
            left: "0",
            borderBottom: "0.1px solid grey",
          }}
        >
          <Box className="sticky">
            <Box className="header" ref={headerRef}>
              <button
                type="button"
                className={`header_link ${
                  visibleSection === "Over View" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(overviewRef.current);
                }}
              >
                Over View
              </button>
              <button
                type="button"
                className={`header_link ${
                  visibleSection === "Rooms" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(roomsRef.current);
                }}
              >
                Rooms
              </button>
              <button
                type="button"
                className={`header_link ${
                  visibleSection === "Location" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(locationRef.current);
                }}
              >
                Location
              </button>
              <button
                type="button"
                className={`header_link ${
                  visibleSection === "About Property" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(aboutpropertyRef.current);
                }}
              >
                About Property
              </button>
              <button
                type="button"
                className={`header_link ${
                  visibleSection === "Policies" ? "selected" : ""
                }`}
                onClick={() => {
                  scrollTo(policiesRef.current);
                }}
              >
                Policies
              </button>
            </Box>
          </Box>
          <Box ref={overviewRef}>
            <InfoSection singleProduct={singleProduct} />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default SecondNavbar;
