import Map from "./Map";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useDebouce from "./Debouncing";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/App-reducer/action";
import { Button, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { useRef } from "react";
let divider = {
  width: "240px",
  padding: "0.2px",
  marginTop: "20px",
  marginBottom: "20px",
  backgroundColor: "black",
};
let city = JSON.parse(localStorage.getItem("city"));
const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initial = searchParams.getAll("amenities");
  const [category, setCategory] = useState(initial || []);
  const initialSort = searchParams.get("SortBy");
  const [SortBy, SetSortBy] = useState(initialSort || "");
  const [query, setQuery] = useState("");
  const [x, setX] = useState("");
  const dispatch = useDispatch();
  const searchdata = useSelector((items) => items.AppReducer.data);
  const ref = useRef();
  useDebouce(() => {
    setX(query);
  }, 700);

  const problem = () => {
    dispatch(fetchData(x));
  };

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const option = e.target.value;
    let newCategory = [...category];

    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  // price sorting sortBy=price&sortOrder=asc
  const handleSort = (e) => {
    SetSortBy(e.target.value);
  };

  // search bar functionality
  const handleSet = (name) => {
    setQuery(name);
    dispatch(fetchData(name));
  };

  const handleFocus = () => {
    ref.current.focus();
  };

  useEffect(() => {
    if (category || SortBy) {
      localStorage.setItem("city", JSON.stringify(city));
      setSearchParams({ city: city, amenities: category, SortBy: SortBy });
    }

    problem();
  }, [category, setSearchParams, SortBy, x, city]);

  return (
    <div className="w-64 md:block ">
      {/* Map section */}
      <Map city={city} width="240px" height="220px" />
      <div style={divider}></div>
      <div>
        <h1 className="text-lg font-semibold mb-2">Search by property name</h1>
        <Menu>
          <MenuButton
            as={Button}
            w="240px"
            h="46px"
            bg="white"
            border="1px solid black"
          >
            <div className="flex justify-start  items-center gap-3">
              <div>
                <AiOutlineSearch size="24px" />
              </div>
              <div className="flex flex-col justify-start items-start ">
                <h3 className="text-sm font-normal ">Search</h3>
                <h3 className="text-md font-medium overflow-hidden">{query}</h3>
              </div>
            </div>
          </MenuButton>
          <MenuList mt="-56px" minW="240px">
            <div className="w-full bg-white" onMouseOver={handleFocus}>
              <input
                type="text"
                placeholder="Search by Name"
                style={{
                  width: "200px",
                  padding: "4px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  outline: "none",
                }}
                ref={ref}
                value={query}
                onChange={handleInput}
              />
            </div>
            <div className="w-62 rounded-md z-50">
              {searchdata.length !== 10 &&
                searchdata.map((items) => (
                  <Link to={`/product`}>
                    <div
                      key={items._id}
                      className="w-62 px-3 py-1 mt-2 hover:bg-background hover:text-black rounded-sm overflow-hidden"
                      onClick={() => handleSet(items.title)}
                    >
                      {items.aboutProperty.title}
                    </div>
                  </Link>
                ))}
            </div>
          </MenuList>
        </Menu>
      </div>
      <div style={divider}></div>

      {/* Sorting Functionaity */}

      <div>
        <h3 className="text-lg font-semibold mb-6"></h3>
        {/* sort by price ascending and descending */}
        <div
          className="flex flex-col justify-start gap-y-3 mt-6"
          onChange={handleSort}
        >
          <h3 className="text-md font-semibold mb-2">Sort by</h3>
          <div className="flex justify-start gap-4">
            <input
              type="radio"
              style={{ padding: "3px" }}
              name="sortBy"
              value="asc"
              defaultChecked={SortBy === "asc"}
            />
            <label className="text-md font-medium">Ascending</label>
          </div>
          <div className="flex justify-start gap-4">
            <input
              type="radio"
              style={{ padding: "3px" }}
              name="sortBy"
              value="desc"
              defaultChecked={SortBy === "desc"}
            />
            <label className="text-md font-medium">Descending</label>
          </div>
        </div>

        {/* Amenitines */}
        <div className="flex flex-col justify-start gap-y-2 mt-6">
          <h3 className="text-md font-semibold mb-2">Filter by</h3>
          <div className="flex justify-start gap-4">
            <input
              type="checkbox"
              style={{ padding: "3px" }}
              value="All"
              defaultChecked={category.includes("All")}
              onChange={handleCategoryChange}
            />
            <label className="text-md font-medium">All</label>
          </div>
          <div className="flex justify-start gap-4">
            <input
              type="checkbox"
              style={{ padding: "3px" }}
              value="Dinner"
              defaultChecked={category.includes("Dinner")}
              onChange={handleCategoryChange}
            />
            <label className="text-md font-medium">Dinner</label>
          </div>
          <div className="flex justify-start gap-4">
            <input
              type="checkbox"
              style={{ padding: "3px" }}
              value="Lunch"
              defaultChecked={category.includes("Lunch")}
              onChange={handleCategoryChange}
            />
            <label className="text-md font-medium">Lunch</label>
          </div>
          <div className="flex justify-start gap-4">
            <input
              type="checkbox"
              style={{ padding: "3px" }}
              value="Restaurant"
              defaultChecked={category.includes("Restaurant")}
              onChange={handleCategoryChange}
            />
            <label className="text-md font-medium">Restaurant</label>
          </div>
          <div className="flex justify-start gap-4">
            <input
              type="checkbox"
              style={{ padding: "3px" }}
              value="FreeWiFi"
              defaultChecked={category.includes("FreeWiFi")}
              onChange={handleCategoryChange}
            />
            <label className="text-md font-medium">Free WiFi</label>
          </div>
          <div className="flex justify-start gap-4">
            <input
              type="checkbox"
              style={{ padding: "3px" }}
              value="FreeParking"
              defaultChecked={category.includes("FreeParking")}
              onChange={handleCategoryChange}
            />
            <label className="text-md font-medium text-graylight">
              Free Parking included
            </label>
          </div>
        </div>
        {/* Ratings */}
        <div className="flex flex-col justify-start gap-y-3 mt-6">
          <h3 className="text-md font-semibold mb-2">Guest rating</h3>
          <div className="flex justify-start gap-4">
            <input type="radio" style={{ padding: "3px" }} />
            <label className="text-md font-medium">Any</label>
          </div>
          <div className="flex justify-start gap-4">
            <input type="radio" style={{ padding: "3px" }} />
            <label className="text-md font-medium">Wonderful 4.5+</label>
          </div>
          <div className="flex justify-start gap-4">
            <input type="radio" style={{ padding: "3px" }} />
            <label className="text-md font-medium">Very good 4+</label>
          </div>
          <div className="flex justify-start gap-4">
            <input type="radio" style={{ padding: "3px" }} />
            <label className="text-md font-medium">Good 3.5+</label>
          </div>
        </div>

        {/* Prices per night */}
        <div className="flex flex-col justify-start gap-y-3 mt-6">
          <h3 className="text-md font-semibold mb-2">Price per night</h3>
          <div className="flex justify-start gap-4">
            <input type="checkbox" style={{ padding: "3px" }} />
            <label className="text-md font-medium">Less than $200</label>
          </div>
          <div className="flex justify-start gap-4">
            <input type="checkbox" style={{ padding: "3px" }} />
            <label className="text-md font-medium">$200 to $4,000</label>
          </div>
          <div className="flex justify-start gap-4">
            <input type="checkbox" style={{ padding: "3px" }} />
            <label className="text-md font-medium">$400 to $800</label>
          </div>
          <div className="flex justify-start gap-4">
            <input type="checkbox" style={{ padding: "3px" }} />
            <label className="text-md font-medium text-graylight">
              $800 to $11$00
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
