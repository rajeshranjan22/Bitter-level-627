import { Menu, MenuButton, MenuList, Button, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCalendarEvent, BsFillPersonFill } from "react-icons/bs";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/App-reducer/action";
import useDebouce from "./Debouncing";
import { useRef } from "react";

const HomeSearch = () => {
  const [searchparam, setSearchparam] = useSearchParams();
  const [checkInDate, setCheckinDate] = useState(
    new Date().toJSON().slice(0, 10)
  );
  const [checkOutDate, setCheckoutDate] = useState(
    new Date().toJSON().slice(0, 10)
  );
  const [query, setQuery] = useState("");
  const [city, setCity] = useState(searchparam.get("city") || "");
  const [searchparams, setSearchparms] = useState("");
  const dispatch = useDispatch();
  const ref = useRef(null);

  const searchdata = useSelector((items) => items.AppReducer.data);

  useDebouce(() => {
    setSearchparms(query);
  }, 700);

  const calledData = () => {
    dispatch(fetchData(searchparams));
  };

  const handleFocus = () => {
    ref.current.focus();
  };

  const handleSet = (name, city) => {
    setQuery(name);
    setCity(city);
    localStorage.setItem("city", JSON.stringify(city));
    dispatch(fetchData(city));
  };

  useEffect(() => {
    handleFocus();
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "dates",
      JSON.stringify({ checkin: checkInDate, checout: checkOutDate })
    );
  }, [checkInDate, checkOutDate]);

  useEffect(() => {
    calledData();
    if (query.length > 0) {
      setSearchparam({ city: query });
    }
  }, [setSearchparam, searchparams]);

  console.log(searchparams, city);
  return (
    <div>
      <div className="max-w-min   md:max-w-full flex flex-col items-center  gap-y-4 m-auto lg:flex-row justify-center lg:gap-y-7   lg:gap-x-4">
        {/* Going to */}
        <div>
          <Menu>
            <MenuButton
              as={Button}
              w={{ base: "300px", sm: "400px", md: "400px", lg: "440px" }}
              h="46px"
              bg="white"
              border="1px solid black"
            >
              <div className="flex justify-start  items-center gap-3">
                <div>
                  <FaMapMarkerAlt size="20px" />
                </div>
                <div className="flex flex-col justify-start items-start ">
                  <h3 className="text-sm font-normal ">Going to</h3>
                  <h3 className="text-md font-medium">{searchparams} </h3>
                </div>
              </div>
            </MenuButton>
            <MenuList
              mt="-56px"
              w={{ base: "300px", sm: "400px", md: "400px", lg: "440px" }}
            >
              <div className="w-full bg-white" onMouseOver={handleFocus}>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  style={{
                    width: "300px",
                    padding: "4px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    outline: "none",
                  }}
                  ref={ref}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="w-62 rounded-md z-50">
                {searchdata.length !== 10 &&
                  searchdata.map((items) => (
                    // <Link to="/product">
                    <div
                      key={items._id}
                      className="w-full px-3 py-1 mt-1 hover:bg-background hover:text-black rounded-sm hover:cursor-pointer overflow-hidden"
                      onClick={() => handleSet(items.title, items.city)}
                    >
                      {items.aboutProperty.title}, {items.city}
                    </div>
                    // </Link>
                  ))}
              </div>
            </MenuList>
          </Menu>
        </div>

        <div className="flex flex-row gap-x-3 gap-y-3">
          {/* Check- in */}
          <div>
            <Menu>
              <MenuButton
                as={Button}
                w={{ base: "140px", sm: "200px", md: "200px", lg: "160px" }}
                h="46px"
                bg="white"
                border="1px solid black"
              >
                <div className="flex justify-start  items-center gap-3 overflow-hidden">
                  <div>
                    <BsCalendarEvent size="22px" />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <h3 className="text-sm font-normal ">Check-in</h3>
                    <h3 className="text-md font-medium">{checkInDate}</h3>
                  </div>
                </div>
              </MenuButton>
              <MenuList
                mt="-60px"
                w={{ base: "140px", sm: "200px", md: "200px", lg: "160px" }}
              >
                <Input
                  type="date"
                  value={checkInDate}
                  border="none"
                  onChange={(e) => setCheckinDate(e.target.value)}
                />
              </MenuList>
            </Menu>
          </div>
          {/* Check-out */}
          <div>
            <Menu>
              <MenuButton
                as={Button}
                w={{ base: "140px", sm: "200px", md: "200px", lg: "160px" }}
                h="46px"
                bg="white"
                border="1px solid black"
              >
                <div className="flex justify-start  items-center gap-3 overflow-hidden">
                  <div>
                    <BsCalendarEvent size="22px" />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <h3 className="text-sm font-normal ">Check-in</h3>
                    <h3 className="text-md font-medium">{checkOutDate}</h3>
                  </div>
                </div>
              </MenuButton>
              <MenuList
                mt="-60px"
                w={{ base: "140px", sm: "200px", md: "200px", lg: "160px" }}
              >
                <Input
                  type="date"
                  value={checkOutDate}
                  border="none"
                  onChange={(e) => setCheckoutDate(e.target.value)}
                />
              </MenuList>
            </Menu>
          </div>
        </div>
        {/* Travellers */}
        <div>
          <Menu>
            <MenuButton
              as={Button}
              w={{ base: "300px", sm: "400px", md: "400px", lg: "200px" }}
              h="46px"
              bg="white"
              border="1px solid black"
            >
              <div className="flex justify-start  items-center gap-3 overflow-hidden">
                <div>
                  <BsFillPersonFill size="24px" />
                </div>
                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-sm font-normal ">Travellers</h3>
                  <h3 className="text-md font-medium">1 room, 3 travellers</h3>
                </div>
              </div>
            </MenuButton>
          </Menu>
        </div>
      </div>
      <div className="w-full flex justify-center m-auto mt-6">
        <Link to="/product">
          <Button
            colorScheme="blue"
            w="160px"
            h="46px"
            fontWeight="md"
            fontSize="lg"
          >
            Search
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeSearch;
